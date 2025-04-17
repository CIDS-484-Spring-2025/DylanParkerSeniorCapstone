import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './NewsSidebar.css';

function NewsSidebar() {
  const { sport, league } = useParams();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const newsUrl = `https://site.api.espn.com/apis/site/v2/sports/${sport}/${league}/news`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(newsUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setNews(data.articles || []);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [newsUrl]);

  return (
    
    <div className="news-sidebar">
      <h3>Latest {league ? league.toUpperCase() : 'Sports'} News</h3>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">Error: {error.message}</p>}
      <ul>
        {news.slice(0, 5).map((article, index) => (
          <li key={index} className="news-item">
            <a href={article.links.web.href} target="_blank" rel="noopener noreferrer">
              <span className="headline">{article.headline}</span>
              <span className="read-more">Read More →</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsSidebar;
