import React, { useState } from "react";
import { render } from "react-dom";
import { ImageGrid } from "./ImageGrid";
import jsonData from "./places.json";

const App = () => {
  const [searchActive, setSearchActive] = useState(""); //array of [color, setColor]

  const [dataGrid, setDataGrid] = useState(jsonData);

  const cities = jsonData.places.map((el) => el.location);
  cities.unshift("All Locations");

  function cancelFilter() {
    setSearchActive("");
  }
  function manipulateData() {
    var x = document.getElementById("cityFilter");
    if (x.value != "All Locations") {
      let manipulateData = jsonData.places.filter((el) => {
        if (el.location == x.value) return el;
      });
      setDataGrid({ places: manipulateData });
    } else {
      setDataGrid(jsonData);
    }
  }
  function handleClick() {
    setSearchActive("active");
  }
  return (
    <div className="container mx-auto">
      <header>
        <div className="flex">
          <h1 className="flex-1">devbnb</h1>
          <div className="flex-4 m-auto">
            <div className="searchContainer" onClick={handleClick}>
              <div className="flex ">
                <div className="flex-1  m-auto mr-10">Start your search</div>
                <div className="flex-2">
                  <span className="bg-red-500 h-7 w-7 text-white text-center font-extrabold flex items-center justify-center rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="-14 -14 50 50"
                      stroke="white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={`searchContainerFilter ${searchActive}`}>
        <div className="container mx-auto">
          <div className="flex">
            <div className="flex-initial my-auto mr-10">
              <span className="searchTitle">Location</span>
              <select id="cityFilter" className="appearance-none">
                {cities.length === 0 ? (
                  <h1>No locations available.</h1>
                ) : (
                  cities.map((city, index) => (
                    <option key={index}>{city}</option>
                  ))
                )}
              </select>
            </div>
            <div className="flex-initial my-auto">
              <div className="searchContainer" onClick={manipulateData}>
                <div className="flex">
                  <div className="flex-2">
                    <span className="bg-red-500 h-7 w-7 text-white text-center font-extrabold flex items-center justify-center rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="-14 -14 50 50"
                        stroke="white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="flex-1  m-auto ml-3 pr-5">Search</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`searchOverlay ${searchActive}`}
        onClick={cancelFilter}
      ></div>
      <ImageGrid jsonData={dataGrid} />
    </div>
  );
};

render(<App />, document.getElementById("root"));
