import React from "react";
import About from "./About/About";
import Cards from "./Cards/Cards";

const Main = () => {
  return (
    <main>
      <About />
      <Cards titleCards="Project" cb="#456461" />
      <Cards titleCards="Components" cb="#454a64" />
    </main>
  );
};

export default Main;
