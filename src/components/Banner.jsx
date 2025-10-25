import bannerImg from "../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-300   rounded-2xl py-12  my-6">
      <div className="hero-content flex-col lg:flex-row-reverse gap-28 items-center">
        <img src={bannerImg} className="max-w-md rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">
            Books to freshen up <br /> your bookshelf
          </h1>

          <button className="btn btn-primary my-20 text-2xl py-8 px-10">
            View the List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
