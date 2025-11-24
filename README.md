# Aero Zone Guard - Airspace Construction Assessment System

The **Aero Zone Guard** is a fullstack software solution designed to automate the analysis and assessment of construction projects in relation to their potential impact on aviation safety and airspace management. Whether it's a new building, antenna, or airport, the system evaluates potential threats and interference with existing aviation infrastructure before authorizing construction. Developed to streamline the reception, analysis, and decision-making process, this software facilitates the flow of electronic documentation through various sectors of the aeronautical authority, ultimately leading to the issuance or denial of clearance for the proposed project.

## Key Features

- **Automated Documentation Reception:** Submit electronic documentation related to construction projects with comprehensive tracking and status management
- **Document Management:** Create, read, update, and delete submission documents through an intuitive interface
- **Pre-Analysis Based on Geographic Data:** Assess potential threats using geographic coordinates and elevation information (planned feature)
- **Workflow Management:** Track documentation status through different review stages (submitted, in review, approved, denied)
- **RESTful API:** Complete CRUD operations with ASP.NET Core Web API
- **Responsive UI:** Modern Angular-based single-page application with FontAwesome icons and Bootstrap styling
- **Real-time Updates:** Seamless communication between frontend and backend

## Architecture

### Backend (ASP.NET Core 8.0)

- **Framework:** .NET 8.0
- **API Pattern:** RESTful Web API with Swagger/OpenAPI documentation
- **Architecture:** Repository pattern with dependency injection
- **Database:** Entity Framework Core with In-Memory database (development)
- **CORS:** Configured for Angular development server (`https://localhost:4200`)

### Frontend (Angular 18)

- **Framework:** Angular 18.1.0
- **UI Libraries:** Bootstrap 5.3.3, FontAwesome
- **HTTP Client:** Modern Angular HttpClient (standalone API)
- **Routing:** Angular Router with SPA navigation
- **Development:** Angular CLI with SSL support and proxy configuration

## Technologies Stack

- **Backend:** C# / ASP.NET Core 8.0
- **Frontend:** Angular 18, TypeScript 5.5
- **UI Framework:** Bootstrap 5.3.3
- **Icons:** FontAwesome
- **Database:** Entity Framework Core In-Memory (development)
- **API Documentation:** Swagger/Swashbuckle
- **Testing:** Jasmine, Karma
- **Build Tools:** .NET SDK, Angular CLI, npm
- **Containerization:** Docker, Docker Compose
- **Web Server:** Nginx (production)

## Prerequisites

### For Local Development

