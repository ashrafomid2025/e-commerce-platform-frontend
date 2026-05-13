import React from "react";

function ReviewCard({ review }: { review: any }) {
  return (
    <div className="flex w-full flex-col p-4 border rounded-md">
      <div className="flex flex-col space-y-2 text-sm">
        <span>
          {" "}
          <span className="p-2  px-3 leading-0 bg-gray-300 text-white rounded-full">
            {review.user_name.slice(0, 1).toUpperCase()}
          </span>{" "}
          {review.user_name}
        </span>
        <span className="text-xs text-muted-foreground">
          {review.user_email}
        </span>
      </div>
      <p className="my-2 text-base">{review.comment}</p>
    </div>
  );
}

export default ReviewCard;
