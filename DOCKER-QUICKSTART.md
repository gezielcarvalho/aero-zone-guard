# Aero Zone Guard - Docker Quick Start

## Prerequisites

- Docker Desktop installed and running
- At least 2GB of free RAM
- Ports 80 and 8080 available

## Quick Start Commands

### Start the Application

```bash
docker compose up --build
```

### Access the Application

- **Frontend**: http://localhost:4200
- **API**: http://localhost:8080/api
- **Swagger**: http://localhost:8080/swagger

### Stop the Application

```bash
docker compose down
```

## Common Commands

### View Logs

```bash
# All services
docker compose logs -f

# Specific service
docker compose logs -f backend
docker compose logs -f frontend
```

### Restart Services

```bash
# Restart all
docker compose restart

# Restart specific service
docker compose restart backend
```

### Rebuild After Code Changes

```bash
docker compose up --build
```

### Clean Everything

```bash
# Stop and remove containers, networks
docker compose down

# Also remove volumes (database reset)
docker compose down -v
```

## Troubleshooting

### Port Already in Use

**Error**: "Bind for 0.0.0.0:80 failed: port is already allocated"

**Solution**:

```bash
# Windows - Find and stop process using port 80
netstat -ano | findstr :80
taskkill /PID <process_id> /F

# Or change port in docker-compose.yml
ports:
  - "4201:80"  # Change 4200 to 4201
```

### Container Won't Start

```bash
# Check logs
docker compose logs backend

# Rebuild without cache
docker compose build --no-cache
docker compose up
```

### Cannot Access Application

1. Verify containers are running: `docker compose ps`
2. Check logs: `docker compose logs -f`
3. Ensure ports aren't blocked by firewall
4. Try accessing: http://localhost:8080/swagger
5. Verify frontend at: http://localhost:4200

### API Connection Issues

If the frontend shows connection errors (e.g., trying to reach `https://localhost:7122`):

1. Ensure you rebuilt after configuration changes: `docker compose up --build`
2. Check that `environment.prod.ts` uses `/api` (not `https://localhost:7122/api`)
3. Verify `angular.json` has `fileReplacements` in production configuration
4. Clear browser cache and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

## Development Workflow

### Making Changes

**Backend Changes:**

1. Stop containers: `docker compose down`
2. Make code changes
3. Rebuild and restart: `docker compose up --build`

**Frontend Changes:**

1. Stop containers: `docker compose down`
2. Make code changes
3. Rebuild and restart: `docker compose up --build`

### Running in Background

```bash
# Start detached
docker compose up -d

# View status
docker compose ps

# View logs when needed
docker compose logs -f
```

## Need More Help?

- Full Docker documentation: [DOCKER.md](DOCKER.md)
- General documentation: [README.md](README.md)
- Deployment guide: [DEPLOY.md](DEPLOY.md)

## Support

For issues, open a GitHub issue with:

- Output of `docker --version`
- Output of `docker compose logs`
- Description of the problem
