import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Scores.css';

function Scores() {
  const { sport, league } = useParams(); // Get sport and league from the URL
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Construct the API URL dynamically based on sport and league
  const scoreboardBaseUrl = `https://site.api.espn.com/apis/site/v2/sports/${sport}/${league}/scoreboard`;

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await fetch(scoreboardBaseUrl);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchScores();
  }, [scoreboardBaseUrl]);

  return (
    <div className="Scores">
      <button onClick={() => navigate('/')} className="home-button">Go to Home</button>

      <h2>{league.toUpperCase()} Scoreboard</h2>
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: 'red' }}>Error: {error.message}</div>}
      {data && (
        <div className="scoreboard">
          {data.events.length > 0 ? (
            data.events.map((event, index) => {
              const homeTeam = event.competitions[0].competitors.find(team => team.homeAway === 'home').team;
              const awayTeam = event.competitions[0].competitors.find(team => team.homeAway === 'away').team;

              const homeScore = event.competitions[0].competitors.find(team => team.homeAway === 'home').score;
              const awayScore = event.competitions[0].competitors.find(team => team.homeAway === 'away').score;

              const startTime = event.competitions[0].date
                ? new Date(event.competitions[0].date).toLocaleString()
                : 'Not Available';
              
              // Extracting the status info
              const period = event.status ? event.status.period : 'Not Available';
              const clock = event.status ? event.status.displayClock : 'Not Available';

              // Determine the higher score
              const homeScoreBold = homeScore > awayScore ? 'bold' : '';
              const awayScoreBold = awayScore > homeScore ? 'bold' : '';

              return (
                <div key={index} className="game">
                  <h3>{homeTeam.displayName} vs {awayTeam.displayName}</h3>
                  <p>Start Time: {startTime}</p>
                  <div className="scores">
                    <p>
                      <span className="team-name">{homeTeam.displayName}</span>
                      <span className={`score ${homeScoreBold}`}>{homeScore}</span>
                    </p>
                    <p>
                      <span className="team-name">{awayTeam.displayName}</span>
                      <span className={`score ${awayScoreBold}`}>{awayScore}</span>
                    </p>
                  </div>
                  <div className="status">
                    <p>Period: {period} | Time: {clock}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No scores available.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Scores;
