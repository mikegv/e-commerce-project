import React from "react";
import { StyledCard } from "../styledComponents/styledComponents";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
interface Product {
  id: number;
  name: string;
  desc: string;
  price: number;
}
const ItemCard: React.FC<{
  product: Product;
}> = ({ product }) => {
  return (
    <StyledCard>
      <h4>{product.name}</h4>
      <p>{product.desc}</p>
      <div>
        <span><FontAwesomeIcon icon={faHeart} className='heart' />
</span>
        <p>${product.price}</p>
        <span><FontAwesomeIcon icon={faCartShopping} className='cart' /></span>
      </div>
    </StyledCard>
  );
};

export default ItemCard;
