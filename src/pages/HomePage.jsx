import React, { useEffect, useState } from "react";
import CANDIDATE_API_URL from "../utils/constants";
import CandidateCard from "../components/CandidateCard";
import { generateCandidateObject } from "../utils/helperFunctions";
import Loading from "../components/Loading";
import NoCandidate from "../components/NoCandidate";
import HomePageTopbar from "../components/HomePageTopbar";

function HomePage() {
  const [allCandidates, setAllCandidates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [isDeleting, setIsDeleting] = useState("");

  // fetch candidates
  const fetchAllCandidates = () => {
    fetch(CANDIDATE_API_URL)
      .then((res) => res.json())
      .then((data) => {
        const updatedList = [...data];
        const newList = updatedList.map((candidate, idx) => {
          return {
            ...candidate,
            isRecommended: idx % 4 === 0,
          };
        });
        setAllCandidates(newList);

        setIsLoading(false);
      });
  };

  // when Adding a candidate
  const onAddNewCandidate = async () => {
    setIsAdding(true);
    const newCandidate = await generateCandidateObject();
    setAllCandidates((prev) => {
      const candidates = [...prev];
      candidates.unshift(newCandidate);
      return candidates;
    });
    setIsAdding(false);
  };

  // when deleting a candidate
  const onDeleteCandidate = (idx) => {
    setIsDeleting(idx);
    setTimeout(() => {
      //Simulating API
      setAllCandidates((prev) => {
        const prevCandidates = [...prev];
        prevCandidates.splice(idx, 1);
        return prevCandidates;
      });
      setIsDeleting(null);
    }, 1500);
  };

  // after page load , fetch all candidates
  useEffect(() => {
    fetchAllCandidates();
  }, []);

  //   _____JSX  STARTS______
  return (
    <section>
      {/* _____HOME PAGE TOP NAVBAR____ */}
      <HomePageTopbar
        length={allCandidates.length}
        isAdding={isAdding}
        isLoading={isLoading}
        onAdd={onAddNewCandidate}
      />

      <div className=" border-t-2 mt-2  border-gray-200 pt-2 h-[80vh] overflow-y-auto">
        {/* ___IF LOADING____ */}
        {isLoading && <Loading />}

        {/*____IF NO CANDIDATE FOUND____ */}
        {!isLoading && allCandidates.length === 0 && (
          <NoCandidate isAdding={isAdding} onAdd={onAddNewCandidate} />
        )}

        {/* __LIST OF ALL CANDIDATES___*/}
        <div className="h-full w-full grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  gap-2 px-2 py-1 ">
          {allCandidates.length > 0 &&
            !isLoading &&
            allCandidates.map((candidate, idx) => {
              return (
                <CandidateCard
                  key={candidate.id}
                  data={candidate}
                  onDeleteCandidate={onDeleteCandidate}
                  idx={idx}
                  isDeleting={isDeleting}
                ></CandidateCard>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default HomePage;
