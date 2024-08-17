import React from 'react';

const NewsItem = ({ article }) => (
  <div>
    <h2>{article.title}</h2>
    <p>{article.summary}</p>
    <img src={article.imageUrl} alt={article.title} />
    <p>{article.publishedAt}</p>
  </div>
);

export default NewsItem;
