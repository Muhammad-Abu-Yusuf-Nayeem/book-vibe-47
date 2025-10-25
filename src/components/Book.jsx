import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookName, author, image, tags, category, rating, bookId } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 shadow-md p-6 border border-gray-300">
        <figure className="bg-[#e6e6e6] py-8 rounded-2xl">
          <img src={image} alt={bookName} className="h-[166px] " />
        </figure>
        <div className="card-body px-0 pt-4 pb-2">
          <div className="flex justify-start gap-2">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="btn btn-sm  bg-green-200 text-green-700"
              >
                {tag}
              </button>
            ))}
          </div>
          <h2 className="text-2xl font-semibold mt-4">{bookName}</h2>
          <p>By: {author}</p>
          <div className="border-b border-dashed border-gray-400 py-1"></div>
          <div className="card-actions justify-between">
            <div className="badge ">{category}</div>

            <div className="rating">
              <div className="badge text-lg font-semibold">{rating}</div>
              <div
                className="mask mask-star "
                aria-label="3 star"
                aria-current="true"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
