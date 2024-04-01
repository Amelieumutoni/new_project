TASK MANAGER WEB APPLICATION
Overview

This is a simple web application built with React, Tailwind CSS hat allows users to manage and track their tasks efficiently.
Users can add new tasks, view the list of tasks, and mark tasks as completed.

FEATURES:
Add new tasks
View the list of tasks
Mark tasks as completed
Delete tasks

GETTING STARTED WITH THE APP:

Before you start, ensure you have the following installed on your local machine:

Node.js
npm (Node Package Manager)
Docker (for containerization)

INSTALATION
Follow these steps to set up the project on your local machine:

Clone the repository: git clone https://github.com/Amelieumutoni/new_project.git
Navigate to the project directory:cd task-manager
Install dependencies:npm install
Running the Application
To run the web application: npm run dev
The application will be available at http://localhost:3000

CONTANARIZATION WITH DOCKER

To build a Docker image for the application, run: docker build -t task-manager-app .
To run the Docker container:docker run -p 3000:3000 task-manager-app
