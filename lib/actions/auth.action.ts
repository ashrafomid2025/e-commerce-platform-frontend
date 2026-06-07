"use server";
export default async function login(prevState: unknown, formData: FormData) {
  console.log(formData);
  const data = await fetch("http://localhost:8000/api/auth", {
    body: formData,
    headers: {
      accept: "application/json",
    },
    method: "POST",
  });
  const response = await data.json();
  // console.log(response);

  return response;
}
