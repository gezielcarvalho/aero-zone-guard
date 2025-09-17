# 03 - Subsystems and Packages

## Subsystems

### 1. Authentication and Authorization

- Responsible for user authentication, authorization, and role-based access control.
- Ensures data privacy and integrity by managing user credentials and permissions.
- **Package**: Authentication

### 2. User Management

- Manages user profiles, account settings, and user roles.
- Handles user registration, profile updates, and account deactivation.
- **Package**: UserProfile

### 3. Documentation Management

- Handles the submission, storage, and retrieval of electronic documentation.
- Manages the workflow of documentation through different sectors of the aeronautical authority.
- **Package**: DocumentFlow

### 4. Geospatial Analysis

- Performs pre-analysis based on geographic coordinates and elevation data.
- Assesses potential threats and interference with existing aviation infrastructure.
- **Package**: GeoAnalysis

### 5. Notification System

- Sends notifications to users about the status of their submitted documentation.
- Manages reminders for pending actions or deadlines.
- **Package**: Notifications

### 6. Decision Management

- Facilitates the emission of final decisions by the aeronautical authority.
- Stores and displays details of the final decision.
- **Package**: DecisionEngine

### 7. Feedback and Support

- Collects user feedback and ratings about the service.
- Provides help and support resources, such as FAQs and documentation.
- **Package**: Support

## Packages

### 1. Core Package

- Contains shared functionality and utilities used across multiple subsystems.
- Includes common models, services, and helper functions.
- Ensures consistency and reusability throughout the system.

### 2. Infrastructure Package

- Manages data access, external integrations, and system configuration.
- Includes database connectors, API clients, and configuration files.
- Ensures separation of concerns and scalability of the system.

### 3. Testing Package

- Contains unit tests, integration tests, and end-to-end tests for the system.
- Ensures code quality, reliability, and correctness through automated testing.
- Facilitates continuous integration and deployment practices.

### 4. Documentation Package

- Stores system documentation, user guides, and technical specifications.
- Provides comprehensive documentation to support development, deployment, and maintenance efforts.
