import React from 'react';
import NewsItem from './NewsItem';

const NewsList = ({ news }) => (
  <div>
    {news.map(article => (
      <NewsItem key={article.id} article={article} />
    ))}
  </div>
);

export default NewsList;
