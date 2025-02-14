Live Sports Score Website with Betting Odds

Overview

This project is a live sports score website that displays schedules, live game scores, and betting odds for selected sports. Users can navigate between different sports and view relevant game data.

Web API Links

Static Web API: Link

Web API (Swagger Documentation): Link

Current Progress

Web API - Backend

Developed a .NET Core Web API using Visual Studio Code.

Implemented controllers to call the odds API to fetch sports and other related data.

Tested the API locally using Postman, verifying JSON responses.

Deployed the Web API to Microsoft Azure App Service.

Configured GitHub Actions for automated deployment to the App Service.

Verified the running API using Postman and Swagger documentation.

React.js - Frontend

Created a React app using VS Code.

Developed .js files to fetch and display data from the Web API.

Styled the interface using .css files.

Implemented React StrictMode for early detection of issues in development.

Integrated BrowserRouter for seamless navigation between different sports pages.

Users can select sports to view schedules and betting odds.

GitHub

Pushed the project to GitHub.

Followed GitHub Flow branching strategy to manage new features separately from the main branch.

Created feature branches and used Pull Requests for code review.

Configured GitHub Actions to automate build and deployment processes to Azure.

Microsoft Azure

Provisioned a Static Web App (frontend) and an App Service (backend .NET Core Web API) to host the project.

Linked both services to the GitHub repository via GitHub Actions.

Created YAML pipeline configurations for automated build and deployment of the frontend and backend services.

Postman

Used Postman for API testing, including:

Local Web API testing.

Third-party odds API integration testing.

Deployed Web API validation.
