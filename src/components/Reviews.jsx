function Reviews({ product }) {
  const ratingCounts = {
    5: product.reviews.filter((r) => Math.round(r.rating) === 5).length,
    4: product.reviews.filter((r) => Math.round(r.rating) === 4).length,
    3: product.reviews.filter((r) => Math.round(r.rating) === 3).length,
    2: product.reviews.filter((r) => Math.round(r.rating) === 2).length,
    1: product.reviews.filter((r) => Math.round(r.rating) === 1).length,
  };

  const percent = (count) =>
    product.reviews.length === 0 ? 0 : (count / product.reviews.length) * 100;

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i}>{i < Math.round(rating) ? "★" : ""}</span>
    ));
  };

  return (
    <div>
      <p className="font-bold text-xl mt-4">Reviews</p>

      <div className="flex gap-16 mt-4 justify-between items-center border-[1px] border-gray-200 p-8 rounded-lg">
        <div>
          <div className="flex items-end gap-2 mb-4">
            <div className="font-bold text-3xl">&#11088; {product.rating}</div>
            <p className="text-gray-500">/ 5.00</p>
          </div>

          <div>
            <p className="text-">
              {Math.round((ratingCounts[5] / product.reviews.length) * 100) ||
                0}
              % buyers are satisfied
            </p>

            <div>
              <p className="text-gray-500">
                {product.reviews.length} rating &bull; {product.reviews.length}{" "}
                reviews
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-2 flex-3">
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center gap-[3px] text-sm">
              <span className="text-yellow-500 text-xs">&#11088;</span>
              <span className="w-3 text-gray-500">{star}</span>

              <div className="flex-1 bg-gray-200 w-[100px] h-2 rounded">
                <div
                  className="bg-green-500 h-2 rounded"
                  style={{ width: `${percent(ratingCounts[star])}%` }}
                />
              </div>

              <span className="text-gray-500 text-sm">
                ({ratingCounts[star]})
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}

      <div className="mt-8">
        {product.reviews.map((review, index) => (
          <div key={index}>
            <div className="text-yellow-400 text-lg -mb-4 mt-4">
              {renderStars(review.rating)}
            </div>

            <div className="flex gap-2 items-center">
              <svg
                className="h-[35px] mt-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
              >
                <path
                  fill="rgb(93, 93, 93)"
                  d="M463 448.2C440.9 409.8 399.4 384 352 384L288 384C240.6 384 199.1 409.8 177 448.2C212.2 487.4 263.2 512 320 512C376.8 512 427.8 487.3 463 448.2zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM320 336C359.8 336 392 303.8 392 264C392 224.2 359.8 192 320 192C280.2 192 248 224.2 248 264C248 303.8 280.2 336 320 336z"
                />
              </svg>
              <p className="font-bold text-xl mt-4">{review.reviewerName}</p>
            </div>

            <p className="text-gray-500 text-sm">{review.date}</p>
            <p className="my-4">{review.comment}</p>
            <hr className="text-gray-200 font-light" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
