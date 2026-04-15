import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Detail from "../components/Detail";
import Reviews from "../components/Reviews";
import Order from "../components/Order";

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const productHandle = () => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    productHandle();
  }, [id]);

  if (loading) return;
  <div>
    <Header />
    <p className="flex justify-center p-8">Loading...</p>
  </div>;
  if (!product) return;
  <div>
    <Header />
    <p className="flex justify-center p-8">Product not found</p>
  </div>;

  return (
    <div className="relative">
      <div className="fixed z-10 w-full">
        <Header />
      </div>

      <div className="grid grid-cols-[1fr_320px] gap-10 py-[80px] px-[100px]">
        <div>
          {/* detail */}
          <div>
            <Detail product={product} />
            <hr className="mt-4 text-gray-200 font-light" />
          </div>

          {/* reviews */}
          <div className="mb-[100px]">
            <Reviews product={product} />
          </div>
        </div>

        <div className="sticky top-[120px] h-fit">
          <div className="fixed p-4 mt-[50px] w-[250px] h-auto border border-gray-300 rounded-lg">
            <Order product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
