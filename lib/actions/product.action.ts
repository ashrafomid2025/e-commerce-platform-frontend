export async function getProducts() {
  const data = await fetch(`http://localhost:8000/api/products`);
  const response = await data.json();
  return response;
}

export async function getAllProducts(url: string) {
  const data = await fetch(url);
  const response = await data.json();
  return response;
}

export async function fetchAllProducts() {
  const data = await fetch("http://localhost:8000/api/dashboard/all-products");
  const response = await data.json();
  return response.products.data;
}

export async function storeProduct(prevState: unknown, formData: FormData) {
  try {
    const data = await fetch("http://localhost:8000/api/products", {
      method: "POST",
      headers: {
        accept: "application/json",
      },
      body: formData,
    });
    const response = await data.json();
    console.log(response);
    if (data.status === 200) {
      console.log("data inserted successfully");
      return {
        data: "data inserted successfully",
        status: true,
      };
    } else {
      return {
        data: "something went wrong",
        status: false,
      };
    }
  } catch (error) {
    console.log("Something went wrong");
    return {
      data: "something went wrong",
      status: false,
    };
  }
}
