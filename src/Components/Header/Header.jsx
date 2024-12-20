// Style
import "./Header.css";

import { CiLocationOn } from "react-icons/ci";

function Header() {
  return (
    <div className="header">
      <div className="header_container container">
        <div className="header_container_left">
          <p className="flex_div">
            <CiLocationOn className="icons" />
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </p>
        </div>
        <div className="header_container_right flex_div">
          <form>
            <select>
              <option value="">Eng</option>
              <option value="">Eng</option>
              <option value="">Eng</option>
            </select>
            <select>
              <option value="">USD</option>
              <option value="">USD</option>
              <option value="">USD</option>
            </select>
          </form>
          <b>|</b>
          <a href="#">Sing in</a> <b>/</b>
          <a href="#">Sing up</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
