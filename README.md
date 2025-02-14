# Live Sports Score Website with Betting Odds

## Overview
This project is a live sports score website that displays schedules, live game scores, and betting odds for selected sports. Users can navigate between different sports and view relevant game data.

###Prototype link
- **Static Web:** [Link](https://thankful-river-07a417610.4.azurestaticapps.net/)

### Web API Link
- **Web API (Swagger Documentation):** [Link](https://dylan22-adfzeghfhsaqbvck.centralus-01.azurewebsites.net/swagger/index.html)

## Current Progress:

### Web API - Backend:
- Developed a **.NET Core** Web API using **Visual Studio Code**.
- Implemented controllers to call the **odds API** to fetch sports and other related data.
- Tested the API locally using **Postman**, verifying JSON responses.
- **Deployed the Web API** to **Microsoft Azure App Service**.
- Configured **GitHub Actions** for automated deployment to the App Service.
- Verified the running API using **Postman** and **Swagger documentation**.

### React.js - Frontend:
- Created a **React app** using **VS Code**.
- Developed **.js files** to fetch and display data from the Web API.
- Styled the interface using **.css files**.
- Used **React StrictMode** for development debugging.
- Integrated **BrowserRouter** for client-side routing.
- Displays sports schedules and betting odds.

### GitHub:
- **Pushed project** to **GitHub**.
- Followed **GitHub Flow** branching strategy.
- Created feature branches and used **Pull Requests**.
- Configured **GitHub Actions** for CI/CD.

### Microsoft Azure:
- **Provisioned Static Web App** (frontend) and **App Service** (backend).
- Linked both services to **GitHub**.
- Configured **YAML pipelines** for automated deployment.

### Postman:
- Used for API testing:
  - Local Web API testing.
  - Third-party **odds API** testing.
  - Deployed Web API validation.
