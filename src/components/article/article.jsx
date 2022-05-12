import React from 'react';
import './article.css';

const article = ({ img, author, title, children }) => {
  return (
    <div className="easybank__article">
      <figure>
        <img src={img} alt={`featured img ${title}`} />
      </figure>
      <div className="easybank__article-content">
        <span>{author}</span>
        <h4>{title}</h4>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default article;
