import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { orderActions } from "../../redux/orders";
import ItemCard from "../itemCard/ItemCard";
import { StyledListCard } from "../styledComponents/styledComponents";

interface Quantity {
  id: number;
  quantity: number;
}

const Return: React.FC = (props) => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const orders = useAppSelector((state) => state.orders.orders);
  const nav = useNavigate();
  const [quantities, setQuantities] = useState<Quantity[]>([]);

  const order = orders.filter((order) => order.id === +params.id!);
  console.log('order ', order)
  const items = order[0]?.items;

  if (order.length === 0) {
    nav("/");
  }

  useEffect(() => {
    let temp: Quantity[] = [];

    items?.forEach((item) =>
      temp.push({ id: item.id, quantity: item.quantity })
    );

    setQuantities(temp);
  }, [items]);

  console.log(quantities);

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let update = quantities.map((item, i) => {
      if (i === index) {
        return { ...item, quantity: +e.target.value };
      } else {
        return item;
      }
    });
    setQuantities(update);
  };

  const returnItems = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(orderActions.returnItem({orderId: +params.id!, quantities}))
    console.log('component ', quantities)
  }


  return (
    <div style={{ flexGrow: "1" }}>
      {quantities.length > 0 &&
      <form onSubmit={returnItems} style={{textAlign:'center'}}>
        {items?.map((item, index) => {
          return (
            <div key={item.id} style={{textAlign:'center'}}>
            <StyledListCard image={item.name} />
            <label>
              {item.desc}    
              <input
                type='number'
                value={quantities[index].quantity}
                onChange={(e) => changeHandler(e, index)}
                min='0'
                max={items[index].quantity}
              />
            </label>
            </div>
          );
        })}
        <button>Confirm Return</button>
        </form>
        }

    </div>
  );
};
export default Return;
