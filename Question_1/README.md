# DevOps Dashboard

This project is a web dashboard that displays the counts of projects, repositories, pipelines, releases, and users from Azure DevOps. It is built with Node.js for the backend and React.js for the frontend. The application is containerized using Docker and includes CI/CD pipelines for automated deployment.

## Features

- Display total number of projects.
- List number of pipelines and releases in each project.
- List number of users in each project.
- List number of repositories in each project.
- Display users' license types.

## Setup

### Prerequisites

- Node.js
- Docker
- Azure DevOps account and personal access token

### Running the Application

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd devops-dashboard
   ```

2. Create a `.env` file in the root directory and add your Azure DevOps details:
   ```env
   AZURE_DEVOPS_ORG=your_organization
   AZURE_DEVOPS_PROJECT=your_project
   AZURE_DEVOPS_TOKEN=your_token
   ```

3. Build and run the application using Docker Compose:
   ```sh
   docker-compose up --build
   ```

4. Access the frontend at `http://localhost:3000` and the backend at `http://localhost:5000`.

## CI/CD Pipeline

The project includes an Azure DevOps pipeline configuration for automated building and deployment. The pipeline is triggered on pushes to the `main` branch.

## Contributing

Feel free to submit issues and pull requests to improve the project.

## License

This project is licensed under the MIT License.
