# Kubernetes Dashboard

This project is a web dashboard that displays the namespace and pod name information from a Kubernetes cluster. It is built with Node.js for the backend and React.js for the frontend. The application is containerized using Docker and includes CI/CD pipelines for automated deployment.

## Features

- Display list of namespaces.
- Display list of pods.

## Setup

### Prerequisites

- Node.js
- Docker
- Kubernetes cluster and kubeconfig file

### Running the Application

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd k8s-dashboard
   ```

2. Build and run the application using Docker Compose:
   ```sh
   docker-compose up --build
   ```

3. Access the frontend at `http://localhost:3000` and the backend at `http://localhost:5000`.

## CI/CD Pipeline

The project includes an Azure DevOps pipeline configuration for automated building and deployment. The pipeline is triggered on pushes to the `main` branch.

## Contributing

Feel free to submit issues and pull requests to improve the project.

## License

This project is licensed under the MIT License.
