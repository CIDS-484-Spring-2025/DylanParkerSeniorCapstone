# Live Sports Score Website with Betting Odds

Here's a website overview of what it looks like since I wasn't able to launch it to azure: 
<iframe id="kaltura_player" src='https://cdnapisec.kaltura.com/p/2370711/embedPlaykitJs/uiconf_id/54949472?iframeembed=true&amp;entry_id=1_kcbn67ae&amp;config%5Bprovider%5D=%7B%22widgetId%22%3A%221_1dphkvp5%22%7D&amp;config%5Bplayback%5D=%7B%22startTime%22%3A0%7D'  style="width: 608px;height: 342px;border: 0;" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" title="WebsiteOverview"></iframe>


## Overview
This project is a live sports score website that displays schedules, live game scores, and betting odds for selected sports. Users can navigate between different sports and view relevant game data.

 The main components of this are in controllers folder & ./client/fetch-api-app

## Update: 
I havent been able to launch my website because my subscription with azure had ended and I dont want to pay for it. So instead I added my last feature to this. I was pretty limited with the api that I was using and pretty much had used all of the API data that I could from it, so I created a Sports matching game instead. You select a tile and the tile will flip around and and show you a sport. Once you see the sport you will select another tile that will flip around. If they are the same sport then they will stay flipped, but if they are not the same then they will flip back around. 

## Things I want to add: 
- Launch my api and website through microsoft azure.


## Current Progress:

### Features: 
- Created live sport scores with each team that is playing. 
- Created a schedule for the day of what teams are playing.
- Added what the betting line is for the game.
- Added a Team Information page to get more information on what team you want to know about.
- Added a fun sports matching game to just make it a little different than a regular live sports website. 

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
