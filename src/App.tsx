import React from "react";
import Searchbar from "./components/searchbar/Searchbar";
import { Icon } from "@iconify/react";
import "./App.scss";

const menus = [
  { icon: "ic:sharp-mode-of-travel", name: "Voyager", href: "/travel" },
  { icon: "tabler:qrcode", name: "Billets", href: "/ticket" },
  { icon: "ph:book-open-text", name: "Offres", href: "/offer" },
  { icon: "prime:user", name: "Compte", href: "/account" },
];

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <div className="logo">
          <div className="logo-img">
            <Icon
              icon="fluent-emoji-high-contrast:bat"
              color="#61dafb"
              width="28"
              height="28"
            />
            <div></div>
          </div>
          <div className="logo-text">
            bat<span>bat</span>
          </div>
        </div>
        {menus.map((menu) => (
          <a className="navbar-item" href={menu.href}>
            <Icon icon={menu.icon} color="white" width="24" height="24" />
            <span>{menu.name}</span>
          </a>
        ))}
      </div>

      {/* Mobile bottom navbar */}
      <div className="navbar-bottom">
        {menus.map((menu) => (
          <a className="navbar-item" href={menu.href}>
            <Icon icon={menu.icon} color="white" width="20" height="20" />
            <span>{menu.name}</span>
          </a>
        ))}
      </div>
      <header>
        <span>
          Recherchez vos voyages, trajets courts et bien plus encore...
        </span>
      </header>

      <div className="search-box">
        <div id="blur"></div>
        <div className="search-header">
          <span className="search-header-title">Rechercher</span>
          <span className="search-header-button">Annuler</span>
        </div>

        <div className="searchbar">
          <Searchbar></Searchbar>
        </div>
      </div>
      <div className="contain">
        {Array.from(Array(20)).map(() => (
          <div className="item"></div>
        ))}
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
