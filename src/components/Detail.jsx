function Detail({ product }) {
  const finalPrice =
    product &&
    (
      product.price -
      (product.price * product.discountPercentage) / 100
    ).toFixed(2);

  const statusIcon = () => {
    if (product.availabilityStatus == "In Stock") {
      return (
        <svg
          className="w-[20px] -mt-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="rgb(27, 193, 49)"
            d="M224 0l0 64c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-64 32 0c35.3 0 64 28.7 64 64l0 128c0 5.5-.7 10.9-2 16l-252 0c-1.3-5.1-2-10.5-2-16l0-128c0-35.3 28.7-64 64-64l32 0zm96 512c-11.2 0-21.8-2.9-31-8 9.5-16.5 15-35.6 15-56l0-128c0-20.4-5.5-39.5-15-56 9.2-5.1 19.7-8 31-8l32 0 0 64c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-64 32 0c35.3 0 64 28.7 64 64l0 128c0 35.3-28.7 64-64 64l-128 0zM0 320c0-35.3 28.7-64 64-64l32 0 0 64c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-64 32 0c35.3 0 64 28.7 64 64l0 128c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 320z"
          />
        </svg>
      );
    }
    if (product.availabilityStatus == "Low Stock") {
      return (
        <svg
          className="w-[20px] -mt-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="rgb(214, 35, 35)"
            d="M224 0l0 64c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-64 32 0c35.3 0 64 28.7 64 64l0 128c0 5.5-.7 10.9-2 16l-252 0c-1.3-5.1-2-10.5-2-16l0-128c0-35.3 28.7-64 64-64l32 0zm96 512c-11.2 0-21.8-2.9-31-8 9.5-16.5 15-35.6 15-56l0-128c0-20.4-5.5-39.5-15-56 9.2-5.1 19.7-8 31-8l32 0 0 64c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-64 32 0c35.3 0 64 28.7 64 64l0 128c0 35.3-28.7 64-64 64l-128 0zM0 320c0-35.3 28.7-64 64-64l32 0 0 64c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-64 32 0c35.3 0 64 28.7 64 64l0 128c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 320z"
          />
        </svg>
      );
    }
  };

  return (
    <div>
      <div className="flex gap-10">
        {/* LEFT */}
        <div className="w-[250px]">
          <div className="sticky top-[125px]">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full object-contain bg-gray-200 rounded-lg"
            />
          </div>
        </div>

        <div className="flex-1 gap-8 mt-[50px]">
          <div className="grid gap-4">
            {/* Title dan rating */}
            <div>
              <h1 className="text-xl font-bold">{product.title}</h1>

              <div className="flex gap-2 mb-4">
                <h1>&#11088; {product.rating}</h1>
                <p className="text-gray-500">|</p>
                <p className="text-gray-500">
                  {product.reviews.length} reviews
                </p>
              </div>
            </div>

            {/* Price */}
            <div className="mb-4">
              <p className="text-4xl font-bold mb-2">${finalPrice}</p>

              <div className="flex items-center gap-[5px]">
                <div className="bg-red-200 text-red-500 text-[10px] font-bold px-[5px] py-[3px] rounded-lg">
                  {product.discountPercentage}%
                </div>
                <p className="text-gray-500 line-through text-sm">
                  ${product.price}
                </p>
              </div>
            </div>

            {/* Status available */}
            <div className="flex gap-2">
              <p className="font-bold">Status: </p>
              {statusIcon()}
              <p>{product.availabilityStatus}</p>
            </div>

            {/* product details */}
            <div>
              <hr className="text-gray-200 font-light" />
              <div className="content-center w-[150px] h-[50px] border-b-2 border-green-600 text-center text-green-600 font-bold">
                product details
              </div>
              <hr className="text-gray-200 font-light" />
            </div>
            <div className="text-sm">
              <div>
                <div className="flex gap-[5px]">
                  <p className="text-gray-500">Depth: </p>
                  <p>{product.dimensions.depth}</p>
                </div>

                <div className="flex gap-[5px]">
                  <p className="text-gray-500">Height: </p>
                  <p>{product.dimensions.height}</p>
                </div>

                <div className="flex gap-[5px]">
                  <p className="text-gray-500">Width: </p>
                  <p>{product.dimensions.width}</p>
                </div>

                <div className="flex gap-[5px]">
                  <p className="text-gray-500">Weight: </p>
                  <p>{product.weight} g</p>
                </div>

                <div className="flex gap-[5px]">
                  <p className="text-gray-500">Min. Order Quantity: </p>
                  {product.minimumOrderQuantity}
                </div>

                <div className="flex gap-[5px] mb-4">
                  <p className="text-gray-500">Category: </p>
                  <p className="text-green-600 cursor-pointer">
                    {product.category}
                  </p>
                </div>
              </div>

              <p>{product.description}</p>
            </div>

            <hr className="text-gray-200 font-light" />

            {/* Shpis */}
            <div className="flex gap-2">
              <svg
                className="w-[20px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  fill="rgb(27, 193, 49)"
                  d="M64 96c0-35.3 28.7-64 64-64l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L621.3 192c12 12 18.7 28.3 18.7 45.3L640 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-3.3 0c-35.3 0-64-28.7-64-64l0-48-40 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 240c-13.3 0-24-10.7-24-24s10.7-24 24-24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 144c-13.3 0-24-10.7-24-24S10.7 96 24 96l40 0zM576 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM256 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                />
              </svg>
              <p>{product.shippingInformation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
