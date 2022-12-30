import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import useAuth from "../../Authentication/hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { googleSignIn, loginUser, isLoading, error, user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
    loginUser(
      loginData?.email.toLowerCase(),
      loginData?.password,
      location,
      navigate
    );
    console.log(loginData);
  };

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...loginData };
    newInfo[field] = value;
    setLoginData(newInfo);
  };

  return (
    <div>
      <section className=" overflow-hidden">
        <div className="flex min- overflow-hidden flex justify-center mt-5">
          <div className="flex flex-col justify-center flex-1 px-4 py-12 overflow-hidden sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="w-full max-w-xl mx-auto lg:w-96">
              <div>
                <h2 className="mt-6 text-3xl font-extrabold text-neutral-600">
                  Sign in.
                </h2>
              </div>

              {isLoading ? (
                <button type="button" className="bg-indigo-500 ..." disabled>
                  <svg
                    className="animate-spin h-5 w-5 mr-3 ..."
                    viewBox="0 0 24 24"
                  ></svg>
                  Processing...
                </button>
              ) : (
                <div className="mt-8">
                  <div className="mt-6">
                    <form
                      action="#"
                      method="POST"
                      className="space-y-6"
                      onSubmit={handleSubmit}
                    >
                      <div>
                        <label
                          for="email"
                          className="block text-sm font-medium text-neutral-600"
                        >
                          {" "}
                          Email address{" "}
                        </label>
                        <div className="mt-1">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autocomplete="email"
                            required=""
                            onBlur={handleOnBlur}
                            placeholder="Your Email"
                            className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label
                          for="password"
                          className="block text-sm font-medium text-neutral-600"
                        >
                          {" "}
                          Password{" "}
                        </label>
                        <div className="mt-1">
                          <input
                            id="password"
                            name="password"
                            type="password"
                            autocomplete="current-password"
                            required=""
                            onBlur={handleOnBlur}
                            placeholder="Your Password"
                            className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <a
                            href="#"
                            className="font-medium text-blue-600 hover:text-blue-500"
                          >
                            {" "}
                            Forgot your password?{" "}
                          </a>
                        </div>
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Sign in
                        </button>
                      </div>
                    </form>
                    <div className="relative my-4">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 text-neutral-600 bg-white">
                          {" "}
                          Or continue with{" "}
                        </span>
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                      >
                        <div className="flex items-center justify-center">
                          <button
                            className="ml-4"
                            onClick={() => googleSignIn(location, navigate)}
                          >
                            {" "}
                            Log in with Google
                          </button>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {/* {user?.email && (
                <Alert variant="success">Successfully logged in!</Alert>
              )}

              {error && <Alert variant="danger">{error}</Alert>} */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
