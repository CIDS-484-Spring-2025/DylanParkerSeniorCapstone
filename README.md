# Live Sports Score Website with Betting Odds

Milestone 3 Overview: 
<iframe id="kaltura_player" src='https://cdnapisec.kaltura.com/p/2370711/embedPlaykitJs/uiconf_id/54949472?iframeembed=true&amp;entry_id=1_gsod3ygl&amp;config%5Bprovider%5D=%7B%22widgetId%22%3A%221_rebshdu1%22%7D&amp;config%5Bplayback%5D=%7B%22startTime%22%3A0%7D'  style="width: 608px;height: 342px;border: 0;" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" title="DylanParker-Milestone3"></iframe>


## Overview
This project is a live sports score website that displays schedules, live game scores, and betting odds for selected sports. Users can navigate between different sports and view relevant game data.

 The main components of this are in controllers folder & ./client/fetch-api-app

## Update: 
I have added a new feature to my website which features team information. You are able to select a league that you want, then a team and it will give you a list of information about the team such as roster, schedule, and mroe. I dont think the specific api that i am using has the exact stuff, but instead has links towards that information that a person can click on and it will send you to the espn website with the information. I was going to launch my website through azure as well but my account subscription ended so I am going to have to make a new account for that. 

## Things I want to add: 

- Launch my api and website through microsoft azure.
- Add another key feature to my website. (To be determined). 


## Current Progress:

### Features: 
- Created live sport scores with each team that is playing. 
- Created a schedule for the day of what teams are playing.
- Added what the betting line is for the game.

### Web API - Backend:
- Developed a **.NET Core** Web API using **Visual Studio Code**.
- Implemented controllers to call the **odds API** to fetch sports and other related data.
- Tested the API locally using **Postman**, verifying JSON responses.
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
