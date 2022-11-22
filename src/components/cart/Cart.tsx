import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { CartItem ,cartActions, orderActions } from "../../redux/store";
import { StyledListCard, StyledItemButton } from "../styledComponents/styledComponents";

const Cart = () => {
  const cart = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  const pageHeading = cart.length > 0 ? 'Your Cart' : 'Your Cart Is Emtpy';
  
  const removeItem = (id: number) => {
    dispatch(cartActions.removeItem({id}));  
  }
  
  const placeOrder = () => {
    let order: CartItem[] = [];
    cart.map(item => order.push({...item}))
    dispatch(orderActions.addOrder(order));
    dispatch(cartActions.clearCart());
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
      <h2>{pageHeading}</h2>
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
        {
          cart.length > 0 &&
          <StyledItemButton onClick={placeOrder}>Checkout</StyledItemButton> 
        }
    </div>
  );
};

export default Cart;
