import { useEffect, useState } from "react";
import axios from "axios";
import ProductsCards from "../components/ProductsCards";
import Header from "../components/Header";

function Homepage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("access_token");

  const productsHandle = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res?.data?.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
        setLoading(false);
      });
  };

  useEffect(() => {
    productsHandle();
  }, []);

  console.log(products);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading) return <p className="flex justify-center p-8">Loading...</p>;

  return (
    <div className="relative">
      <div className="fixed z-30 w-full">
        <Header search={search} setSearch={setSearch} token={token} />
      </div>

      <div className="z-0 flex flex-wrap justify-center gap-4 py-[100px] px-[30px] lg:px-[120px]">
        {products.length > 0 &&
          filteredProducts.map((product) => (
            <ProductsCards key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default Homepage;
