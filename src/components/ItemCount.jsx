import { useState } from "react";

function ItemCount(props) {
  let [count, setCount] = useState(1);

  const handleAdd = () => {
    if (count === props.max) return;
    console.log("Suma");
    setCount(count + 1);
  };
  
  const handleMin = () => {
    if (count < 1 ) return;
      handleSubstract.disabled
  }

  const handleSubstract = () => {
    if (count < 1) return;
      handleSubstract.disabled
    console.log("Resta");
    setCount(count - 1);
  };

  function handleClick() {
    props.onSubmitCount(count);
  }

  return (
    <div>
      <div>
        <button onClick={handleAdd}>+</button>
        <span>{count}</span>
        <button onClick={handleSubstract}>-</button>
      </div>
      <div>
        <button onClick={handleClick}>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ItemCount;
