# Docker Deployment Guide

This guide provides detailed information about running and deploying the Aero Zone Guard application using Docker and Docker Compose.

## Architecture

The application is containerized using a multi-container setup:

- **Backend Container**: ASP.NET Core 8.0 API running on port 8080
- **Frontend Container**: Angular 18 SPA served by Nginx on port 80
- **Network**: Both containers communicate through a Docker bridge network

## Quick Start

### Running with Docker Compose

The simplest way to run the application:

```bash
# Build and start all services
docker compose up --build

# Run in detached mode (background)
docker compose up -d
```

Access the application:

- **Frontend**: http://localhost:4200
- **Backend API**: http://localhost:8080/api
- **Swagger UI**: http://localhost:8080/swagger

### Stopping the Application

```bash
# Stop all containers
docker compose down

# Stop and remove volumes
docker compose down -v
```

## Docker Files Overview

### Backend Dockerfile

Location: `backend/Dockerfile`

**Multi-stage build:**

1. **Base stage**: Uses `mcr.microsoft.com/dotnet/aspnet:8.0` runtime
2. **Build stage**: Uses `mcr.microsoft.com/dotnet/sdk:8.0` to compile the application
3. **Publish stage**: Creates optimized release build
4. **Final stage**: Copies published output to runtime image

**Exposed ports**: 8080, 8081

### Frontend Dockerfile

Location: `frontend/Dockerfile`

**Multi-stage build:**

1. **Build stage**: Uses `node:18-alpine` to build Angular application
2. **Final stage**: Uses `nginx:alpine` to serve the static files

**Nginx configuration**: Custom configuration in `frontend/nginx.conf` with:

- API proxy to backend container
- Gzip compression
- Security headers
- SPA routing support
- Static asset caching

**Exposed port**: 80

### Docker Compose

Location: `docker-compose.yml`

Orchestrates both services with:

- Automatic network creation
- Service dependencies
- Port mappings
- Environment variables
- Restart policies

## Individual Container Operations

### Building Individual Images

**Backend:**

```bash
cd backend
docker build -t aerozoneguard-backend:latest .
```

**Frontend:**

```bash
cd frontend
docker build -t aerozoneguard-frontend:latest .
```

### Running Individual Containers

**Backend only:**

```bash
docker run -d \
  --name aerozoneguard-backend \
  -p 8080:8080 \
  -e ASPNETCORE_ENVIRONMENT=Development \
  -e ASPNETCORE_URLS=http://+:8080 \
  aerozoneguard-backend:latest
```

**Frontend only (requires backend running):**

```bash
docker run -d \
  --name aerozoneguard-frontend \
  --link aerozoneguard-backend:backend \
  -p 4200:80 \
  aerozoneguard-frontend:latest
```

## Environment Variables

### Backend Environment Variables

| Variable                 | Default       | Description             |
| ------------------------ | ------------- | ----------------------- |
| `ASPNETCORE_ENVIRONMENT` | Development   | Application environment |
| `ASPNETCORE_URLS`        | http://+:8080 | URLs to listen on       |
| `ASPNETCORE_HTTP_PORTS`  | 8080          | HTTP ports              |

### Frontend Environment Variables

The frontend uses Nginx and doesn't require runtime environment variables. API endpoint is configured in `nginx.conf`.

**Environment Configuration:**

- **Development** (`environment.ts`): Uses `https://localhost:7122/api` for local Angular dev server
- **Production** (`environment.prod.ts`): Uses `/api` for Docker/production (proxied by Nginx)

The Docker build uses the production configuration, which automatically replaces environment files during the build process.

## Docker Commands Reference

### Viewing Logs

```bash
# All services
docker compose logs -f

# Specific service
docker compose logs -f backend
docker compose logs -f frontend

# Last 100 lines
docker compose logs --tail=100 backend
```

### Executing Commands in Containers

```bash
# Backend bash
docker compose exec backend bash

# Frontend shell
docker compose exec frontend sh

# Run dotnet commands in backend
docker compose exec backend dotnet --version
```

### Container Management

```bash
# List running containers
docker compose ps

# Restart services
docker compose restart

# Restart specific service
docker compose restart backend

# Stop specific service
docker compose stop frontend

# Remove stopped containers
docker compose rm
```

### Image Management

```bash
# List images
docker images | grep aerozoneguard

# Remove images
docker rmi aerozoneguard-backend:latest
docker rmi aerozoneguard-frontend:latest

# Rebuild without cache
docker compose build --no-cache
```

## Production Deployment

### Publishing to Docker Hub

