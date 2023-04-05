import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import Book from "./Book/Book";

const Books = () => {
  const { books } = useLoaderData();
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {books.map((book) => (
        <Book key={book.isbn13} book={book} />
      ))}
    </div>
  );
};

export default Books;
