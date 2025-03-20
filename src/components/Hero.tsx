import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80")',
        }}
      >
        <span className="w-full h-full absolute opacity-50 bg-gradient-to-r from-blue-900 via-purple-900 to-rose-900"></span>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="pr-12">
              <h1 className="text-white font-semibold text-5xl">
                Your Health Is Our Priority
              </h1>
              <p className="mt-4 text-lg text-gray-200">
                Experience world-class healthcare services with our team of expert
                doctors and state-of-the-art facilities. We're here to take care
                of you and your loved ones.
              </p>
              <div className="flex justify-center gap-4 mt-8">
                <Link
                  to="/signup"
                  className="bg-rose-600 text-white active:bg-rose-700 font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 flex items-center hover:scale-105 transform"
                >
                  Sign Up
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button
                  className="bg-transparent border-2 border-white text-white font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 hover:bg-white/10 hover:scale-105 transform"
                >
                  About Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;