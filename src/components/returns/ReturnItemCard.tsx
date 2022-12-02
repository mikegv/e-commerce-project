import React from "react";
import { useDispatch } from "react-redux";
import { orderActions } from "../../redux/orders";

interface ReturnItemProps{
    id: number,
    desc: string,
    name: string,
    price: number,
    quantity: number
}

const ReturnItemCard:React.FC<ReturnItemProps> = ({id, desc, name, price, quantity}) => {
    const dispatch = useDispatch();
    return (
      <div></div>
    );
};

export default ReturnItemCard;