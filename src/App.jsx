import React, { useState } from "react";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import Header from "./components/Header/Header";
import { CORE_CONCEPTS_LIST, EXAMPLES } from "./data/data";
import TapButton from "./components/TapButton/TapButton";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function selectHandler(selectedButton) {
    setSelectedTopic(selectedButton);
  }
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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TapButton
              onSelect={() => selectHandler("components")}
              isSelected={selectedTopic === "components" ? true : false}
            >
              Component
            </TapButton>
            <TapButton
              onSelect={() => selectHandler("jsx")}
              isSelected={selectedTopic === "jsx" ? true : false}
            >
              JSX
            </TapButton>
            <TapButton
              onSelect={() => selectHandler("props")}
              isSelected={selectedTopic === "props" ? true : false}
            >
              Props
            </TapButton>
            <TapButton
              onSelect={() => selectHandler("state")}
              isSelected={selectedTopic === "state" ? true : false}
            >
              State
            </TapButton>
          </menu>
          {!selectedTopic ? (
            <p> Please select a topic. </p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