- [.NET 8.0 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Node.js](https://nodejs.org/) (v18 or later)
- [Angular CLI](https://angular.io/cli) (v18.1.4)
- [Git](https://git-scm.com/)

### For Docker Deployment

- [Docker](https://www.docker.com/get-started) (v20.10 or later)
- [Docker Compose](https://docs.docker.com/compose/install/) (v2.0 or later)

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/gezielcarvalho/aero-zone-guard.git
cd aero-zone-guard
```

### 2. Backend Setup

1. **Navigate to the backend directory:**

   ```bash
   cd backend
   ```

2. **Restore dependencies:**

   ```bash
   dotnet restore
   ```

3. **Run the backend server:**

   ```bash
   dotnet run
   ```

   The API will be available at `https://localhost:7163` and Swagger UI at `https://localhost:7163/swagger`

### 3. Frontend Setup

1. **Navigate to the frontend directory:**

   ```bash
   cd ../frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

   The Angular app will be available at `https://localhost:4200`

### 4. Running the Full Stack Application

**Option 1: Using Docker Compose (Recommended)**

The easiest way to run the entire application:

```bash
docker compose up --build
```

Access the application:

- Frontend: `http://localhost:4200`
- Backend API: `http://localhost:8080/api`
- Swagger UI: `http://localhost:8080/swagger`

To stop the containers:

```bash
docker compose down
```

**Option 2: Using Visual Studio 2022**

- Open `AeroZoneGuard.sln`
- Set multiple startup projects (both backend and frontend)
- Press F5 to run

**Option 3: Separate Terminals**

- Terminal 1: `cd backend && dotnet run`
- Terminal 2: `cd frontend && npm start`
- Access the app at `https://localhost:4200`

## API Endpoints

The backend exposes the following RESTful API endpoints:

| Method | Endpoint                        | Description                      |
| ------ | ------------------------------- | -------------------------------- |
| GET    | `/api/SubmissionDocuments`      | Get all submission documents     |
| GET    | `/api/SubmissionDocuments/{id}` | Get a specific document by ID    |
| POST   | `/api/SubmissionDocuments`      | Create a new submission document |
| PUT    | `/api/SubmissionDocuments/{id}` | Update an existing document      |
| DELETE | `/api/SubmissionDocuments/{id}` | Delete a document                |

API documentation is available via Swagger at `https://localhost:7163/swagger` when running in development mode.

## Application Features

### Current Features (v0.1)

- ✅ Document submission and management
- ✅ CRUD operations for submission documents
- ✅ List view with all documents
- ✅ Create/Edit forms with validation
- ✅ Status tracking (submitted, in review, approved, denied)
- ✅ Responsive UI with Bootstrap
- ✅ RESTful API with Swagger documentation
- ✅ Docker containerization with Docker Compose
- ✅ Production-ready Nginx configuration
- ✅ Environment-based API configuration (dev/prod)

### Planned Features

- 🔲 User authentication and authorization
- 🔲 Geographic coordinate analysis (DotSpatial integration)
- 🔲 Multi-sector workflow management
- 🔲 Notification system
- 🔲 Decision management and tracking
- 🔲 Feedback system
- 🔲 SQL Server/MongoDB integration
- 🔲 Azure deployment

## Project Structure

```
aero-zone-guard/
├── backend/                    # ASP.NET Core Web API
│   ├── Controllers/           # API Controllers
│   ├── Data/                  # DbContext and database configuration
│   ├── Interfaces/            # Repository interfaces
│   ├── Models/                # Domain models
│   ├── Repositories/          # Repository implementations
│   ├── Dockerfile             # Backend Docker configuration
│   ├── .dockerignore          # Docker ignore file
│   └── Program.cs             # Application entry point
├── frontend/                   # Angular SPA
│   ├── src/
│   │   ├── app/
│   │   │   ├── submission-document/      # Document form component
│   │   │   ├── submission-document-list/ # List view component
│   │   │   ├── interfaces/               # TypeScript interfaces
│   │   │   └── app.module.ts
│   │   └── proxy.conf.js      # API proxy configuration
│   ├── Dockerfile             # Frontend Docker configuration
│   ├── nginx.conf             # Nginx web server configuration
│   ├── .dockerignore          # Docker ignore file
│   └── package.json
├── docs/                       # System documentation
│   ├── 01-System-Vision-Document.md
│   ├── 02-Requirements-and-User-Stories.md
│   ├── 04-Domain-Classes.md
│   └── ...
├── docker-compose.yml         # Docker Compose orchestration
├── .dockerignore              # Root Docker ignore file
└── AeroZoneGuard.sln          # Visual Studio solution

```

## Development

### Backend Development

**Run with hot reload:**

```bash
cd backend
dotnet watch run
```

**Run tests:**

```bash
dotnet test
```

**Entity Framework Commands:**

```bash
# Add migration
dotnet ef migrations add MigrationName

# Update database
dotnet ef database update

# Remove last migration
dotnet ef migrations remove
```

### Frontend Development

**Start development server:**

```bash
cd frontend
npm start
```

**Run unit tests:**

```bash
npm test
```

**Build for production:**

```bash
npm run build
```

**Linting:**

```bash
# Check for linting issues
npx eslint .

# Fix linting issues
npx eslint . --fix
```

### Docker Development

**Build and run with Docker Compose:**

```bash
# Build and start all services
docker compose up --build

# Run in detached mode (background)
docker compose up -d

# View logs
docker compose logs -f

# Stop all services
docker compose down

# Remove volumes (reset database)
docker compose down -v
```

**Build individual containers:**

```bash
# Backend only
cd backend
docker build -t aerozoneguard-backend .

# Frontend only
cd frontend
docker build -t aerozoneguard-frontend .
```

**Run individual containers:**

```bash
# Backend
docker run -p 8080:8080 aerozoneguard-backend

# Frontend
docker run -p 4200:80 aerozoneguard-frontend
```

### Code Quality

The project follows these standards:

- **Backend:** C# coding conventions with nullable reference types enabled
- **Frontend:** TypeScript with strict mode, ESLint with Prettier
- **Architecture:** Repository pattern, Dependency Injection, RESTful API design
- **Containerization:** Multi-stage Docker builds for optimized images

## Deployment

### Docker Deployment (Recommended)

The application is fully containerized and can be deployed to any Docker-compatible platform:

**Local/On-Premise:**

```bash
docker compose up -d
```

**Docker Hub:**

```bash
# Tag and push images
docker tag aerozoneguard-backend username/aerozoneguard-backend:latest
docker tag aerozoneguard-frontend username/aerozoneguard-frontend:latest
docker push username/aerozoneguard-backend:latest
docker push username/aerozoneguard-frontend:latest
```

**Production Deployment:**

- **Azure Container Instances** - Deploy containers directly to Azure
- **Azure Container Apps** - Serverless container platform
- **AWS ECS/Fargate** - Amazon container services
- **Google Cloud Run** - Serverless container platform
- **Kubernetes** - For orchestration at scale

### Traditional Deployment

For detailed deployment instructions to Azure App Service, see [DEPLOY.md](DEPLOY.md).

**Quick deployment options:**

- Deploy from Visual Studio using Azure publish profile
- Deploy via GitHub Actions CI/CD pipeline
- Use Azure CLI for command-line deployment

## Contributing

Contributions to the **Aero Zone Guard** are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your code follows the project's coding standards and includes appropriate tests.

## Documentation

Comprehensive system documentation is available in the `/docs` folder:

- [System Vision Document](docs/01-System-Vision-Document.md)
- [Requirements and User Stories](docs/02-Requirements-and-User-Stories.md)
- [Domain Classes](docs/04-Domain-Classes.md)
- [Deployment Guide](DEPLOY.md)
- [Docker Deployment Guide](DOCKER.md)

## References

- [DotSpatial - Geospatial Library](https://github.com/DotSpatial/DotSpatial)
- [Angular Tutorial](https://www.youtube.com/watch?v=YrxBCBibVo0&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1)
- [ASP.NET Core Documentation](https://learn.microsoft.com/en-us/aspnet/core/)
- [Angular Documentation](https://angular.io/docs)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For questions or issues, please:

- Open an issue on GitHub
- Check the documentation in the `/docs` folder
- Review the API documentation at the Swagger endpoint

---

**Current Version:** 0.1.0 (In Development)  
**Last Updated:** November 2024
