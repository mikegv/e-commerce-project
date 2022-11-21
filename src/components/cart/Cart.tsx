import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { cartActions } from "../../redux/store";
import { StyledListCard, StyledItemButton } from "../styledComponents/styledComponents";

const Cart = () => {
  const cart = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const removeItem = (id: number) => {
    dispatch(cartActions.removeItem({id}));  
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <h2>Your Cart</h2>
      {cart.length > 0 &&
        cart.map((item) => {
          return (
            <>
              <StyledListCard>
                <h4>{item.name}</h4>
                <p>Individual price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </StyledListCard>
              <StyledItemButton onClick={()=>removeItem(item.id)}>Remove one</StyledItemButton>
            </>
          );
        })}
    </div>
  );
};

export default Cart;
