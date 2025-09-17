# 04 - Domain Classes

## User

**Attributes:**

- `id: int` (primary key)
- `username: str`
- `password: str` (hashed)
- `role: str` (customer, technician, manager)
- `email: str`

**Methods:**

- `authenticate(username: str, password: str) -> User`: Authenticates a user with the provided username and password.
- `register(username: str, password: str, email: str, role: str) -> User`: Registers a new user with the specified details.

## SubmissionDocument

**Attributes:**

- `id: int` (primary key)
- `user_id: int` (foreign key)
- `title: str`
- `description: str`
- `status: str` (submitted, in review, approved, denied)
- `submission_date: datetime`
- `last_updated: datetime`

**Methods:**

- `submit_document(user_id: int, title: str, description: str) -> Document`: Submits a new document for review.
- `update_status(document_id: int, status: str) -> Document`: Updates the status of a document.

## Notification

**Attributes:**

- `id: int` (primary key)
- `user_id: int` (foreign key)
- `message: str`
- `read: bool`
- `created_at: datetime`

**Methods:**

- `send_notification(user_id: int, message: str) -> Notification`: Sends a notification to a user.
- `mark_as_read(notification_id: int) -> Notification`: Marks a notification as read.

## GeoAnalysis

**Attributes:**

- `id: int` (primary key)
- `document_id: int` (foreign key)
- `coordinates: str`
- `elevation: float`
- `analysis_result: str`
- `created_at: datetime`

**Methods:**

- `perform_analysis(document_id: int, coordinates: str, elevation: float) -> GeoAnalysis`: Performs geospatial analysis on the provided coordinates and elevation data.
- `get_analysis_result(document_id: int) -> GeoAnalysis`: Retrieves the analysis result for a document.

## Decision

**Attributes:**

- `id: int` (primary key)
- `document_id: int` (foreign key)
- `decision: str` (approved, denied)
- `reason: str`
- `created_at: datetime`

**Methods:**

- `issue_decision(document_id: int, decision: str, reason: str) -> Decision`: Issues a final decision for a document.
- `get_decision(document_id: int) -> Decision`: Retrieves the final decision for a document.

## Feedback

**Attributes:**

- `id: int` (primary key)
- `user_id: int` (foreign key)
- `rating: int`
- `comments: str`
- `created_at: datetime`

**Methods:**

- `submit_feedback(user_id: int, rating: int, comments: str) -> Feedback`: Submits feedback from a user.
- `get_feedback(user_id: int) -> Feedback`: Retrieves feedback submitted by a user.
