import React from "react";
import { StyledCard } from "../styledComponents/styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/cart";
import { useAppSelector } from "../../hooks/hooks";
import { Link } from "react-router-dom";

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
  return (
    <StyledCard>
      <h4>{name}</h4>
      <p>{desc}</p>
      <p>${price}</p>
      <div>
        {loggedIn && (
          <>
            <span>
              <FontAwesomeIcon icon={faHeart} className="heart" />
            </span>
            <span
              onClick={() => dispatch(cartActions.addItem({ id, name, price }))}
            >
              <FontAwesomeIcon icon={faCartShopping} className="cart" />
            </span>
          </>
        )}

        {!loggedIn && (
          <>
            <Link to="/">
              <FontAwesomeIcon icon={faHeart} className="heart" />
            </Link>
            <Link to="/
            ">
              <FontAwesomeIcon icon={faCartShopping} className="cart" />
            </Link>
          </>
        )}
      </div>
    </StyledCard>
  );
};

export default ItemCard;
