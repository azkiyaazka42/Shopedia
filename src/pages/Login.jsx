import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setshowPassword] = useState(false);
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  const tooglePass = () => {
    return setshowPassword(!showPassword);
  };

  const handleSubmit = () => {
    const payload = {
      username: username,
      password: password,
    };

    axios
      .post("https://dummyjson.com/auth/login", payload)
      .then((res) => {
        setToken(res?.data?.accessToken);

        localStorage.setItem("access_token", res?.data?.accessToken);

        setTimeout(() => {
          navigate("/");
        }, 1020);
      })
      .catch((error) => {
        setError(error?.response?.data?.message);
      });
  };

  return (
    <div>
      <h1
        onClick={() => navigate("/")}
        className="py-8 text-center text-4xl font-bold text-green-600 cursor-pointer"
      >
        shopedia
      </h1>

      <div className="min-h-screen flex items-center justify-center">
        <div className="flex w-full max-w-7xl items-center justify-between gap-10">
          {/* left */}
          <div className="hidden md:flex justify-center items-center w-1/2 h-screen">
            <img className="" src="/images/auth.png" />
          </div>

          {/* right */}
          <div className="flex justify-center items-center w-full md:w-1/2">
            <div className="shadow-[0_0px_20px_rgba(0,0,0,0.1)] px-10 py-16 rounded-lg">
              <div className="grid gap-4">
                <h1 className="text-center text-2xl font-bold">Sign In</h1>

                {/* username */}
                <div className=" grid gap-[3px]">
                  <p className="font-bold">username</p>
                  <div className="flex gap-2 w-[350px] h-[40px] border border-gray-200 p-2 rounded-lg">
                    <svg
                      className="scale-75"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="rgb(170, 170, 170)"
                        d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"
                      />
                    </svg>
                    <p className="text-gray-400">|</p>
                    <input
                      type="text"
                      placeholder="Enter username"
                      onChange={(e) => setUsername(e.target.value)}
                      className="outline-none w-full"
                    />
                  </div>
                </div>

                {/* password */}
                <div className=" grid gap-[3px]">
                  <p className="font-bold">Password</p>
                  <div className="flex gap-2 w-[350px] h-[40px] border border-gray-200 p-2 rounded-lg">
                    <svg
                      className="scale-75"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path
                        fill="rgb(170, 170, 170)"
                        d="M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z"
                      />
                    </svg>
                    <p className="text-gray-400">|</p>
                    <input
                      type={showPassword ? "text" : "password"}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter Password"
                      className="outline-none w-full"
                    />

                    {password.length > 0 && (
                      <div onClick={tooglePass}>
                        {showPassword ? (
                          <svg
                            className="w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 640"
                          >
                            <path
                              fill="rgb(170, 170, 170)"
                              d="M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 640"
                          >
                            <path
                              fill="rgb(170, 170, 170)"
                              d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM204.5 138.7c23.5-16.8 52.4-26.7 83.5-26.7 79.5 0 144 64.5 144 144 0 31.1-9.9 59.9-26.7 83.5l-34.7-34.7c12.7-21.4 17-47.7 10.1-73.7-13.7-51.2-66.4-81.6-117.6-67.9-8.6 2.3-16.7 5.7-24 10l-34.7-34.7zM325.3 395.1c-11.9 3.2-24.4 4.9-37.3 4.9-79.5 0-144-64.5-144-144 0-12.9 1.7-25.4 4.9-37.3L69.4 139.2c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6l-64.2-64.2z"
                            />
                          </svg>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-right text-green-600 underline cursor-pointer hover:text-green-800 active:opacity-[50%] ease-in-out duration-300">
                  forgot Password?
                </p>

                <button
                  onClick={handleSubmit}
                  className="bg-green-600 py-2 px-4 rounded-lg text-white cursor-pointer hover:bg-green-700 active:opacity-[50%] ease-in-out duration-300"
                >
                  Sign In
                </button>

                <div className="flex gap-[3px]">
                  <p>Don't have account?</p>
                  <p
                    onClick={() => navigate("/register")}
                    className="text-gray-500 cursor-pointer hover:text-green-600 hover:underline active:opacity-[50%] ease-in-out duration-300"
                  >
                    Sign Up here
                  </p>
                </div>

                {token.length ? (
                  <p className="text-green-600 font-bold">Login success</p>
                ) : null}

                {error ? (
                  <p className="text-red-600 font-bold">{error}</p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
