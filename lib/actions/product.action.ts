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

export default async function storeProduct() {
  const data = await fetch(
    "http://localhost:8000/api/dashboard/store-product",
    {
      method: "POST",
      headers: {
        accept: "application/json",
        Authorization: `Bearer`,
      },
    },
  );
  if (data.status === 200) {
  }
}
