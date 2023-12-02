import { ProductType } from "@/types/ProductType";

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}


export default async function Home() {
  //https://fakestoreapi.com/products

  const products = await getProducts();
  console.log(products);
  return (
    <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          prod 1
        </div>
        {products.map((product: ProductType) =>
          <div key={product.id}>
            {product.title}
          </div>
        )}
      </div>
    </div>
  )
}
