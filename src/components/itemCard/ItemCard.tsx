import React from "react";
import { StyledCard } from "../styledComponents/styledComponents";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/store";

interface Product {
  id: number;
  name: string;
  desc: string;
  price: number;
}
const ItemCard: React.FC<{
  product: Product
}> = ({ product: {id, name, desc, price} }) => {

  const dispatch = useDispatch();
  return (
    <StyledCard>
      <h4>{name}</h4>
      <p>{desc}</p>
      <div>
        <span><FontAwesomeIcon icon={faHeart} className='heart' />
</span>
        <p>${price}</p>
        <span onClick={()=>dispatch(cartActions.addItem({id, name, price }))}><FontAwesomeIcon icon={faCartShopping} className='cart' /></span>
      </div>
    </StyledCard>
  );
};

export default ItemCard;
