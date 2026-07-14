export async function getAllUsers(url: string): Promise<any> {
  const data = await fetch(url);
  const response = await data.json();
  return response;
}

export async function deleteUser(prevstate: unknown, formData: FormData) {
  try {
    const data = await fetch(
      `http://localhost:8000/api/dashboard/all-users/${formData.get("id")}`,
      {
        method: "DELETE",
      },
    );

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

export async function Edit(id: number) {
  const response = await fetch(
    `http://localhost:8000/api/dashboard/edit-user/${id}`,
  );
  const data = await response.json();
  return data;
}
