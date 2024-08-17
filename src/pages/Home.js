import React, { useState, useEffect } from 'react';
import './Home.css'; // Assuming you are using a separate CSS file for styling

const Home = () => {
  const [firstArticle, setFirstArticle] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('http://localhost:5000/news'); // Ensure your backend is running and returning data
        const data = await response.json();
        if (data.length > 0) {
          setFirstArticle(data[0]); // Select the first article to display
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="home-container">
      {firstArticle ? (
        <div className="highlighted-article">
          <h1>{firstArticle.title}</h1>
          <img src={firstArticle.imageUrl} alt={firstArticle.title} className="highlighted-image" />
          <p>
            <a href={firstArticle.link} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </p>
        </div>
      ) : (
        <p>No featured news available at the moment.</p>
      )}

      <div className="ticket-section">
        <h2>Buy Tickets for Upcoming Matches</h2>
        <a href="https://www.ticketmaster.gr/pae-aek-eisithria-agwnwn-2024-2025_sen_2006600.html" target="_blank" rel="noopener noreferrer" className="buy-tickets">
          Buy Tickets
        </a>
      </div>
    </div>
  );
};

export default Home;
