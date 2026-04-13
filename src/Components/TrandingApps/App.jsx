import React from "react";
import { IoIosStar } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from "react-router";

const App = ({ app }) => {
  const { image, title, downloads, ratingAvg, id } = app;
  return (
    <Link
      to={`/appDetails/${id}`}
      className="card bg-base-100 shadow-sm rounded-xl p-3 md:p-5 cursor-pointer hover:border-blue-300 hover:border border border-transparent transition-all duration-500 hover:-translate-y-1"
    >
      <figure className="w-full">
        <img
          className="h-40 md:h-60 object-cover w-full rounded-xl"
          src={image}
          alt={title}
        />
      </figure>
      <h2 className="pt-4 text-sm md:text-base font-semibold">{title}</h2>
      <div className="flex justify-between items-center pt-3">
        <p className="bg-blue-50 text-blue-600 px-2 md:px-3 py-1 rounded flex items-center gap-2">
          <MdOutlineFileDownload />
          {new Intl.NumberFormat("en-US", {
            notation: "compact",
          }).format(downloads)}
        </p>
        <p className="flex items-center gap-1">
          <IoIosStar className="text-amber-500" /> {ratingAvg}
        </p>
      </div>
    </Link>
  );
};

export default App;
