import React, { useState } from "react";
import { getInstalledData } from "../Utils/localStorage";
import Container from "../Components/Container/Container";
import { Divide } from "lucide-react";
import InstallAppCard from "../Components/InstallAppCard/InstallAppCard";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Installation = () => {
  const [installData, setInstallData] = useState(() => getInstalledData());

  return (
    <div className="px-3 md:px-0">
      <Container>
        {/* Normal Text */}
        <div className="text-center my-12">
          <h1 className="text-2xl md:text-4xl font-semibold pb-3">
            Your Installed Apps
          </h1>
          <p className="text-sm md:text-base text-gray-400">
            Explore your installed apps in one place.
          </p>
        </div>
        {/* Sort  */}
        <div className="flex justify-between items-center">
          <p className="text-sm md:text-xl">
            ({installData.length}) Apps Found
          </p>
          <div>
            <select className="select select-primary w-44 md:w-52 outline-0">
              <option value="">Sort by Download</option>
              <option value="">Low - High</option>
              <option value="">High - Low</option>
            </select>
          </div>
        </div>

        {/* LocalStore Data */}
        {installData.length === 0 ? (
          <div className="text-center py-15">
            <DotLottieReact
              className="md:w-96 mx-auto"
              loop
              autoplay
              src="/NoItemFound.lottie"
            />
            <p className="text-lg font-medium pt-4">
              Your installed apps will appear here!
            </p>
            <span className="text-gray-400 font-light">Go ahead, install something cool! ⚡</span>
          </div>
        ) : (
          <div className="my-12">
            {installData.map((data) => (
              <InstallAppCard
                key={data.id}
                data={data}
                setInstallData={setInstallData}
              />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Installation;

// // 💡 মেইন কার্ড: সাদা ব্যাকগ্রাউন্ড, শ্যাডো এবং বর্ডার
//     <div className="flex items-center justify-between bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 mb-4 transition-all duration-300 hover:shadow-md">

//       {/* ⬅️ বাম পাশ: অ্যাপের ছবি এবং বিস্তারিত তথ্য */}
//       <div className="flex items-center gap-4 md:gap-5">

//         {/* অ্যাপের লোগো */}
//         <div className="w-14 h-14 md:w-16 md:h-16 shrink-0">
//           <img
//             src={image}
//             alt={title}
//             className="w-full h-full object-cover rounded-xl shadow-sm border border-gray-50"
//           />
//         </div>

//         {/* অ্যাপের নাম এবং স্ট্যাটাস */}
//         <div className="flex flex-col gap-1">
//           <h2 className="text-lg md:text-xl font-bold text-slate-800 leading-tight">
//             {title}
//           </h2>

//           <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm font-medium">

//             {/* ডাউনলোডস (সবুজ রঙ) */}
//             <div className="flex items-center gap-1 text-emerald-500">
//               <Download size={14} strokeWidth={2.5} />
//               <span>
//                 {new Intl.NumberFormat("en-US", { notation: "compact" }).format(downloads)}
//               </span>
//             </div>

//             {/* রেটিংস (কমলা রঙ) */}
//             <div className="flex items-center gap-1 text-amber-500">
//               {/* fill="currentColor" দিলে স্টারটা ভেতর থেকে কালার হয়ে যাবে */}
//               <Star size={14} fill="currentColor" strokeWidth={0} />
//               <span>{ratingAvg}</span>
//             </div>

//             {/* সাইজ (ধূসর রঙ) */}
//             <div className="text-slate-400 border-l border-gray-200 pl-3">
//               {size} MB
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* ➡️ ডান পাশ: আনইনস্টল বাটন */}
//       <button
//         onClick={() => onUninstall(id)}
//         className="bg-[#ff2e55] hover:bg-[#e01b43] text-white px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
//       >
//         Uninstall
//       </button>

//     </div>
