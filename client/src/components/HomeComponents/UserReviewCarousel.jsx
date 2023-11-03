import React from "react";
import "../../styles/UserReviewCarousel.css"; // Your CSS file

const StarRating = ({ rating }) => {
  const getStarColor = (starIndex) => {
    if (rating >= starIndex) {
      return "orange"; // Change to the desired color for filled stars
    } else {
      return "grey"; // Change to the desired color for empty stars
    }
  };

  return (
    <div className="rating-container">
      {[1, 2, 3, 4, 5].map((star) => (
        <label
          key={star}
          style={{ fontSize: "30px", color: getStarColor(star) }}
        >
          ★
        
        </label>
      ))}
    </div>
  );
};

const UserReview = ({ review }) => {
  return (
    <div className="user-review">
      <StarRating rating={review.rating} />
      <h3>{review.name}</h3>
      <p>{review.reviewText}</p>
    </div>
  );
};

const UserReviewCarousel = ({ reviews }) => {
  return (
    <div className="user-review-carousel">
      {reviews.map((review, index) => (
        <UserReview key={index} review={review} />
      ))}
    </div>
  );
};

export default UserReviewCarousel;
