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
  const inputValues = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    phone_number: formData.get("phone_number"),
  };
  try {
    const data = await fetch("http://localhost:8000/api/signup", {
      method: "POST",
      body: JSON.stringify(inputValues),
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const response = await data.json();
    console.log(response);
    return {
      message: response,
      success: true,
    };
  } catch (err) {
    return {
      message: "Unable to sign up",
      success: false,
    };
  }
}
