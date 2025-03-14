# Live Sports Score Website with Betting Odds

Milestone 1 Overview: 
<iframe id="kaltura_player" src='https://cdnapisec.kaltura.com/p/2370711/embedPlaykitJs/uiconf_id/54949472?iframeembed=true&amp;entry_id=1_nnzralrn&amp;config%5Bprovider%5D=%7B%22widgetId%22%3A%221_919ssuzc%22%7D&amp;config%5Bplayback%5D=%7B%22startTime%22%3A0%7D'  style="width: 608px;height: 342px;border: 0;" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" title="MileStone1-Overview"></iframe>

Milestone 2 Overview: 
<iframe id="kaltura_player" src='https://cdnapisec.kaltura.com/p/2370711/embedPlaykitJs/uiconf_id/54949472?iframeembed=true&amp;entry_id=1_qgttuucu&amp;config%5Bprovider%5D=%7B%22widgetId%22%3A%221_y5vc0zr8%22%7D&amp;config%5Bplayback%5D=%7B%22startTime%22%3A0%7D'  style="width: 608px;height: 342px;border: 0;" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" title="Milestone 2 "></iframe>


## Overview
This project is a live sports score website that displays schedules, live game scores, and betting odds for selected sports. Users can navigate between different sports and view relevant game data.

 The main components of this are in controllers folder & ./client/fetch-api-app

## Update: 
I have fully recreated the web app. I have not launched it yet to microsoft azure but I do by the time milestone 3 is due. For this I recreated the homepage for it looks more organized and has a lot more sports that you can choose from. As well I implemted the live scores for each game that is currently on depending on what sport you pick. In the section as well I have sports news on the sidebar and it changes the news based off of what sport you pick. 

## Things I want to add: 
- Implement the live betting odds
- Possibly include the record next to each team in the scoreboard
- Add standings for every team 


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
- Displays sports schedules and live scores.

### GitHub:
- **Pushed project** to **GitHub**.
- Followed GitHub Flow branching strategy.

### Postman:
- Used for API testing:
  - Local Web API testing.
  - Third-party **odds API** testing.
