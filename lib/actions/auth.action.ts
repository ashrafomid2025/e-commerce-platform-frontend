"use server";
export default async function login(prevState: unknown, formData: FormData) {
  const data = await fetch("http://localhost:8000/api/auth", {
    body: formData,
    headers: {
      accept: "application/json",
    },
    method: "POST",
  });
  const response = await data.json();
  return response;
}
