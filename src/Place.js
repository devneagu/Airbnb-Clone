import React from "react";

export const Place = (props) => {
  console.log(props);
  return (
    <div className="gridElement">
      <img src={`${props.imageSrc}`} />
      <div className="flex">
        <div className="flex-1">
          <span className="city bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-500 ">{`${props.location}`}</span>
          <span className="placeType text-gray-400">{`${props.placeType}`}</span>
          <span className="guests text-cyan-600">
            {" "}
            Guests : {`${props.guests}`}
          </span>
        </div>
        <div className="flex-3">
          <span>
            <svg
              height="20px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#aaae85"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {props.reviewStars}
          </span>
        </div>
      </div>
      <h3 className="text-lg font-semibold">{`${props.name}`}</h3>
    </div>
  );
};
