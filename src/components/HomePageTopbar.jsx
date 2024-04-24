import React from "react";

function HomePageTopbar({ length, isLoading, isAdding, onAdd }) {
  return (
    <div className="">
      <div className="flex flex-wrap  justify-between items-center mx-2">
        <div className="flex   flex-col flex-wrap gap-2  md:gap-0 mb-2 mr-2">
          <h2 className="text-xl  font-semibold  mt-2 text-[#3875CD]">
            List of all candidates
          </h2>
          <p className="text-[10px] font-mono font-extralight text-gray-400">
            Showing: {isLoading ? ".." : length} candidates
          </p>
        </div>
        <button
          onClick={() => {
            if (isAdding) return;
            onAdd();
          }}
          className="bg-[#3875CD] mt-2 w-full md:w-auto  hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          {isAdding ? "Please wait..." : "+ Add  candidate"}
        </button>
      </div>
    </div>
  );
}

export default HomePageTopbar;
