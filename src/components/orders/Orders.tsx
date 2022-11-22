import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { CartItem ,cartActions, orderActions } from "../../redux/store";
import { StyledListCard } from "../styledComponents/styledComponents";

const Orders = () => {
    const prevOrders = useAppSelector(state => state.orders.orders);

    return (
        <div>
            <h2>Order History</h2>
            {
                prevOrders.length < 1 ? 
                <p>You have made no orders yet.</p> :
                prevOrders.map(order => {
                    return <StyledListCard>
                        <p>{order.id}</p>
                        {order.items.map(item => {
                            return <StyledListCard>
                                <p>{item.name}</p>
                                <p>quantity: {item.quantity}</p>
                            </StyledListCard>
                        })}
                    </StyledListCard>
                })
                
            }
        </div>
    );
};

export default Orders;