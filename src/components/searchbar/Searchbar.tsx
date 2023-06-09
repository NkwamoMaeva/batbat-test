import React, { useState } from "react";
import "./Searchbar.scss";
import { Icon } from "@iconify/react";
import { Place } from "../../models/Place";
import { getPlaces, searchPlaces } from "../../service";

function Searchbar() {
  const [places, setplaces] = useState<Place[]>([]);
  const [searchValue, setsearchValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setsearchValue(e.target.value);
    searchPlaces(e.target.value)
      .then((data: Place[]) => {
        setplaces([...data]);
      })
      .catch(() => {
        return { error: "Unable to retrieve places" };
      });
  };

  const handleFocus = () => {
    if (searchValue === "") {
      getPlaces()
        .then((data: Place[]) => {
          setplaces(data);
        })
        .catch(() => {
          return { error: "Unable to retrieve places" };
        });
    }

    // Scroll to the search-box
    document.querySelector(".search-box")!.scrollIntoView({
      behavior: "smooth",
    });

    document.body.style.overflow = "hidden";

    //Blur on search input focused
    document.getElementById("blur")!.style.display = "block";

    //Show datalist on search input
    document.getElementById("result-list")!.style.visibility = "visible";
  };
  const handleFocusOut = (place?: Place) => {
    document.body.style.overflowY = "scroll";
    document.getElementById("blur")!.style.display = "none";
    if (place) {
      setsearchValue(place.unique_name);

      //Hide datalist on search input
      document.getElementById("result-list")!.style.visibility = "hidden";
    } else {
      //Hide datalist on search input
      document.getElementById("result-list")!.style.visibility = "hidden";
    }
  };

  return (
    <div className="box">
      <div style={{ position: "relative" }}>
        <input
          type="text"
          id="search-input"
          name="search-result"
          value={searchValue}
          onFocus={handleFocus}
          onChange={handleChange}
          placeholder="Une destination, demande..."
        />
        <div id="result-list" onClick={() => handleFocusOut()}>
          {places.map((place, i) => (
            <div className="item" key={i} onClick={() => handleFocusOut(place)}>
              <Icon icon="mdi:city-variant-outline" />
              <div className="item">{place.local_name}</div>
            </div>
          ))}
        </div>
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
