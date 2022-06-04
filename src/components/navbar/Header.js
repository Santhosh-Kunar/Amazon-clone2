import React from "react";
import Styles from "./header.module.css"
// import SearchIcon from "@material-ui/icons/Search";
// import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { BsCart3, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useStateValue } from "../../apis/StateProvider";
import { auth } from "../../firebase/firebase";

function Header() {
  const [{ basket,user  }, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className={Styles.header}>
      <Link to="/">
        <img
          className={Styles["header__logo"]}
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className={Styles.header__search}>
        <input className={Styles.header__searchInput} type="text" />
        <BsSearch className={Styles.header__searchIcon} />
      </div>

      <div className={Styles.header__nav}>
        <a href={!user && "/login"}>
          <div onClick={handleAuthenticaton} className={Styles.header__option}>
            <span className={Styles.header__optionLineOne}>
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className={Styles.header__optionLineTwo}>
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </a>
        <Link to="/order">
          <div className={Styles.header__option}>
            <span className={Styles.header__optionLineOne}>Returns</span>
            <span className={Styles.header__optionLineTwo}>& Orders</span>
          </div>
        </Link>
        <div className={Styles.header__option}>
          <span className={Styles.header__optionLineOne}>Your</span>
          <span className={Styles.header__optionLineTwo}>Prime</span>
        </div>
        <Link to="/checkout">
          <div className={Styles.header__optionBasket}>
            <BsCart3 />
            <span className={Styles.header__optionLineTwo} header__basketCount>
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
