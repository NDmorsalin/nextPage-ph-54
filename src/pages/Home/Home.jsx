import React from "react";
import Lottie from "lottie-react";
import readingBoy from "../../assets/reading-boy.json";
import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Home = () => {
  return (
    <div className="flex items-center gap-8">
      <div className="flex-1 space-y-4">
        <div className="rounded-full py-1 px-2 bg-orange-400 text-gray-700 uppercase inline-block text-xs font-semibold">
          on sale!
        </div>
        <h1 className="text-gray-800 font-bold text-4xl">
          A reader lives a thousand lives{" "}
          <span className="text-blue-500">before he dies</span>
        </h1>
        <p className="text-xl">
          Books are a uniquely portable magic. Books serve to show a man that
          those original thoughts of his aren’t very new after all. The man who
          does not read good books is no better than the man who can’t.
        </p>
        <div className="flex items-center ">
            <NavLink to='books' className='font-bold capitalize  flex items-center gap-4 rounded-lg bg-blue-500 hover:to-blue-600 transition duration-300 py-4 px-6 text-white'> view store <ShoppingCartIcon className="w-6 h-6 "/> </NavLink>

            <NavLink to='about' className='hover:text-blue-600 transition duration-300 py-2 px-3'> Learn More </NavLink>
        </div>
      </div>
      <div className="flex-1">
        <Lottie animationData={readingBoy} loop={true} />
      </div>
    </div>
  );
};

export default Home;
