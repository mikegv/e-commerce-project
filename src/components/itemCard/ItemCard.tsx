import React from "react";
import { StyledCard } from "../styledComponents/styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/cart";
import { useAppSelector } from "../../hooks/hooks";
import { Link } from "react-router-dom";
import { useState } from "react";
import { wishListActions } from "../../redux/wish";

interface Product {
  id: number;
  name: string;
  desc: string;
  price: number;
}
const ItemCard: React.FC<{
  product: Product;
}> = ({ product: { id, name, desc, price } }) => {
  const loggedIn = useAppSelector((state) => state.auth.loggedIn);
  const dispatch = useDispatch();

  let wishList = useAppSelector((state) => state.wishList.items);
  
  console.log(wishList);
  let ids = wishList.map((item) => item.id);
  console.log(ids)

  const [heartClasses, setHeartClasses] = useState("heart");
  const [cartClasses, setCartClasses] = useState("cart");
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
    <StyledCard >
      <h4>{name}</h4>
      <p>{desc}</p>
      <p>${price}</p>
      <div>
        {loggedIn && (
          <>
            <span 
                onClick={() =>
                dispatch(wishListActions.addItem({ id, name, price }))
              }
            >
              <FontAwesomeIcon
                icon={faHeart}
                className={`${heartClasses}`}
                onClick={() => addedItem("heart")
                }
              />
            </span>
            <span
              onClick={() => dispatch(cartActions.addItem({ id, name, price }))}
            >
              <FontAwesomeIcon
                icon={faCartShopping}
                className={`${cartClasses}`}
                onClick={() => addedItem("cart")}
              />
            </span>
          </>
        )}

        {!loggedIn && (
          <>
            <Link to="/">
              <FontAwesomeIcon icon={faHeart} className="heart" />
            </Link>
            <Link
              to="/
            "
            >
              <FontAwesomeIcon icon={faCartShopping} className="cart" />
            </Link>
          </>
        )}
      </div>
    </StyledCard>
  );
};

export default ItemCard;
