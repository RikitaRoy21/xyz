import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-100 via-purple-50 to-rose-100">
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-2xl rounded-2xl bg-white border-0 transition-transform hover:scale-105">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-2xl font-bold text-gray-800">
                    {isLogin ? "Welcome Back!" : "Join HealthCare+"}
                  </h6>
                </div>
              </div>
              <div className="flex-auto px-6 py-10 pt-0">
                <form>
                  {!isLogin && (
                    <div className="relative mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 rounded text-sm shadow w-full
                        bg-gray-50 placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all duration-150"
                        placeholder="John Doe"
                      />
                    </div>
                  )}
                  <div className="relative mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 rounded text-sm shadow w-full
                      bg-gray-50 placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>
                  <div className="relative mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 rounded text-sm shadow w-full
                      bg-gray-50 placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all duration-150"
                      placeholder="Password"
                    />
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-rose-600 text-white active:bg-rose-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full transition-all duration-150 hover:bg-rose-700"
                      type="button"
                    >
                      {isLogin ? "Sign In" : "Sign Up"}
                    </button>
                  </div>
                </form>
                <div className="text-center mt-4">
                  <button
                    className="text-gray-600 hover:text-rose-600 transition-colors duration-150"
                    onClick={() => setIsLogin(!isLogin)}
                  >
                    {isLogin ? "Need an account? Sign up" : "Already registered? Log in"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;