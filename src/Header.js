import React from "react";

export const Header = () => {
  return (
    <header>
      <div className="flex">
        <h1 className="flex-1">devbnb</h1>
        <div className="flex-4 m-auto">
          <div className="searchContainer">
            <div class="flex ">
              <div class="flex-1  m-auto mr-10">Start your search</div>
              <div class="flex-2">
                <span className="bg-red-500 h-7 w-7 text-white text-center font-extrabold flex items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="-14 -14 50 50"
                    stroke="white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
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
  );
};
