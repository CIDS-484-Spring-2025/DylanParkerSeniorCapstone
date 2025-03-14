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
      <h3>Latest {league.toUpperCase()} News</h3>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      <ul>
        {news.slice(0, 5).map((article, index) => (
          <li key={index}>
            <a href={article.links.web.href} target="_blank" rel="noopener noreferrer">
              {article.headline}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsSidebar;
