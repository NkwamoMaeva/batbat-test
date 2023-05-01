import React from "react";
import "./Searchbar.scss";

function Searchbar() {
  return (
    <div className="box">
      <div>
        <input type="text" placeholder="Une destination, demande..." />
      </div>
      <div className="search-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="#282c34"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"
          />
        </svg>
      </div>
    </div>
  );
}

export default Searchbar;
