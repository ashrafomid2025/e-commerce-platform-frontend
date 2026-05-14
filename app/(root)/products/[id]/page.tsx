import ProductImages from "@/components/shared/products/product-images";
import ProductPrice from "@/components/shared/products/product-price";
import ReviewList from "@/components/shared/reviews/reviews-list";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/lib/actions/product.action";
import { getReviews } from "@/lib/actions/review.action";

async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const products = await getProducts();
  const reviews = await getReviews();
  const product = products.data.find((x: any) => x.id == id);
  const foundReviews = reviews.data.filter(
    (r: any) => r.product_id == product.id,
  );
  console.log(foundReviews);

  return (
    <div className="w-full">
      <div className="w-full grid p-4 grid-cols-1 md:grid-cols-5 gap-4">
        <div className="col-span-2">
          <ProductImages images={product.images} />
        </div>
        <div className="col-span-2 space-y-4 ">
          <p>{product.description}</p>
          <div>
            <div className="px-4 py-1.5  bg-green-300 rounded-full w-fit">
              <ProductPrice price={product.price.toString()} />
            </div>
          </div>
        </div>
        <div className="p-4 space-y-2 border rounded-md h-fit">
          <div className="flex-between">
            <span>Price</span>
            <span>
              <ProductPrice price={product.price.toString()} />
            </span>
          </div>

          {product.stock > 0 && (
            <div className="flex-between">
              <span>Status</span>
              <Badge variant="outline">Available</Badge>
            </div>
          )}
          {product.stock <= 0 && (
            <div className="flex-between">
              <span>Status</span>
              <Badge variant="destructive">Unavaiable</Badge>
            </div>
          )}
          {product.stock > 0 && (
            <div className="flex-center">
              <Button>Add to Cart</Button>
            </div>
          )}
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2">
        <ReviewList reviews={foundReviews} />
        <div></div>
      </div>
    </div>
  );
}

export default page;
