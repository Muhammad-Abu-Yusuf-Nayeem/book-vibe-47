import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookName, author, image, tags, category, rating, bookId } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-sm p-6">
        <figure className="bg-slate-200 py-8 rounded-2xl">
          <img src={image} alt={bookName} className="h-[166px] " />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-4">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="btn btn-xs  bg-green-200 text-green-700"
              >
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By: {author}</p>
          <div className="border-b border-dashed"></div>
          <div className="card-actions justify-between">
            <div className="badge ">{category}</div>

            <div className="rating">
              <div className="badge text-xl">{rating}</div>
              <div
                className="mask mask-star"
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
