# User API CRUD
A CRUD Api to manage users. This API stores the information in an array so it does not require a database.

List of endpoints:
* GET /api/user
* GET /api/user/:id
* POST /api/user
* PUT /api/user/:id
* DELETE /api/user/:id

## Installation
To get this API running locally:
* Clone this repo
* ```npm install``` to install all required dependencies

## Run the server
* execute this command ```npm run dev```
## Sample requests
* Create a new User:

```curl -d '{ "email": "demo@gmail.com", "first_name": "juan", "last_name": "perez", "company": "Codemid" }' -H "Content-Type: application/json" -X POST http://localhost:3000/api/user```
* Get users

```curl http://localhost:3000/api/user```
* Get user by ID

```curl http://localhost:3000/api/user/1```