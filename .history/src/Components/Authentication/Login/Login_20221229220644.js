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
      <section class=" overflow-hidden">
        <div class="flex min- overflow-hidden flex justify-center mt-5">
          <div class="flex flex-col justify-center flex-1 px-4 py-12 overflow-hidden sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div class="w-full max-w-xl mx-auto lg:w-96">
              <div>
                <h2 class="mt-6 text-3xl font-extrabold text-neutral-600">
                  Sign in.
                </h2>
              </div>

              {isLoading ? (
                <button type="button" class="bg-indigo-500 ..." disabled>
                  <svg
                    class="animate-spin h-5 w-5 mr-3 ..."
                    viewBox="0 0 24 24"
                  ></svg>
                  Processing...
                </button>
              ) : (
                <div class="mt-8">
                  <div class="mt-6">
                    <form
                      action="#"
                      method="POST"
                      class="space-y-6"
                      onSubmit={handleSubmit}
                    >
                      <div>
                        <label
                          for="email"
                          class="block text-sm font-medium text-neutral-600"
                        >
                          {" "}
                          Email address{" "}
                        </label>
                        <div class="mt-1">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autocomplete="email"
                            required=""
                            onBlur={handleOnBlur}
                            placeholder="Your Email"
                            class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                          />
                        </div>
                      </div>

                      <div class="space-y-1">
                        <label
                          for="password"
                          class="block text-sm font-medium text-neutral-600"
                        >
                          {" "}
                          Password{" "}
                        </label>
                        <div class="mt-1">
                          <input
                            id="password"
                            name="password"
                            type="password"
                            autocomplete="current-password"
                            required=""
                            onBlur={handleOnBlur}
                            placeholder="Your Password"
                            class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                          />
                        </div>
                      </div>

                      <div class="flex items-center justify-between">
                        <div class="text-sm">
                          <a
                            href="#"
                            class="font-medium text-blue-600 hover:text-blue-500"
                          >
                            {" "}
                            Forgot your password?{" "}
                          </a>
                        </div>
                      </div>

                      <div>
                        <button
                          type="submit"
                          class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Sign in
                        </button>
                      </div>
                    </form>
                    <div class="relative my-4">
                      <div class="absolute inset-0 flex items-center">
                        <div class="w-full border-t border-gray-300"></div>
                      </div>
                      <div class="relative flex justify-center text-sm">
                        <span class="px-2 text-neutral-600 bg-white">
                          {" "}
                          Or continue with{" "}
                        </span>
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        class="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                      >
                        <div class="flex items-center justify-center">
                          <button
                            class="ml-4"
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
