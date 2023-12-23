import reactImage from "../../assets/react-core-concepts.png";
import "./Header.css"
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

export default Header