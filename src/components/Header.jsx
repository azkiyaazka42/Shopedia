import { useNavigate } from "react-router-dom";

function Header({ search, setSearch, token }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center py-4 px-10 bg-gray-100 text-sm">
      <h1
        onClick={() => navigate("/")}
        className="text-2xl font-bold text-green-600 cursor-pointer"
      >
        shopedia
      </h1>

      {/* SEARCH */}
      <div className="flex gap-2 item-center w-1/2 border border-green-600 rounded-lg p-2">
        <img
          className="w-[20px] h-[20px] opacity-[75%]"
          src="/images/search.png"
        />
        <input
          onClick={() => navigate("/")}
          type="text"
          placeholder="Search product..."
          className="outline-none w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex justify-between items-center gap-4 xl:gap-10">
        <img
          className="p-[7px] w-[33px] h-[33px] rounded-lg cursor-pointer hover:bg-gray-200 active:opacity-[50%] ease-in-out duration-300"
          src="/images/shopping-cart.png"
        />
        <p>|</p>

        <svg
          onClick={() => navigate("/profile")}
          className="w-[40px] cursor-pointer hover:opacity-[75%] active:opacity-[50%]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
        >
          <path
            className="w-[20px] -mt-2"
            fill="rgb(27, 193, 49)"
            d="M463 448.2C440.9 409.8 399.4 384 352 384L288 384C240.6 384 199.1 409.8 177 448.2C212.2 487.4 263.2 512 320 512C376.8 512 427.8 487.3 463 448.2zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM320 336C359.8 336 392 303.8 392 264C392 224.2 359.8 192 320 192C280.2 192 248 224.2 248 264C248 303.8 280.2 336 320 336z"
          />
        </svg>

        {!token && (
          <div className="flex gap-2 font-bold">
            <button
              onClick={() => navigate("/login")}
              className="bg-white py-2 px-4 rounded-lg border-2 border-green-600 text-green-600 cursor-pointer hover:border-green-700 hover:text-green-700 hover:bg-gray-200 active:opacity-[50%] ease-in-out duration-300"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate("/register")}
              className="bg-green-600 py-2 px-4 rounded-lg text-white cursor-pointer hover:bg-green-700 active:opacity-[50%] ease-in-out duration-300"
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
