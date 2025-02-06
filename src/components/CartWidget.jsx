import { useContext } from "react";
import cartContext from "../context/cartContext";
import { Link, NavLink } from "react-router-dom";

export default function CartWidget() {
  const context = useContext(cartContext);

  return (
   <li class="nav-item d-flex">
 <NavLink to="/cart"><a class="nav-link active" href="#">🛒</a></NavLink>
  <span className="cart-count">{context.countItemsInCart()}</span>
  </li>
  );
}
