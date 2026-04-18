import { Download, Star } from "lucide-react";
import React from "react";
import Container from "../Container/Container";

const InstallAppCard = ({ data, setInstallData }) => {
  const { id, image, title, downloads, ratingAvg, size } = data;

  return (
    <Container>
      <div className="flex items-center flex-col md:flex-row gap-1 justify-between bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 mb-4 transition-all duration-300 hover:shadow-md">
        <div className="flex items-center gap-4 md:gap-5">
          <div className="w-20 h-20 md:w-24 md:h-24 shrink-0">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-xl shadow-sm border border-gray-50"
            />
          </div>

          <div className="flex flex-col gap-1">
            <h2 className="text-lg md:text-xl font-bold text-slate-800 leading-tight">
              {title}
            </h2>

            <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm font-medium">
              <div className="flex items-center gap-1 text-emerald-500">
                <Download size={14} strokeWidth={2.5} />
                <span>
                  {new Intl.NumberFormat("en-US", {
                    notation: "compact",
                  }).format(downloads)}
                </span>
              </div>

              <div className="flex items-center gap-1 text-amber-500">
                <Star size={14} fill="currentColor" strokeWidth={0} />
                <span>{ratingAvg}</span>
              </div>

              <div className="text-slate-400 border-l border-gray-200 pl-3">
                {size} MB
              </div>
            </div>
          </div>
        </div>

        <button className="bg-[#ff2e55] hover:bg-[#e01b43] text-white px-3 md:px-6 py-2 md:py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-95">
          Uninstall
        </button>
      </div>
    </Container>
  );
};

export default InstallAppCard;
