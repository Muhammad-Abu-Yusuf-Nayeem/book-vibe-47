import React from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  console.log(bookId);
  return (
    <div>
      <h1>this is book details of {bookId}</h1>
    </div>
  );
};

export default BookDetails;
