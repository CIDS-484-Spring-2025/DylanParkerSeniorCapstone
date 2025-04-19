import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './TeamInfo.css'; 

const leagueEndpoints = {
  'NFL': 'football/nfl',
  'College Football': 'football/college-football',
  'NBA': 'basketball/nba',
  'Men\'s College Basketball': 'basketball/mens-college-basketball',
  'Women\'s College Basketball': 'basketball/womens-college-basketball',
  'MLB': 'baseball/mlb',
  'NHL': 'hockey/nhl',
};

function TeamInfo() {
  const [selectedLeague, setSelectedLeague] = useState('');
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  
  useEffect(() => {
    if (selectedLeague) {
      const fetchTeams = async () => {
        setLoading(true);
        setError(null);
        try {
          const endpoint = `http://site.api.espn.com/apis/site/v2/sports/${leagueEndpoints[selectedLeague]}/teams`;
          const response = await fetch(endpoint);
          if (!response.ok) {
            throw new Error('Failed to fetch teams');
          }
          const data = await response.json();
          setTeams(data.sports[0].leagues[0].teams);
          setSelectedTeam(null);
        } catch (err) {
          setError('Error fetching teams. Please try again later.');
        } finally {
          setLoading(false);
        }
      };
      fetchTeams();
    }
  }, [selectedLeague]);

  const handleTeamClick = (team) => {
    setSelectedTeam(team.team);
  };

  return (
    <div className="team-info">
      <button className="home-button" onClick={() => navigate('/')}>Go to Home</button>
      <h2>Team Information</h2>

      {/* League Dropdown */}
      <select onChange={(e) => setSelectedLeague(e.target.value)} value={selectedLeague}>
        <option value="">Select a League</option>
        {Object.keys(leagueEndpoints).map((league) => (
          <option key={league} value={league}>{league}</option>
        ))}
      </select>

      {/* Error Message */}
      {error && <div className="error-message">{error}</div>}

      {/* Loading Spinner */}
      {loading && <div className="loading-spinner">Loading...</div>}

      {/* Team List */}
      {teams.length > 0 && !loading && (
        <ul className="team-list">
          {teams.map((teamData) => (
            <li key={teamData.team.id} onClick={() => handleTeamClick(teamData)}>
              {teamData.team.displayName}
            </li>
          ))}
        </ul>
      )}

      {/* Selected Team Details */}
      {selectedTeam && (
        <div className="team-details">
          <h3>{selectedTeam.displayName}</h3>
          <img src={selectedTeam.logos?.[0]?.href} alt={selectedTeam.name} style={{ width: '100px' }} />

          {/* Additional Team Information (Schedule, Stats, etc.) */}
          <div className="team-links">
            {selectedTeam.links?.map((link, index) => (
              <div key={index}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.text}
                </a>
              </div>
            ))}
          </div>

          {/* Example for Stats and Schedule (if available) */}
          {selectedTeam.links?.some(link => link.rel.includes('stats')) && (
            <div className="team-stats">
              <a href={selectedTeam.links.find(link => link.rel.includes('stats'))?.href} target="_blank" rel="noopener noreferrer">
                View Statistics
              </a>
            </div>
          )}

          {selectedTeam.links?.some(link => link.rel.includes('schedule')) && (
            <div className="team-schedule">
              <a href={selectedTeam.links.find(link => link.rel.includes('schedule'))?.href} target="_blank" rel="noopener noreferrer">
                View Schedule
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default TeamInfo;
