import React from "react";
import "./styles.css";
import Card from "./components/Card";
import cardsArr from './data'

export default function App() {

  const cards = cardsArr.map((ele, index) => (
      <Card key={index} {...ele} />
    ));
  console.log("this is cards:", cards);

  return (
    <div className="App">
      <h1>Bootstrap Cards To Component Example</h1>
      <section className="cards">
        {cards}
      </section>
    </div>
  );
}
