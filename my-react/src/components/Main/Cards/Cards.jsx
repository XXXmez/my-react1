import React from "react";
import Card from "../Card/Card";

const arrObj = [
  { id: "1", name: "Slider", description: "text description", url: "slider" },
  {
    id: "2",
    name: "Hidden text",
    description: "text description",
    url: "hidden_text",
  },
  {
    id: "3",
    name: "Accordion",
    description: "text description",
    url: "accordion",
  },
  {
    id: "4",
    name: "Title card",
    description:
      "there is a bunch of text about some description, to be honest I don’t even know what to write, well, let’s say a BEETLE",
    url: "none",
  },
];

const Cards = ({ titleCards = "", cb = "" }) => {
  return (
    <section className="cards">
      <div className="cards-title">
        <h2>{titleCards}</h2>
      </div>
      {arrObj.map((el) => (
        <Card
          key={el.id}
          title={el.name}
          descr={el.description}
          cb={cb}
          url={el.url}
        />
      ))}
    </section>
  );
};

export default Cards;
