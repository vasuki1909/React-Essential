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
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              img={CORE_CONCEPTS_LIST[0].img}
              title={CORE_CONCEPTS_LIST[0].title}
              description={CORE_CONCEPTS_LIST[0].description}
            />

            <CoreConcepts {...CORE_CONCEPTS_LIST[1]} />
            <CoreConcepts {...CORE_CONCEPTS_LIST[2]} />
            <CoreConcepts {...CORE_CONCEPTS_LIST[3]} />

          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
