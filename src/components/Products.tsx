import { products } from "../products";
import ItemCard from "./itemCard/ItemCard";
import { StyledShopLayout } from "./styledComponents/styledComponents";
import React, { useState } from "react";

const Products: React.FC = () => {

  let limit = 3;
  const [start, setStart] = useState(0)
  const [page, setPage] = useState(1)
  let results = products.slice(start, limit * page);

  const paginate = (s: string) => {
    if(s === 'next'){
      setPage(prev => prev += 1)
      setStart(prev => prev += 3)
      console.log('start in ', start)
    }else{
      if(page > 1){
        setPage(prev => prev -= 1);
        setStart(prev => prev -= 3);
      }
    }
  }
  
  return (
    <StyledShopLayout>
      {results.map((item) => (
        <ItemCard key={item.itemId} product={item}></ItemCard>
      ))}
      <div className="pages">
        <span style={{ cursor: "pointer" }} onClick={() => paginate("prev")}>
          &lt;{" "}
        </span>
        {page}
        <span style={{ cursor: "pointer" }} onClick={() => paginate("next")}>
          {" "}
          &gt;
        </span>
      </div>
    </StyledShopLayout>
  );
};

export default Products;
