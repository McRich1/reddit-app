
import React from 'react';
import { ArrowBigUp, ArrowBigDown, MessageSquare } from 'lucide-react';
import './RedditCard.css';

const RedditCard = ({ 
  votes = "0", 
  title = "No Title", 
  image, 
  author = "unknown", 
  timePosted = "just now", 
  comments = "0" 
}) => {
  return (
    <div className="reddit-card">
      <div className="reddit-card-sidebar">
        <button className="vote-btn upvote" aria-label="upvote">
           <ArrowBigUp size={24} />
        </button>
        <span className="vote-count">{votes}</span>
        <button className="vote-btn downvote" aria-label="downvote">
          <ArrowBigDown size={24} />
        </button>
      </div>
      
      <div className="reddit-card-content">
        <div className="reddit-card-header">
           <h2 className="reddit-card-title">{title}</h2>
        </div>
        
        {image && (
          <div className="reddit-card-image-container">
            <img src={image} alt={title} className="reddit-card-image" />
          </div>
        )}
        
        <div className="reddit-card-footer">
          <span className="posted-by">Posted by <span className="author-name">{author}</span></span>
          <span className="time-posted">{timePosted}</span>
          <div className="comments-container">
            <MessageSquare size={16} className="comment-icon"/>
            <span className="comment-count">{comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedditCard;
