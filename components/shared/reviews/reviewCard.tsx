import React from "react";
import { formatDistanceToNow } from "date-fns";
import { Star } from "lucide-react";
function ReviewCard({ review }: { review: any }) {
  const commentDate = new Date(review.created_at);
  console.log(commentDate);
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
          {/* 7 */}
          {Array.from({ length: 5 }, (_, index) => {
            let fill =
              Math.max(
                Math.min((Number(review.rating) - index * 2) / 2, 1),
                0,
              ) * 100;

            console.log(fill);
            return (
              <div key={index} className="relative ">
                <span className="w-6 h-6">
                  <Star className="text-yellow-500" />
                </span>
                <span
                  className="w-6 h-6 absolute top-0 left-0 overflow-hidden"
                  style={{ width: `${fill}%` }}
                >
                  <Star className="text-yellow-500 fill-yellow-500" />
                </span>
              </div>
            );
          })}
        </h1>
        <span className="mt-auto text-xs text-muted-foreground">
          {formatDistanceToNow(commentDate, { addSuffix: true })}
        </span>
      </div>
    </div>
  );
}

export default ReviewCard;
