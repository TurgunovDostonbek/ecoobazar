// Style
import "./Navbar.css";
import { SlLike } from "react-icons/sl";
import { CiShoppingBasket } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";

import navbarImg from "../../assets/img/Navbar/Logo (5).png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_container container">
        <div className="navbar_container_logo">
          <a href="#">
            <img src={navbarImg} alt="Img" />
          </a>
        </div>

        <div className="navbar_container_search">
          <form>
            <input placeholder="Search" type="text" />
            <button>Search</button>
          </form>
        </div>

        <div className="navbar_container_btn flex_div">
          <SlLike className="icons" />
          <div className="navbar_container_btn_basket flex_div">
            <CiShoppingBasket className="icons" />
            <p>
              Shopping cart
              <span>$57.00</span>
            </p>
          </div>
        </div>
      </div>
      <div className="navbar_bottom">
        <div className="navbar_links container">
          <div className="navbar_link ">
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">Pages</a>
            <a href="#">Blog</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="navbar_phone flex_div">
            <MdOutlinePhoneInTalk className="icons" />
            <span>(219) 555-0114</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
