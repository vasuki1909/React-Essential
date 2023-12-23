import React from "react";
import CoreConcepts from "./components/CoreConcepts";
import Header from "./components/Header";
import { CORE_CONCEPTS_LIST } from "./data";


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
