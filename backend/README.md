# Python REST fastAPI 

## Description
This is a simple REST API written in Python, using fastAPI and MongoDB, for instrucional purposes only. As for persistence, we use MongoDB as database and Motor for operations. It is developed following an MVC architecture.

## Requirements
- Python 3.8
- MongoDB 4.4.1
- fastAPI 0.63.0
- Motor 2.4.0
- Pydantic 1.7.3
- Uvicorn 0.13.4 

## Installation
1. Clone this repository
2. Install the requirements
3. Run the server (uvicorn main:app --reload)
4. Open your browser and go to http://localhost:8000/docs
5. Enjoy!

## Usage
### Create a new user
- Endpoint: /users
- Method: POST
- Body: 
```json
{
    "name": "John Doe",
    "email": "john@email.com",
    "password": "123456"
}
```