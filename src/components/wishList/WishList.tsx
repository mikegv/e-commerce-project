import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { wishListActions } from "../../redux/wish";
import {
  StyledListCard,
  StyledItemButton,
  StyledCartPage,
} from "../styledComponents/styledComponents";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cartActions } from "../../redux/cart";
import { WishItem } from "../../redux/wish";
import { useState } from "react";

const WishList = () => {
  const [cartClasses, setCartClasses] = useState("cart");
  const [heartClasses, setHeartClasses] = useState("heart");
  const cart = useAppSelector((state) => state.wishList.items);
  const dispatch = useAppDispatch();
  const removeItem = (id: number) => {
    dispatch(wishListActions.removeItem({ id }));
  };

  const cartClickHandler = (item: WishItem) => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        name: item.name,
        desc: item.desc,
        price: item.price,
      })
    );
  };
  const heartClickHandler = (item: WishItem) => {
    dispatch(
      wishListActions.removeItem({
        id: item.id
      })
    );
  };
  const addedItem = (icon: string) => {
    if (icon === "cart") {
      setCartClasses("cart added");
      setTimeout(() => {
        setCartClasses("cart");
      }, 350);
    } else {
      setHeartClasses("heart added");
      setTimeout(() => {
        setHeartClasses("heart");
      }, 350);
    }
  };
  return (
    <StyledCartPage>
      <div className="wishListHeader">
        <FontAwesomeIcon icon={faHeart} className="headerHeart" />
        <h2>Your List</h2>
        <FontAwesomeIcon icon={faHeart} className="headerHeart" />
      </div>
      {cart.length > 0 &&
        cart.map((item) => {
          return (
            <>
              <StyledListCard image={item.name}>
                <div>
                  <h4>{item.desc}</h4>
                  <p>Individual price: ${item.price}</p>
                  <div className="icons">
                    <span onClick={() => heartClickHandler(item)}>
                      <FontAwesomeIcon
                        icon={faHeart}
                        className={`${heartClasses}`}
                        onClick={() => addedItem("heart")}
                      />
                    </span>
                    <span onClick={() => cartClickHandler(item)}>
                      <FontAwesomeIcon
                        icon={faCartShopping}
                        className={`${cartClasses}`}
                        onClick={() => addedItem("cart")}
                      />
                    </span>
                  </div>
                </div>
              </StyledListCard>
             
            </>
          );
        })}
    </StyledCartPage>
  );
};

export default WishList;
