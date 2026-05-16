import React from "react";
import { formatDistanceToNow } from "date-fns";
import { Star } from "lucide-react";
function ReviewCard({ review }: { review: any }) {
  const commentDate = new Date(review.created_at);

  return (
    <div className="flex w-full justify-between p-4 border rounded-md">
      <div className="flex-1">
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
        <p className="my-2 px-2 border-l text-base">{review.comment}</p>
      </div>
      {/* [,,,,] */}
      <div className="flex flex-col items-end space-y-1.5">
        <h1 className="flex-start">
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index}>
              <Star className="text-yellow-300" />
            </span>
          ))}
        </h1>
        <span className="mt-auto text-xs text-muted-foreground">
          {formatDistanceToNow(commentDate, { addSuffix: true })}
        </span>
      </div>
    </div>
  );
}

export default ReviewCard;
