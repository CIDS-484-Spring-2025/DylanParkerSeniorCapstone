import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Ensure you create this file for styling

function Home() {
  const navigate = useNavigate();

  const sports = [
    { name: "NBA Basketball", value: "basketball", league: "nba", image: "/images/nba.jpg" },
    { name: "Mens College Basketball", value: "basketball", league: "mens-college-basketball", image: "/images/college-basketball.png" },
    { name: "NFL Football", value: "football", league: "nfl", image: "/images/nfl.png" },
    { name: "MLB Baseball", value: "baseball", league: "mlb", image: "/images/mlb.png" },
    { name: "NHL Hockey", value: "hockey", league: "nhl", image: "/images/nhl.png" },
    { name: "College Football", value: "football", league: "college-football", image: "/images/college-football.png" },
    { name: "Womens College Basketball", value: "basketball", league: "womens-college-basketball", image: "/images/womens-college-basketball.png" },
    { name: "College Baseball", value: "baseball", league: "college-baseball", image: "/images/college-baseball.png" },
  ];

  return (
    <div className="Home">
      <header className="App-header">
        <div className="sports-tabs">
          {sports.map((sport) => (
            <button 
              key={sport.value + sport.league} 
              className="sport-tab" 
              onClick={() => navigate(`/scores/${sport.value}/${sport.league}`)} // Passing both sport and league
            >
              <img src={sport.image} alt={sport.name} className="sport-icon" />
              {sport.name}
            </button>
          ))}
        </div>
      </header>

      {/* Add a main image */}
      <div className="main-image">
        <img src="/images/sports-banner.jpeg" alt="Sports Odds" />
      </div>
    </div>
  );
}

export default Home;


