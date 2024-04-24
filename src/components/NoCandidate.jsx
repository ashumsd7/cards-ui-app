import React from "react";

function NoCandidate({ isAdding, onAdd }) {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="flex flex-col gap-2">
        <h2 className="text-[#202020] text-2xl animate-pulse">No Candidates</h2>
        <button
          onClick={() => {
            if (isAdding) return;
            onAdd();
          }}
          className="bg-[#3875CD]  hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          {isAdding ? "Please wait..." : "+ Add candidate"}
        </button>
      </div>
    </div>
  );
}

export default NoCandidate;
