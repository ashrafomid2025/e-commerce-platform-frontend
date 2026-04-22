type image = {
  id: number;
  imageable_type: string;
  imageable_id: number;
  image_url: string;
};

type productDetails = {
  id: number;
  description: string;
  category: string;
  brand: string;
  product_id: number;
};

type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
};

type ProductInfo = image & Product & productDetails;
