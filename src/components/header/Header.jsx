import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeMode } from "../../redux/action/DarkMode";
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import  "./header.scss";
const Header = () => {
  const dispatch = useDispatch();
  const {cartItems} =useSelector(state=>state.cart)
  return (
    <header>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo">
            <Link to="/">
              <h3>Logo</h3>
            </Link>
          </div>
          <nav className="menu">
            <ul className="d-flex list-unstyled align-items-center">
              <li>
                <Link to="#">Shop</Link>
              </li>
              <li>
                <Link to="#">Blog</Link>
              </li>
              <li>
                <button className="btn me-3 btn-outline-secondary" onClick={() => dispatch(changeMode("white"))}>
                  White
                </button>
                <button className="btn btn-dark" onClick={() => dispatch(changeMode("black"))}>
                  Dark
                </button>
              </li>
              <li>
                <Link to={"/cart"}>
                  {/* <ShoppingCartOutlinedIcon/> */}
                  Cart
                  <sup>{cartItems.length}</sup>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
