import React from "react";

function Sidebar() {
  const MENU_ITEMS = ["All Candidates"];
  return (
    <section className=" w-[250px] card-bg-image  h-[100vh] bg-[#F0F3F4] md:flex hidden flex-col ">
      <div className="px-1 font-serif border-r-2 text-[#214380] flex justify-center bg-white text-center cursor-pointer">
        <img
          alt="main-logo"
          style={{
            height: "90px",
          }}
          src="https://t4.ftcdn.net/jpg/05/40/03/03/240_F_540030360_2WKtlf5NXiazFrKtjGc7QirZSO6aNIgV.jpg"
        />
      </div>

      {MENU_ITEMS?.map((item) => {
        return (
          <div
            key={item}
            className="px-2 py-4 bg-[#1F3F79] font-serif text-white  cursor-pointer"
          >
            {item}
          </div>
        );
      })}
    </section>
  );
}

export default Sidebar;
