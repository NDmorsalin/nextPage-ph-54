import React, { useState } from "react";
import Loading from "../../components/Loading/Loading";
import { NavLink, useLoaderData, useNavigation } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Book = () => {
  const book = useLoaderData();
  const [fold, setFold] = useState(true);

  //   console.log(book);
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
  return (
    <div className="border border-blue-600 rounded-xl p-8 flex gap-4">
      <div className="flex-1 h-full">
        <img
          src={book.image}
          alt="book cover"
          className="object-cover w-full  lg:h-full"
        />
      </div>
      <div className="flex-1 h-full space-y-6">
        <div className="rounded-full py-1 px-2 bg-orange-400 text-gray-700 uppercase inline-block text-xs font-semibold">
          BRAND NEW
        </div>
        <h2 className="text-5xl font-bold ">{book.title}</h2>
        <div className="">
          <p className="">Author: {book.authors}</p>
          <p className="">Publisher : {book.publisher}</p>
          <p className="">Year: {book.year}</p>
          <p className="">Rating: {book.rating}</p>
        </div>
        <p className="">
          {fold ? book.desc.slice(0, 100) : book.desc}{" "}
          <span className="text-blue-600" onClick={() => setFold(!fold)}>
            {fold ? "...Read More" : "...Read Less"}
          </span>
        </p>
        <div className="flex items-center ">
          <NavLink
            to="/books"
            className="font-bold capitalize  flex items-center gap-4 rounded-lg bg-blue-500 hover:to-blue-600 transition duration-300 py-4 px-6 text-white"
          >
            view store <ShoppingCartIcon className="w-6 h-6 " />
          </NavLink>

          <NavLink
            to="/about"
            className="hover:text-blue-600 transition duration-300 py-2 px-3"
          >
            {" "}
            Learn More{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Book;
