import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../utility/AddToDB";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);

  const data = useLoaderData();

  const book = data.find((book) => book.bookId === id);
  const {
    image,
    bookName,
    author,
    category,
    tags,
    review,
    publisher,
    yearOfPublishing,
    totalPages,
    rating,
  } = book;

  const handleMarkAsRead = (id) => {
    addToStoredReadList(id);
  };
  const handleWishList = (id) => {
    addToStoredWishList(id);
  };
  return (
    <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="bg-slate-300 flex items-center justify-center rounded-xl">
        <img className="w-60" src={image} alt={bookName} />
      </div>
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">{bookName}</h1>
        <p>By: {author}</p>
        <hr className="text-gray-400" />
        <div className="">{category}</div>
        <hr className="text-gray-400" />
        <div>
          <span className="font-bold ">Review: </span>
          <span className="text-gray-500">{review}</span>
          <br />
        </div>
        <div className="mb-4 flex items-center gap-8">
          Tag:
          {tags.map((tag, index) => (
            <span key={index} className="  bg-gray-100 text-green-600 mr-4">
              #{tag}
            </span>
          ))}
        </div>
        <div className="w-2/3">
          <p className="grid grid-cols-2">
            <span>Number of Pages: </span>
            <span className="font-bold">{totalPages}</span>
          </p>
          <p className="grid grid-cols-2">
            <span>Publisher: </span>
            <span className="font-bold">{publisher}</span>
          </p>
          <p className="grid grid-cols-2">
            <span>Year of Publishing: </span>
            <span className="font-bold">{yearOfPublishing}</span>
          </p>
          <p className="grid grid-cols-2">
            <span>Rating: </span>
            <span className="font-bold">{rating}</span>
          </p>
        </div>
        <br />
        <div className="flex items-center">
          <button
            onClick={() => handleMarkAsRead(bookId)}
            className="btn btn-outline mr-4 font-bold px-6 py-4"
          >
            Mark as Read
          </button>
          <button
            onClick={() => handleWishList(bookId)}
            className="btn bg-[#50B1C9]  px-6 py-4 font-bold text-white"
          >
            Wish List
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
