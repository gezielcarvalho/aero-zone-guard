# Architecture

## Current shape

```text
Angular 18 SPA
      |
      v
ASP.NET Core 8 REST API
      |
      v
Repository abstraction -> EF Core InMemory provider
```

The backend exposes submission-document endpoints through an ASP.NET Core controller and repository abstraction. The Angular application provides list and submission/edit views and communicates with the API through an Angular service. Docker Compose describes local frontend and backend containers.

## Data boundary

The active backend data store is Entity Framework Core's in-memory provider. The repository contains no implemented durable production database, migration path, or authoritative aviation data source.

## Documentation boundary

Historical documents describe a broader airspace-assessment vision and earlier technology directions. They are retained for history; this directory is the source for present implementation scope.
