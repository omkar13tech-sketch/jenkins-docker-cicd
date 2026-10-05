# CloudOps Deployment Dashboard

A containerized deployment and service health dashboard deployed on **AWS EC2** using an automated **GitHub → Jenkins → Docker CI/CD pipeline**.

## 📌 Project Overview

CloudOps Deployment Dashboard is a practical DevOps project designed to demonstrate an automated application deployment workflow.

The project uses GitHub for source control, Jenkins for CI/CD automation, Docker for containerization, and AWS EC2 as the deployment environment.

A code change pushed to GitHub automatically triggers Jenkins through a GitHub Webhook. Jenkins then builds a new Docker image, replaces the existing container, and deploys the updated application on the EC2 server.

## 🎯 Objective

The main objective of this project was to build and demonstrate a basic automated CI/CD pipeline using commonly used DevOps tools.

The workflow automates:

* Source code integration
* CI/CD pipeline triggering
* Docker image creation
* Existing container replacement
* Application deployment
* Deployment verification

## 🏗️ Architecture

```text
Developer
    |
    | Push Code
    ↓
 GitHub Repository
    |
    | GitHub Webhook
    ↓
   Jenkins
    |
    | Docker Build
    ↓
 Docker Image
    |
    | Deploy
    ↓
 Docker Container
    |
    ↓
 AWS EC2
    |
    ↓
CloudOps Dashboard
```

## 🔄 CI/CD Workflow

### 1. Developer Push

Application changes are committed and pushed to the GitHub repository.

### 2. GitHub Webhook

GitHub sends a webhook notification to Jenkins whenever code is pushed to the repository.

### 3. Jenkins Pipeline

Jenkins automatically starts the CI/CD pipeline.

### 4. Docker Build

Jenkins builds a Docker image using the project's `Dockerfile`.

### 5. Container Replacement

The existing `cloudops-dashboard` container is stopped and removed.

### 6. Deployment

A new Docker container is started using the newly built image.

### 7. Application Verification

The updated dashboard becomes available through the EC2 instance.

## 🛠️ Technologies Used

| Technology   | Purpose                  |
| ------------ | ------------------------ |
| GitHub       | Source Code Management   |
| Jenkins      | CI/CD Automation         |
| Docker       | Containerization         |
| AWS EC2      | Application Hosting      |
| Ubuntu Linux | Server Operating System  |
| Nginx        | Web Server inside Docker |

## 🐳 Docker Implementation

The
