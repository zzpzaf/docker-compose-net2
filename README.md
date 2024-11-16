
# Multi-Container Angular SSR Setup 
### frontend: NGINX / Node.js, backend: Java / Spring Boot, and database: MariaDB

This repository contains a Docker Compose setup for an Angular Server-Side Rendering (SSR) application using NGINX and Node.js, a Java Spring Boot backend API, and a MariaDB database. The project is designed to run in a 3-container setup using a shared Docker network (`net2`).

## Project Overview

The setup includes the following services:

1. **Frontend**:
   - NGINX serves the Angular SSR application with a Node.js Express server for server-side rendering.
   - Handles static assets and proxies API requests to the backend service.

2. **Backend**:
   - Java Spring Boot API running in a separate container.
   - Provides RESTful services for the Angular frontend.

3. **Database**:
   - MariaDB container for persistent data storage.
   - Used by the backend API for data management.

## Prerequisites

Ensure you have the following installed on your host machine:

- [Docker](https://www.docker.com/get-started) (v20.10 or higher)
- [Docker Compose](https://docs.docker.com/compose/install/) (v1.27.0 or higher)

## Project Structure

```
net2/
|── README.md
|-- backend
|   |-- Dockerfile
|   |-- api					<--- subfolder
|   |-- run_jar.sh
|   |-- supervisord.conf
|-- database
|   `-- data				<--- subfolder
|       `-- mysql			<--- subfolder
|-- docker-compose.yaml
`-- frontend
    |-- Dockerfile
    |-- my-default.conf
    `--- nginx
        `-- wwwroot			<--- subfolder

```

### Services

- **Frontend**:
  - Runs NGINX with Node.js Express for Angular SSR.
  - Accessible at `http://localhost:8001`.
- **Backend**:
  - Runs a Java Spring Boot API.
  - Accessible <u>internally</u> via `http://net2-backend-api:8080`.
- **Database**:
  - Runs MariaDB with exposed port `3306` for <u>internal</u> access.

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```


### 2. Build the Docker Images

Run the following command to build the Docker images for all services:

```bash
docker-compose build
```

### 4. Start the Services

Start all services in detached mode:

```bash
docker-compose up -d
```

### 5. Stop the Services

To stop all running services:

```bash
docker-compose stop
```

### 6. Start/Restart the Services

To start all running services:

```bash
docker-compose start
```


## Usage

### Access the Frontend

Open your browser and navigate to:

```
http://localhost:8001
```


### Checking the Status

To check the status of all services:

```bash
docker-compose ps
```

### Viewing Logs

You can view the logs for each service using:

```bash
docker-compose logs frontend
docker-compose logs backend
docker-compose logs database
```

## Configuration Details

### Docker Network: `net2`

All services are part of a user-defined bridge network named `net2`. This allows the containers to communicate with each other using their service names.


## License

This project is licensed under the MIT License.


Read more at my related posts: 
### "Containerize and automate the deployment of a 3-tier full-stack project"

* **[Medium](https://medium.com/@zzpzaf.se)**
* **[DevXperiences](https://www.devxperiences.com/developers-posts/)** 


