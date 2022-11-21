import { products } from "../products";
import ItemCard from "./itemCard/ItemCard";
import { StyledShopLayout } from "./styledComponents/styledComponents";

const Shop = () => {  
  return (
    <StyledShopLayout>
      {products.map((item) => (
        <ItemCard key={item.id} product={item}></ItemCard>
      ))}
    </StyledShopLayout>
  );
};

export default Shop;
