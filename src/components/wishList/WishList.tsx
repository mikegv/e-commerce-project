import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { wishListActions } from "../../redux/wish";
import { StyledListCard, StyledItemButton, StyledCartPage } from "../styledComponents/styledComponents";

const WishList = () => {
  const cart = useAppSelector((state) => state.wishList.items);
  const dispatch = useAppDispatch();
  const removeItem = (id: number) => {
    dispatch(wishListActions.removeItem({id}));  
  }
  console.log(cart)
  return (
    <StyledCartPage>
      <h2>Your &lt;3 List &lt;3 &lt;3 &lt;3 </h2>
      {cart.length > 0 &&
        cart.map((item) => {
          return (
            <>
              <StyledListCard image={item.name}>
                <h4>{item.desc}</h4>
                <p>Individual price: ${item.price}</p>
              </StyledListCard>
              <StyledItemButton onClick={()=>removeItem(item.id)}>Remove one</StyledItemButton>
            </>
          );
        })}
    </StyledCartPage>
  );
};

export default WishList;
