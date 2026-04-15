import { useState } from "react";

function Order({ product }) {
  const [qty, setQty] = useState(1);

  const handlePlus = () => {
    if (qty < product.stock) {
      setQty(qty + 1);
    }
  };

  const handleMinus = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const finalPrice =
    product &&
    (
      product.price -
      (product.price * product.discountPercentage) / 100
    ).toFixed(2);

  const subtotal = (finalPrice * qty).toFixed(2);

  const minusIcon = () => {
    return qty > 1 ? "rgb(27, 193, 49)" : "rgb(186, 186, 186)";
  };

  return (
    <div className="grid gap-4">
      <p className="font-bold">Set amounts and notes</p>

      <div className="w-[60px]">
        <div className="">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full object-contain bg-gray-200 rounded-lg"
          />
        </div>
      </div>

      <hr className="text-gray-300 font-light" />

      <div className="flex gap-2 items-center">
        <div className="flex gap-[20px] p-[4px] items-center border-[1px] border-gray-400 rounded-lg">
          <div
            onClick={handleMinus}
            className="hover:bg-gray-200 p-[3px] hover:rounded-[3px]"
          >
            <svg
              className="w-[18px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path
                fill={minusIcon()}
                d="M96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320z"
              />
            </svg>
          </div>

          <p>{qty}</p>

          <div
            onClick={handlePlus}
            className="hover:bg-gray-200 p-[3px] hover:rounded-[3px]"
          >
            <svg
              className="w-[18px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path
                fill="rgb(27, 193, 49)"
                d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"
              />
            </svg>
          </div>
        </div>

        <div className="flex gap-[3px]">
          <p>Stock:</p>
          <p className="font-bold">{product.stock}</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-gray-500">Subtotal</p>
        <p className="font-bold text-2xl">${subtotal}</p>
      </div>

      <div className="flex justify-between gap-2 font-bold">
        <button className="bg-white w-full px-4 rounded-lg border-2 border-green-600 text-green-600 cursor-pointer hover:border-green-700 hover:text-green-700 hover:bg-gray-200 active:opacity-[50%] ease-in-out duration-300">
          Buy
        </button>
        <button className="bg-green-600 w-full py-2 px-4 rounded-lg text-white cursor-pointer hover:bg-green-700 active:opacity-[50%] ease-in-out duration-300">
          + Cart
        </button>
      </div>
    </div>
  );
}

export default Order;
