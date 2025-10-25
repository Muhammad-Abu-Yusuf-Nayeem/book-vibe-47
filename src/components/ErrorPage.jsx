import React from "react";

const ErrorPage = () => {
  return (
    <div className="text-center mt-20">
      <h2 className=" text-5xl font-bold">Page not found!!</h2>
      <h3 className=" text-3xl mt-5">Status: 404 </h3>

      <div className="border border-amber-300 w-[220px] p-4 rounded-2xl my-12 mx-auto">
        <a className="text-3xl " href="/">
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
