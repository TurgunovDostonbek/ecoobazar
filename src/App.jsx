import "./App.css";
import Header from "./Components/Header/Header";
import PopularProduct from "./Components/Main/PopularProducts/PopularProduct";
import PopularCategories from "./Components/Main/PopuluarCategories/PopularCategories";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <PopularCategories />
      <PopularProduct />
    </>
  );
}

export default App;
