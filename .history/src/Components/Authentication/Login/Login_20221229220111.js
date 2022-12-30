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

                          {
                              isLoading? :
              }
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
