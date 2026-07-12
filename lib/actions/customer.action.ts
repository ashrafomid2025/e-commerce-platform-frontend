export async function getAllUsers(): Promise<any> {
  const data = await fetch("http://localhost:8000/api/dashboard/all-users");
  const response = await data.json();
  return response;
}

export async function deleteUser(prevstate: unknown, formData: FormData) {
  try {
    const data = await fetch(
      `http://localhost:8000/api/dashboard/delete-user/${formData.get("id")}`,
      {
        method: "DELETE",
      },
    );
    const response = await data.json();

    return {
      message: "user deleted successfully",
      state: true,
    };
  } catch (err) {
    return {
      message: "Could not delete the user",
      state: false,
    };
  }
}
