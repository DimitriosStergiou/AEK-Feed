import React, { useState, useEffect } from 'react';
import './News.css'; // Assuming you have this CSS file for styling

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('http://localhost:5000/news');
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-container">
      {articles.length > 0 ? (
        <>
          <div className="news-row">
            {articles.slice(0, 3).map((article, index) => (
              <div key={index} className="news-item">
                <h3>{article.title}</h3>
                <img src={article.imageUrl} alt={article.title} className="news-image" />
                <p><a href={article.link} target="_blank" rel="noopener noreferrer">Read more</a></p>
              </div>
            ))}
          </div>
          <div className="news-row">
            {articles.slice(3, 6).map((article, index) => (
              <div key={index} className="news-item">
                <h3>{article.title}</h3>
                <img src={article.imageUrl} alt={article.title} className="news-image" />
                <p><a href={article.link} target="_blank" rel="noopener noreferrer">Read more</a></p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>No news available at the moment.</p>
      )}
    </div>
  );
};

export default News;






