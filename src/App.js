import React from "react";
import { render } from "react-dom";
import { Header } from "./Header";
import { ImageGrid } from "./ImageGrid";

const App = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <ImageGrid />
    </div>
  );
};

render(<App />, document.getElementById("root"));
