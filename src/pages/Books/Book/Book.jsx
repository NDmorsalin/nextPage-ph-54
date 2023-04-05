import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  // console.log(book);
  return (
    <Link to={`/book/${book.isbn13}`}>
      <div className="border border-blue-400 rounded-md p-4 relative bg-blue-100 transform hover:-translate-y-2 duration-500 transition shadow-xl">
        <img
          src={book.image}
          alt={book.title}
          className="w-full object-cover rounded-lg border border-gray-200"
        />
        <div className="absolute bg-slate-700/80  duration-500 transition inset-0 opacity-0 hover:opacity-100  p-4 flex flex-col justify-between text-slate-50">
          <h1 className="text-xl font-bold ">{book.title}</h1>
          <p className="">{book.subtitle}</p>
          <p className="">Price : {book.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
