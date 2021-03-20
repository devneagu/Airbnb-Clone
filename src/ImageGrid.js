import React from "react";
import { Place } from "./Place";

export const ImageGrid = (prop) => {
  return (
    <div className="gridContainer grid sm:grid-cols-1	md:grid-cols-3 ">
      {prop.jsonData.places.length === 0 ? (
        <h1>No locations available.</h1>
      ) : (
        prop.jsonData.places.map((place) => (
          <Place
            location={place.location}
            name={place.name}
            key={place.id}
            reviewStars={place.reviewStars}
            placeType={place.placeType}
            guests={place.guests}
            imageSrc={place.images}
          />
        ))
      )}
    </div>
  );
};
