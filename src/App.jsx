import React from "react";
import reactImage from "./assets/react-core-concepts.png";
import CoreConcepts from "./components/CoreConcepts";
import { CORE_CONCEPTS_LIST } from "./data";

const reactDescrition = ["Fundamental", "Crucial", "Core"];
const randomIndex = (max) => {
  return Math.floor(Math.random() * max);
};

const Header = () => {
  const description = reactDescrition[randomIndex(3)];
  console.log(description);
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};

function App() {
  const list = CORE_CONCEPTS_LIST.map((data) => {
   
   return <CoreConcepts
      img={data.image}
      title={data.title}
      description={data.description}
    />;
    console.log(data); 
  });
  console.log(list);
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>{list}</ul>
        </section>
      </main>
    </div>
  );
}

export default App;
