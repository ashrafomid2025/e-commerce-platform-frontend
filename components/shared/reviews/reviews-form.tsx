"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createReview } from "@/lib/actions/review.action";
import React, { useActionState } from "react";

function ReviewForm() {
  function func(prev: any, formData: any) {
    return { message: "", success: true };
  }

  const [state, action] = useActionState(createReview, {
    success: false,
    message: "",
  });
  return (
    <div>
      <h1 className="my-2 text-muted-foreground">Leave a comment</h1>
      <form action={action} className="w-full flex flex-col space-y-4">
        <Input name="rating" placeholder="Rating" className="w-full" />
        <Input name="product_id" placeholder="product_id" className="w-full" />
        <Input name="user_id" placeholder="user_id" className="w-full" />
        <Textarea name="comment" className="resize-none h-32" />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default ReviewForm;
