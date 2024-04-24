import React from "react";

function Navbar() {
  return (
    <nav className="h-14 w-full items-center flex bg-[#214380] px-10 py-1 justify-between">
      <h2 className="text-2xl cursor-pointer text-[#00C4C3] font-bolder font-serif">
        Recruiter Pro+
      </h2>
      <p className="font-mono text-xs text-[#00C4C3]">
        {" "}
        <span className="text-white"> Developed by : </span>
        <a
          className="border-b-2 border-dotted animate-pulse"
          target="_blank"
          href="https://www.linkedin.com/in/ashutoshanandtiwari/"
        >
          Ashutosh Anand Tiwari
        </a>
      </p>
    </nav>
  );
}

export default Navbar;
