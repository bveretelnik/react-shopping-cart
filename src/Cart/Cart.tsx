import { FC } from "react";
import { CartItem } from "../CartItem/CartItem";
import { CartItemType } from "../types";
import { Wrapper } from "./Cart.style";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
  deleteFromCart: (id: number) => void;
};

export const Cart: FC<Props> = ({
  cartItems,
  addToCart,
  removeFromCart,
  deleteFromCart,
}) => {
  const calculateTotal = (items: CartItemType[]) => {
    return items.reduce((acc: number, cur) => acc + cur.amount * cur.price, 0);
  };
  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in the cart.</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          deleteFromCart={deleteFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};
