// styles
import "./PopularProduct.css";
import { CiShoppingBasket } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import { IoEyeOutline } from "react-icons/io5";
import { popularProducts } from "../../../data";

function PopularProduct() {
  return (
    <section className="popular_product">
      <div className="product_container container">
        <div className="product_container_title">
          <h2>Popular Product</h2>
          <button className="flex_div">
            View All <FaArrowRight />{" "}
          </button>
        </div>

        <div className="product_container_cards">
          {popularProducts.map((item) => {
            return (
              <div className="product_container_card" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="product_container_card_info">
                  <div className="product_container_card_info_left">
                    <h3>{item.name}</h3>
                    <h4>${item.price}</h4>
                    <span>{item.rating}</span>
                  </div>
                  <div className="product_container_card_info_right">
                    <button>
                      <CiShoppingBasket className="icons" />
                    </button>
                  </div>
                </div>
                <div className="product_container_card_like">
                  <button>
                    <SlLike className="icons" />
                  </button>
                  <button>
                    <IoEyeOutline className="icons" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PopularProduct;
