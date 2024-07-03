import { LOGO_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtn] = useState("Log In");
  console.log("header")

  // 
  useEffect(()=>{
    console.log("useEffect called")
  },[btnNameReact])

  return (
    <nav className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="test" />
      </div>

      <div className="nav-item">
        <ul>
          <li> <Link to ='/'>Home</Link></li>
          <li> <Link to ='/about'>About Us</Link></li>
          <li> <Link to ='/contact'>Contact Us</Link></li>
          <li>
          <Link to ='/cart'>Cart <FontAwesomeIcon icon={faShoppingCart} /></Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnNameReact == "Log In" ? setBtn("Log Out") : setBtn("Log In");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
