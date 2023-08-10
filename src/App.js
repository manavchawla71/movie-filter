import React, { useState } from "react";
import database from "./database";
import "./styles.css";

export default function App() {
  const [selected, setSelected] = useState("action");
  const [theme, setTheme] = useState("light");
  const [number, setnumber] = useState(0);
  const onClickHandler = (item) => {
    setSelected(item);
  };

  const titles = Object.keys(database);

  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="App">
      <div className="header-content">
        <h1>Movie Filtration web app</h1>
        <button className="theme" onClick={changeTheme}>
          Change Theme
        </button>
      </div>
      <div>
        {titles.map((item) => (
          <button key={item} onClick={() => onClickHandler(item)}>
            {item}
          </button>
        ))}
      </div>
      <hr />
      <div>
        {database[selected] ? (
          <ul>
            {selected === "All"
              ? titles
                  .flatMap((item) => database[item])
                  .map(function (item) {
                    return (
                      <li key={item.name}>
                        <img src={item.image} alt={item.name} />
                        <div className="imageTitle">
                          <h2>{item.name}</h2> {item.rating}
                        </div>
                      </li>
                    );
                  })
              : database[selected].map(function (item) {
                  return (
                    <li key={item.name}>
                      <img src={item.image} alt={item.name} />
                      <div className="imageTitle">
                        <h2>{item.name}</h2> {item.rating}
                      </div>
                    </li>
                  );
                })}
          </ul>
        ) : (
          <p>Click on genre to explore</p>
        )}
      </div>
      <hr />
    </div>
  );
}
