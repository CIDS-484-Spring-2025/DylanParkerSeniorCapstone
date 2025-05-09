import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import styles specific to the home page

function Home() {
  const navigate = useNavigate();

  // Professional sports configuration
  const professionalSports = [
    { name: "NBA Basketball", value: "basketball", league: "nba", image: "/images/nba.jpg" },
    { name: "NFL Football", value: "football", league: "nfl", image: "/images/nfl.png" },
    { name: "MLB Baseball", value: "baseball", league: "mlb", image: "/images/mlb.png" },
    { name: "NHL Hockey", value: "hockey", league: "nhl", image: "/images/nhl.png" },
  ];

  // College sports configuration
  const collegeSports = [
    { name: "Men's College Basketball", value: "basketball", league: "mens-college-basketball", image: "/images/college-basketball.png" },
    { name: "Women's College Basketball", value: "basketball", league: "womens-college-basketball", image: "/images/womens-college-basketball.png" },
    { name: "College Football", value: "football", league: "college-football", image: "/images/college-football.png" },
    { name: "College Baseball", value: "baseball", league: "college-baseball", image: "/images/college-baseball.png" },
  ];

  return (
    <div className="home">
      {/* Header Section */}
      <header className="header">
        <h1 className="title">SportSphere</h1>
        <nav className="top-nav">
          <button onClick={() => navigate('/teaminfo')} className="nav-button">
            Team Information
          </button>
          <button onClick={() => navigate('/fungame')} className="nav-button">
            Fun Game
          </button>
        </nav>
      </header>

      {/* Intro Section */}
      <h2>Get the Latest Scores & Odds</h2>

      {/* Professional Sports Section */}
      <h2 className="section-title">Professional Sports</h2>
      <div className="sports-grid">
        {professionalSports.map((sport) => (
          <button
            key={sport.value + sport.league}
            className="sport-card"
            onClick={() => navigate(`/scores/${sport.value}/${sport.league}`)}
          >
            <img src={sport.image} alt={sport.name} className="sport-image" />
            <span className="sport-name">{sport.name}</span>
          </button>
        ))}
      </div>

      {/* College Sports Section */}
      <h2 className="section-title">College Sports</h2>
      <div className="sports-grid">
        {collegeSports.map((sport) => (
          <button
            key={sport.value + sport.league}
            className="sport-card"
            onClick={() => navigate(`/scores/${sport.value}/${sport.league}`)}
          >
            <img src={sport.image} alt={sport.name} className="sport-image" />
            <span className="sport-name">{sport.name}</span>
          </button>
        ))}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Sports Scores. All Rights Reserved.</p>
        <p>Privacy Policy | Terms of Service</p>
      </footer>
    </div>
  );
}

export default Home;
