import { useAppSelector } from "../../hooks/hooks";
import { StyledListCard, StyledOrderPage } from "../styledComponents/styledComponents";

const Orders = () => {
    const prevOrders = useAppSelector(state => state.orders.orders);

    return (
        <StyledOrderPage>
            <h2>Order History</h2>
            {
                prevOrders.length < 1 ? 
                <p>You have made no orders yet.</p> :
                prevOrders.map(order => {
                    return <StyledListCard>
                        <p>Order #{order.id}</p>
                        <p>Total: ${order.total}</p>
                        {order.items.map(item => {
                            return <StyledListCard>
                                <p>{item.name}</p>
                                <p>quantity: {item.quantity}</p>
                            </StyledListCard>
                        })}
                    </StyledListCard>
                })
                
            }
        </StyledOrderPage>
    );
};

export default Orders;