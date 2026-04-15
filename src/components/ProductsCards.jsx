import './ProductsCards.css';
import { useNavigate } from "react-router-dom"

function ProductsCards( {product} ) {
  const navigate = useNavigate()

  return (
    <div>
      <div 
      onClick={() => navigate(`/product-detail/${product.id}`)} 
      className="relative shadow-lg/10 w-[150px] h-[250px] mb-4 rounded-lg hover:text-blue-400 hover:scale-[110%] active:opacity-[50%] cursor-pointer ease-in-out duration-300 active:duration-300">

        <div className="absolute -ml-[5px] mt-2">
          {/* Rectangle Merah Tua (di bawah) */}
          <div className="absolute -mt-[14px] top-6 left-0 w-[6px] h-[18px] bg-red-700 rounded-bl-lg z-10"></div>

          {/* Rectangle Merah Muda (utama) */}
          <div className="relative bg-red-400 text-white text-[10px] font-bold px-2 py-1 rounded-r-xl rounded-tl-lg z-20">
            {product.discountPercentage}%
          </div>
        </div>
        
        {/* Image Product */}
        <div className="flex items-center bg-gray-200 h-[130px] rounded-t-lg">
          <img src={product.thumbnail} className="scale-[60%]"/>
        </div>

        <div className="p-2">
          {/* Title Peoduct */}
          <h1 className="truncate text-xs text-black">{product.title}</h1>

          {/* Price Products */}
          <div className="my-2">
            <div className="text-lg font-bold">${product.price}</div>
          </div>

          <div className="flex gap-2 mb-[5px] text-xs text-black">
            <p>&#11088; {product.rating}</p>
            {/* <p>|</p>
            <p>Stock: {product.stock}</p> */}
          </div>

          <p className="text-xs text-black">{product.brand}</p>
        </div>

        {/* <p>{product.description}</p> */}
      </div>
    </div>
  )
}

export default ProductsCards;