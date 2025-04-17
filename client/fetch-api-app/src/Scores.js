import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Scores.css';
import NewsSidebar from './NewsSidebar';

function Scores() {
  const { sport, league } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
            <div className="scoreboard">
              {data.events.length > 0 ? (
                data.events.map((event, index) => {
                  const competition = event.competitions[0];

                  const homeCompetitor = competition.competitors.find(team => team.homeAway === 'home');
                  const awayCompetitor = competition.competitors.find(team => team.homeAway === 'away');

                  const homeTeam = homeCompetitor.team;
                  const awayTeam = awayCompetitor.team;

                  const homeScore = homeCompetitor.score;
                  const awayScore = awayCompetitor.score;

                  const homeScoreBold = homeScore > awayScore ? 'bold' : '';
                  const awayScoreBold = awayScore > homeScore ? 'bold' : '';

                  const statusDetail = event.status ? event.status.type.detail : 'No additional details available';

                  // Extract odds
                  const oddsData = competition.odds?.[0]; // Get first odds provider
                  const providerName = oddsData?.provider?.name || "";
                  const spreadDetails = oddsData?.details || "";
                  const overUnder = oddsData?.overUnder ? `O/U: ${oddsData.overUnder}` : "";

                  // Extract team records
                  const homeRecord = homeCompetitor.records?.find(record => record.name === "overall")?.summary || "N/A";
                  const awayRecord = awayCompetitor.records?.find(record => record.name === "overall")?.summary || "N/A";

                  return (
                    <div key={index} className="game">
                      <h3>
                        <div className="team">
                          <img src={homeTeam.logo} alt={homeTeam.displayName} width="35" />
                          <span>{homeTeam.displayName}</span> <p>( {homeRecord} )</p>
                        </div>
                        <span> vs </span>
                        <div className="team">
                          <img src={awayTeam.logo} alt={awayTeam.displayName} width="35" />
                          <span>{awayTeam.displayName}</span> <p>( {awayRecord} )</p>
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

                      <div className="odds">
                        <p>{providerName}</p>
                        <p>{spreadDetails}</p>
                        <p><strong>{overUnder}</strong></p>
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

      <NewsSidebar sport={sport} league={league} />
    </div>
  );
}

export default Scores;
