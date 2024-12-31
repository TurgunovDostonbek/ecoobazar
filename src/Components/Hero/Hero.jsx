// Style
import "./Hero.css";

// Imglar
import heroImg from "../../assets/img/hero/delivery-truck 1.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero_container container">
        <div className="hero_container_left">
          <h3>
            Fresh & Healthy <br /> Organic Food
          </h3>
          <p>
            Sale up to <b>30% OFF</b>
          </p>
          <span>Free shipping on all your order.</span>
          <button>Shop now</button>
        </div>
        <div className="hero_container_right">
          <div className="hero_container_right_top">
            <h3>Summer Sale</h3>
            <p>75% OFF</p>
            <span>Only Fruit & Vegetable</span>
            <button>Shop Now</button>
          </div>
          <div className="hero_container_right_bottom">
            <h3>Best Deal</h3>
            <p>
              Special Products <br /> Deal of the Month
            </p>
            <button>Shop Now</button>
          </div>
        </div>
      </div>

      <div className="hero_container_bottom container">
        <div className="hero_container_bottom_card">
          <img src={heroImg} alt="yuk mashina rasmi" />
          <p>
            Free Shipping
            <span>Free shipping on all your order</span>
          </p>
        </div>
        <div className="hero_container_bottom_card">
          <img src={heroImg} alt="yuk mashina rasmi" />
          <p>
            Free Shipping
            <span>Free shipping on all your order</span>
          </p>
        </div>
        <div className="hero_container_bottom_card">
          <img src={heroImg} alt="yuk mashina rasmi" />
          <p>
            Free Shipping
            <span>Free shipping on all your order</span>
          </p>
        </div>
        <div className="hero_container_bottom_card">
          <img src={heroImg} alt="yuk mashina rasmi" />
          <p>
            Free Shipping
            <span>Free shipping on all your order</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
