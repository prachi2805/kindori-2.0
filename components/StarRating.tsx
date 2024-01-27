import React from "react";

interface StarRatingProps {
  rating: number;
}
const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <span className="star-rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className={`star ${index < rating ? "filled" : "empty"}`}
        >
          &#9733;
        </span>
      ))}

      <style jsx>{`
        .star-rating {
          display: flex;
        }

        .star {
          font-size: 24px;
          color: #ccc;
          margin-right: 4px;
        }

        .star.filled {
          color: #ffc107; /* Color for filled stars */
        }

        .star.empty {
          color: #e0e0e0; /* Color for empty stars */
        }
      `}</style>
    </span>
  );
};

export default StarRating;
