Task Manager Web Application
Overview

This is a simple web application built with Reacta java script library that allows users to manage and track their tasks efficiently. Users can add new tasks, view the list of tasks, and mark tasks as completed.

Features:
Add new tasks
View the list of tasks
Mark tasks as completed
Delete tasks

Getting Started with the app:

Before you start, ensure you have the following installed on your local machine:

Node.js
npm (Node Package Manager)
Docker (for containerization)

instalation:
Follow these steps to set up the project on your local machine:

Clone the repository: git clone https://github.com/Amelieumutoni/new_project.git
Navigate to the project directory:cd task-manager
Install dependencies:npm install
Running the Application
To run the web application: npm run dev
The application will be available at http://localhost:3000

Containerization with Docker:

To build a Docker image for the application, run: docker build -t task-manager-app .
To run the Docker container:docker run -p 3000:3000 task-manager-app