```bash
# Login to Docker Hub
docker login

# Tag images
docker tag aerozoneguard-backend:latest username/aerozoneguard-backend:latest
docker tag aerozoneguard-backend:latest username/aerozoneguard-backend:v0.1.0
docker tag aerozoneguard-frontend:latest username/aerozoneguard-frontend:latest
docker tag aerozoneguard-frontend:latest username/aerozoneguard-frontend:v0.1.0

# Push images
docker push username/aerozoneguard-backend:latest
docker push username/aerozoneguard-backend:v0.1.0
docker push username/aerozoneguard-frontend:latest
docker push username/aerozoneguard-frontend:v0.1.0
```

### Azure Container Instances

```bash
# Login to Azure
az login

# Create resource group
az group create --name aerozoneguard-rg --location eastus

# Deploy backend container
az container create \
  --resource-group aerozoneguard-rg \
  --name aerozoneguard-backend \
  --image username/aerozoneguard-backend:latest \
  --dns-name-label aerozoneguard-api \
  --ports 8080

# Deploy frontend container
az container create \
  --resource-group aerozoneguard-rg \
  --name aerozoneguard-frontend \
  --image username/aerozoneguard-frontend:latest \
  --dns-name-label aerozoneguard-app \
  --ports 80
```

### AWS ECS/Fargate

1. Create ECR repositories
2. Push images to ECR
3. Create ECS task definitions
4. Create ECS service
5. Configure Application Load Balancer

### Google Cloud Run

```bash
# Deploy backend
gcloud run deploy aerozoneguard-backend \
  --image username/aerozoneguard-backend:latest \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated

# Deploy frontend
gcloud run deploy aerozoneguard-frontend \
  --image username/aerozoneguard-frontend:latest \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

## Troubleshooting

### Container won't start

```bash
# Check logs
docker compose logs backend

# Inspect container
docker inspect aerozoneguard-backend

# Check if port is already in use
netstat -ano | findstr :8080  # Windows
lsof -i :8080                 # Linux/Mac
```

### Cannot connect to backend from frontend

1. Verify both containers are on the same network:

   ```bash
   docker network inspect aero-zone-guard_aerozoneguard-network
   ```

2. Check backend is healthy:

   ```bash
   docker compose exec backend curl http://localhost:8080/api/SubmissionDocuments
   ```

3. Verify Nginx proxy configuration in `frontend/nginx.conf`

4. Check frontend logs for CORS or connection errors:

   ```bash
   docker compose logs frontend
   ```

5. Verify the production environment is using relative API URLs:
   - File: `frontend/src/environments/environment.prod.ts`
   - Should be: `apiUrl: '/api'` (not `https://localhost:7122/api`)

### CORS errors

If you see CORS errors in the browser console:

1. Check backend CORS configuration includes the frontend URL
2. Verify you're accessing via `http://localhost:4200`
3. Check backend logs: `docker compose logs backend`

### Build failures

```bash
# Clean build
docker compose down
docker compose build --no-cache
docker compose up
```

### Permission issues (Linux)

```bash
# Add user to docker group
sudo usermod -aG docker $USER

# Restart docker service
sudo systemctl restart docker
```

## Performance Optimization

### Image Size Optimization

- Multi-stage builds are already implemented
- Backend uses minimal `aspnet:8.0` runtime
- Frontend uses lightweight `nginx:alpine`

### Build Caching

```bash
# Use BuildKit for better caching
DOCKER_BUILDKIT=1 docker compose build
```

### Resource Limits

Add to `docker-compose.yml`:

```yaml
services:
  backend:
    deploy:
      resources:
        limits:
          cpus: "0.5"
          memory: 512M
```

## Security Considerations

1. **Don't expose unnecessary ports** - Only expose required ports
2. **Use environment variables** - Never hardcode secrets
3. **Run as non-root user** - Consider adding non-root user to Dockerfiles
4. **Scan images** - Use `docker scan` to check for vulnerabilities
5. **Keep base images updated** - Regularly update base images
6. **Use .dockerignore** - Prevent sensitive files from being copied

## Health Checks

Add health checks to `docker-compose.yml`:

```yaml
services:
  backend:
    healthcheck:
      test:
        ["CMD", "curl", "-f", "http://localhost:8080/api/SubmissionDocuments"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
```

## Support

For issues related to Docker deployment:

1. Check container logs: `docker compose logs -f`
2. Verify network connectivity: `docker network ls`
3. Review this documentation
4. Open an issue on GitHub with logs and configuration

---

**Last Updated**: November 2024
