# Power Eletric
<p align='center' >A simple api to manage task lists</p>

## Project Status

<p>In development</p>

## Features

- Create a user
- Authenticantion with jwt token
- Create, Delete and Update doneAt attribute on task
- Get list of tasks

## Technologies

- Node
- Passport
- Express
- Postrgres

## How to Install
<ul>
	<li>Install Node</li>
	<li>Download zip or git clone and</li>
	<li>Use packet manager of your preference to install dependencies</li>
	<li>Download and Install <a href="https://www.postgresql.org/download/">Postgres</a></li>
</ul>

## How to Use

- Search for SQL Shell (psql) and create tasks db
```sh
postgres=#CREATE DATABASE tasks;
```
- In <a href="knexfile.js">knex file</a> change your credentials or your password only
- In <a href=".env.example">.env.example</a> remove .example extension and generate a authsecret, recommended with sha256 algorithm
- Enter on project folder and run migrations
```sh
~/dev$ cd tasks-api
~/dev/tasks-api$ knex migrate:latest
```
- Start server
```sh
~/dev/tasks-api$ yarn start
```
- Using application of your preference, send requests to localhost:3000


### Examples with curl
- Create user
```sh
curl -X POST http://localhost:3000/signup
	-H "Content-Type: application/json"
	-d '{"name": "user_name", "email": "user_email", "password": "user_password"}'
```
- Authenticate user
```sh
curl -X POST http://localhost:3000/signin
	-H "Content-Type: application/json"
	-d '{"email": "user_email", "password": "user_password"}'
```
You will get a jwt token to put in header in next requests
- Get open tasks
```sh
curl http://localhost:3000/signup -H "Authorization: Bearer your_jwt_token"
```
- Create task
```sh
curl -X POST http://localhost:3000/tasks
	-H "Authorization: Bearer your_jwt_token"
	-H "Content-Type: application/json"
	-d '{"desc": "make examples on readme","estimatedAt": "2022-02-03"}'
```
- Delete task
```sh
curl -X POST http://localhost:3000/tasks/task_id
	-H "Authorization: Bearer your_jwt_token"
```
- Mark task as Done
```sh
curl -X PUT http://localhost:3000/tasks/task_id/toggle
	-H "Authorization: Bearer your_jwt_token"
```


## Author

- Thyago Rodrigues (ThyagoKZKR)


