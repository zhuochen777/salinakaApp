import React from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import "../css/Nav.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Drawer } from "@mui/material";
import Cart from "./Cart";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";

export default function Nav() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const toggleDrawer = (flag) => {
    setOpen(flag);
  };

  const closeCartHandle = () => {
    setOpen(false);
  };

  const cartList = useSelector((state) => state.shop.cartList);
  return (
    <>
      <nav className="navbar">
        <a href="/">
          <img
            src="https://salinaka-ecommerce.web.app/images/logo-full.059e10fa5fedbfb65165e7565ed3936f.png"
            alt="logo"
          />
        </a>

        <ul className="nav-option">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/featured">Featured</a>
          </li>
          <li>
            <a href="/recommended">Recommended</a>
          </li>
        </ul>
        <div className="searchbar">
          <input
            className="search-input"
            type="text"
            placeholder="Search product..."
          />
        </div>
        <ul className="navigation-menu">
          <li className="navigation-menu-item">
            <button onClick={() => toggleDrawer(true)} className="cart-icon">
              <div className="badge">
                <span>
                  <Badge badgeContent={cartList.length} color="primary">
                    <ShoppingBagOutlinedIcon />
                  </Badge>
                </span>
                <span className="badge-count"></span>
              </div>
            </button>
          </li>
          <li className="navigation-menu-item"></li>
        </ul>
      </nav>
      <Drawer open={open} onClose={() => toggleDrawer(false)} anchor="right">
        <div style={{ width: "600px", padding: "10px" }}>
          <Cart closeCartHandle={closeCartHandle} />
        </div>
      </Drawer>
    </>
  );
}
