"use server";
export async function login(prevState: unknown, formData: FormData) {
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

export async function getUser(token: string) {
  const data = await fetch(`http://localhost:8000/api/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
      accept: "application/json",
    },
  });
  const response = await data.json();

  return response;
}

export async function signUp(prevState: unknown, formData: FormData) {
  try {
    const data = await fetch("https://localhost:8000/api/signup", {
      method: "POST",
      body: formData,
      headers: {
        accept: "application/json",
      },
    });
    const response = await data.json();
    return {
      message: response,
      status: true,
    };
  } catch (err) {
    return {
      message: "Unable to sign up",
      status: false,
    };
  }
}
