import React from "react";
import Styles from "./checkoutProduct.module.css"
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className={Styles.checkoutProduct}>
      <img className={Styles.checkoutProduct__image} src={image} />

      <div className={Styles.checkoutProduct__info}>
              <p className={Styles.checkoutProduct__title}>{title}</p>
              <p className={Styles.checkoutProduct__price}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
              <div className={Styles.checkoutProduct__rating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
