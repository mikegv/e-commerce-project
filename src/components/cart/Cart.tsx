import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { CartItem ,cartActions, orderActions } from "../../redux/store";
import { StyledListCard, StyledItemButton, StyledCartPage } from "../styledComponents/styledComponents";

const Cart = () => {
  const cart = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  const pageHeading = cart.length > 0 ? 'Your Cart' : 'Your Cart Is Emtpy';
  let total = 0;
  const removeItem = (id: number) => {
    dispatch(cartActions.removeItem({id}));  
  }
  
  const placeOrder = () => {
    let order: CartItem[] = [];
    cart.map(item => order.push({...item}))
    dispatch(orderActions.addOrder({total, order}));
    dispatch(cartActions.clearCart());
  }
  
  return (
    <StyledCartPage>
      <h2>{pageHeading}</h2>
      {cart.length > 0 &&
        cart.map((item) => {
          total = total + (item.quantity * item.price)
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
          <>
            <h3 style={{marginTop: '1rem'}}>TOTAL: ${total}</h3>
            <StyledItemButton onClick={placeOrder}>Checkout</StyledItemButton> 
          </>
        }
    </StyledCartPage>
  );
};

export default Cart;
