import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import PopularProduct from "./Components/Main/PopularProducts/PopularProduct";
import PopularCategories from "./Components/Main/PopuluarCategories/PopularCategories";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <PopularCategories />
      <PopularProduct />
    </>
  );
}

export default App;
