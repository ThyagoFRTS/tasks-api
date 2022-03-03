# Power Eletric
<p align='center' >A simple api to manage task lists</p>

## Project Status

<p>In development</p>

## Features

- Create a user
- Authenticantion with jwt token
- Create, Delete and Update doneAt attribute on task
- Get list of tasks

## How to Install
<ul>
	<li>Install Node</li>
	<li>Download zip or git clone and</li>
	<li>Use packet manager of your preference to install dependencies</li>
	<li>Download and Install <a href="https://www.postgresql.org/download/">Postgres</a></li>
</ul>

## How to Use

- Search for SQL Shell (psql) and create tasks db</li>
```
postgres=#CREATE DATABASE tasks;
```
- Enter on project folder and run migrations</li>
```
~/dev$ cd tasks-api
~/dev/tasks-api$ knex migrate:latest
```
- Start server</li>
```
~/dev/tasks-api$ yarn start
```
- Using application of your preference, send requests to localhost:3000</li>


### Examples with curl



## Technologies

- Node
- Passport
- Express
- Postrgres

## Author

- Thyago Rodrigues (ThyagoKZKR)


