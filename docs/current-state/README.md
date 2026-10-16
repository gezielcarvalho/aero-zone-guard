# Current implementation documentation

This folder describes the Aero Zone Guard prototype currently in this repository. It is separate from the numbered historical analysis documents in the parent folder.

| Document | Purpose |
| --- | --- |
| [Project charter](project-charter.md) | Current scope and portfolio role |
| [Architecture](architecture.md) | .NET 8, Angular 18, and container shape |
| [Delivery and quality](delivery-and-quality.md) | Current maturity and promotion boundaries |
| [Decision log](decision-log.md) | Traceable documentation decisions |

## Status

The current prototype provides CRUD management of construction-submission documents through an ASP.NET Core 8 API and Angular 18 interface. It uses Entity Framework Core's in-memory provider for development. Geospatial assessment, workflow automation, durable storage, authentication, and aviation-authority integrations are planned rather than implemented.

Treat this repository as a domain and architecture showcase, not a production aviation-safety decision system.
