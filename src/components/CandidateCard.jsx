import React, { useCallback } from "react";
import { generateRandomRating } from "../utils/helperFunctions";

function CandidateCard({ data, onDeleteCandidate, idx, isDeleting }) {
  const formattedDate = new Date(data.createdAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const getRating = useCallback(() => {
    const rating = generateRandomRating().length * 10;
    return rating;
  });

  return (
    <div className="shadow-md  roll-out card-bg-image  relative border-1 items-center  px-2 py-4 rounded-md flex flex-col gap-2">
      {/* image */}
      <img
        src={data.avatar}
        alt={data.name}
        className=" h-24 w-24 shadow-md object-cover rounded-full"
      />

      {/* name */}
      <h2 className="text-xl text-[#3875CD] font-bold ">{data.name}</h2>

      {/* score */}
      <div className="flex justify-start flex-col gap-2 ">
        <div className="flex flex-col  w-full  text-xs items-center max-w-[200px]">
          <h4 className="w-[90px] font-serif">HTML & CSS</h4>

          <div className="bar">
            <div
              className="fill"
              style={{
                width: getRating(),
              }}
            ></div>
          </div>
        </div>
        <div className="flex flex-col   text-xs items-center max-w-[200px]">
          <h4 className="w-[90px] font-serif">JavaScript</h4>

          <div className="bar">
            <div
              className="fill"
              style={{
                width: getRating(),
              }}
            ></div>
          </div>
        </div>
        <div className="flex  flex-col  font-serif text-xs items-center w-full">
          <h4 className="w-full font-serif">React JS</h4>

          <div className="bar">
            <div
              className="fill"
              style={{
                width: getRating(),
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* other info */}

      <p className="text-[10px] font-mono font-extralight text-gray-400 ">
        last updated: {formattedDate}
      </p>

      {/* actions */}
      <div className="flex justify-end">
        <button
          onClick={() => {
            if (isDeleting) return;
            onDeleteCandidate(idx);
          }}
          className="text-red-400 border-b-2 border-dotted hover:border-none hover:bg-red-500 hover:text-white delay-75  text-xs font-extralight px-2 py-2 rounded"
        >
          {isDeleting === idx ? "Deleting Candidate" : "Delete candidate"}
        </button>
      </div>

      {/* tags */}
      {data.isRecommended && (
        <span className="bg-blue-500 text-white font-extralight pb-1 pt-[-8px] text-xs px-2 rounded absolute top-0 left-0 style-badge">
          recommended
        </span>
      )}
    </div>
  );
}

export default CandidateCard;
