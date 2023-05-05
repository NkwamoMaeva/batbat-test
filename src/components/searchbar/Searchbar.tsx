import React from "react";
import "./Searchbar.scss";
import { Icon } from "@iconify/react";

function Searchbar() {
  const handleFocus = () => {
    console.log(window.scrollY);
    document.querySelector(".search-box")?.scrollIntoView({
      behavior: "smooth",
    });
    document.body.style.overflow = "hidden";
    document.getElementById("blur")!.style.display = "block";
  };
  const handleFocusOut = () => {
    document.body.style.overflowY = "scroll";
    document.getElementById("blur")!.style.display = "none";
  };

  return (
    <div className="box">
      <div>
        <input
          type="text"
          onFocus={handleFocus}
          onBlur={handleFocusOut}
          placeholder="Une destination, demande..."
        />
      </div>
      <div className="search-button">
        <Icon
          icon="heroicons-outline:search"
          color="#282c34"
          width="24"
          height="24"
        />
      </div>
    </div>
  );
}

export default Searchbar;
