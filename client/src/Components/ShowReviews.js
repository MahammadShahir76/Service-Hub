import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ShowReviews.css'; // Importing the CSS file

function ShowReviews() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    getReview();
  }, []);

  const getReview = async () => {
    let result = await fetch('http://localhost:5000/overview');
    result = await result.json();
    setResult(result);
  };

  return (
    <div className="show-reviews-container2">
      <h1 className="header2">Service Providers Overview</h1>
      <div className="reviews-grid2">
        {result.length > 0 ? (
          result.map((items, index) => (
            <div key={index} className="review-card2">
              <h3 className="review-title2">Name: {items.Fullname}</h3>
              <p><strong>Service Category:</strong> {items.ServiceCategory}</p>
              <p><strong>Review 1:</strong> {items.review1}</p>
              <p><strong>Review 2:</strong> {items.review2}</p>
              <p><strong>Review 3:</strong> {items.review3}</p>
              <p className="description2"><strong>Description:</strong> {items.description}</p>
            </div>
          ))
        ) : (
          <h2 className="no-reviews2">No Reviews Found</h2>
        )}
      </div>
      <Link to="/" className="back-button2">Back to Home</Link>
    </div>
  );
}

export default ShowReviews;
