import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="./">
        <img
          className="Header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to='/login'>
        <div className="header_option">
          <span className="header_optionLineOne">Helo Guest</span>
          <span className="header_optionLineTwo">Sign In</span>
        </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Yours</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

        <Link to="./Checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <spam className="header_optionLineTwoheader_basketCount">
              {basket?.length}
            </spam>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
