
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Scores.css';
import NewsSidebar from './NewsSidebar'; // Import NewsSidebar component

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
        if (!response.ok) throw new Error('Network response was not ok');
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
    <div className="Scores-container">
      <div className="Scores">
        <button onClick={() => navigate('/')} className="home-button">Go to Home</button>

        <h2>{league.toUpperCase()} Scoreboard</h2>
        
        {loading && <div className="loading">Loading...</div>}
        {error && <div className="error">Error: {error.message}</div>}

        {data && (
          <>
            {/* Scoreboard Section */}
            <div className="scoreboard">
              {data.events.length > 0 ? (
                data.events.map((event, index) => {
                  const homeTeam = event.competitions[0].competitors.find(team => team.homeAway === 'home').team;
                  const awayTeam = event.competitions[0].competitors.find(team => team.homeAway === 'away').team;

                  const homeScore = event.competitions[0].competitors.find(team => team.homeAway === 'home').score;
                  const awayScore = event.competitions[0].competitors.find(team => team.homeAway === 'away').score;
                    
                  const homeScoreBold = homeScore > awayScore ? 'bold' : '';
                  const awayScoreBold = awayScore > homeScore ? 'bold' : '';

                  const statusDetail = event.status ? event.status.type.detail : 'No additional details available';

                  return (
                    <div key={index} className="game">
                      <h3>
                        <div className="team">
                          <img src={homeTeam.logo} alt={homeTeam.displayName} width="30" />
                          <span>{homeTeam.displayName}</span>
                        </div>
                        <span> vs </span>
                        <div className="team">
                          <img src={awayTeam.logo} alt={awayTeam.displayName} width="30" />
                          <span>{awayTeam.displayName}</span>
                        </div>
                      </h3>
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
                        <p><strong>{statusDetail}</strong></p> 
                      </div>
                    </div>
                  );
                })
              ) : (
                <p>No scores available.</p>
              )}
            </div>
          </>
        )}
      </div>

      <NewsSidebar sport={sport} league={league} /> {/* Ensure this is used here */}
    </div>
  );
}

export default Scores;
