import React from "react";
import { StyledCard } from "../styledComponents/styledComponents";

interface Product {
  id: number,
  name: string,
  desc: string,
  price: number
}
const ItemCard: React.FC<{
  product: Product;
}> = ({ product }) => {
  return (
    <StyledCard>
      <h4>{product.name}</h4>
      <p>{product.desc}</p>
      <p>${product.price}</p>
    </StyledCard>
  );
};

export default ItemCard;
