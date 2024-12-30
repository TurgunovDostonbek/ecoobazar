// styles
import "./PopularCategories.css";
import { FaArrowRight } from "react-icons/fa";
import { popularCategories } from "../../../data";

function PopularCategories() {
  return (
    <div className="popular_categories">
      <div className="catagories_container container">
        <div className="catagories_container_title">
          <h2>Popular Categories</h2>
          <button className="flex_div">
            View All <FaArrowRight />{" "}
          </button>
        </div>
        <div className="catagories_container_cards">
          {popularCategories.map((item) => {
            return (
              <div className="catagories_container_card" key={item.id}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PopularCategories;
