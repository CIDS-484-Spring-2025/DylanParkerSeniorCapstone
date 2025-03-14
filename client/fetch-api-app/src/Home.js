import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const professionalSports = [
    { name: "NBA Basketball", value: "basketball", league: "nba", image: "/images/nba.jpg" },
    { name: "NFL Football", value: "football", league: "nfl", image: "/images/nfl.png" },
    { name: "MLB Baseball", value: "baseball", league: "mlb", image: "/images/mlb.png" },
    { name: "NHL Hockey", value: "hockey", league: "nhl", image: "/images/nhl.png" },
  ];

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
        <h1>SportSphere</h1>
      </header>

      {/* Banner Section */}
      <div className="banner">
        <img src="/images/sports-banner-UI.jpeg" alt="Sports Banner" />
        <div className="banner-overlay">
          <h2>Get the Latest Scores, Stats & Odds</h2>
        </div>
      </div>

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

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2025 Sports Scores. All Rights Reserved.</p>
        <p><a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a></p>
      </footer>
    </div>
  );
}

export default Home;
