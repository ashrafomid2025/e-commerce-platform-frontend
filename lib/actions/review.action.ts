"use server";

import { revalidatePath } from "next/cache";

export async function getReviews() {
  const data = await fetch("http://localhost:8000/api/reviews");
  const response = await data.json();
  return response;
}

export async function createReview(prevState: any, formData: FormData) {
  try {
    const data = await fetch("http://localhost:8000/api/reviews", {
      body: formData,
      headers: {
        accept: "application/json",
      },
      method: "POST",
    });
    revalidatePath(`/products/${formData.get("product_id")}`);
    return {
      success: true,
      message: "Added successfully",
    };
  } catch (error: any) {
    return {
      success: false,
      message: "Something went Wrong",
    };
  }
}
