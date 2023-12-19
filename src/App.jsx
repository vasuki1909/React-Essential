import React from "react";

const reactDescrition = ['Fundamental', 'Crucial', 'Core'] 
const randomIndex = (max)=>{
return Math.floor( Math.random()*(max));
}
console.log(randomIndex())
const Header = () => {
  const description = reactDescrition[randomIndex(3)]
  return (
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
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
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
