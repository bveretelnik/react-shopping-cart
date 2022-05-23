import { Button, IconButton } from "@material-ui/core";
import { FC } from "react";
import { CartItemType } from "../types";
import { Wrapper } from "./CartItem.styles";
import Delete from "@material-ui/icons/Delete";

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
  deleteFromCart: (id: number) => void;
};

export const CartItem: FC<Props> = ({
  item,
  addToCart,
  removeFromCart,
  deleteFromCart,
}) => {
  return (
    <Wrapper>
      <div>
        <div className="title">
          <h3>{item.title}</h3>
          <IconButton
            aria-label="delete"
            onClick={() => deleteFromCart(item.id)}
          >
            <Delete />
          </IconButton>
        </div>

        <div className="information">
          <p>Price: ${item.price}</p>
          <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
        </div>
        <div className="buttons">
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeFromCart(item.id)}
          >
            -
          </Button>
          <p>{item.amount}</p>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => addToCart(item)}
          >
            +
          </Button>
        </div>
      </div>
      <img src={item.image} alt={item.title} />
    </Wrapper>
  );
};
