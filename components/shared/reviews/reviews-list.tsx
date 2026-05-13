import React from "react";
import ReviewCard from "./reviewCard";

function ReviewList({ reviews }: { reviews: any }) {
  return (
    <div className="w-full flex flex-col space-y-3">
      {reviews.map((review: any, index: number) => (
        <ReviewCard key={index} review={review} />
      ))}
    </div>
  );
}

export default ReviewList;
