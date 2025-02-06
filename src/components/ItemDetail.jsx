import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import cartContext from "../context/cartContext";
import { Link, NavLink } from "react-router-dom";

function ItemDetail(props) {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const { price, title, description, text, img, stock, id } = props;
  const { addItem } = useContext(cartContext);

  function onSubmitCount(count) {
    addItem({ id, price, title, count, img });
    setIsAddedToCart(true);
  }

  return (
    <div>
      <img src={img} width="150" height="150" alt="product img" />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
        <div>
          <p>$ {price}</p>
        </div>
        <p>{description}</p>
      </div>
      <div>
        {isAddedToCart ? (
         <NavLink to="/cart"><button href>Ver Carrito</button></NavLink> 
        ) : (
          <ItemCount onSubmitCount={onSubmitCount} max={stock} />
        )}
      </div>
    </div>
  );
}

export default ItemDetail;