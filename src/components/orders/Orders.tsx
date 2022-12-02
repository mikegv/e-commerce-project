import { useAppSelector } from "../../hooks/hooks";
import { StyledListCard, StyledOrderPage, StyledReceipt } from "../styledComponents/styledComponents";
import { Link } from "react-router-dom";

const Orders = () => {
    const prevOrders = useAppSelector(state => state.orders.orders);

    return (
        <StyledOrderPage>
            <h2>Order History</h2>
            {
                prevOrders.length < 1 ? 
                <p>You have made no orders yet.</p> :
                prevOrders.map(order => {
                    return <StyledReceipt key={order.id}>
                        <p>Order #{order.id}</p>
                        <p>Total: ${order.total}</p>
                        {order.items.map(item => {
                            return <StyledListCard image={item.name}>
                                <p>{item.desc}</p>
                                <p>quantity: {item.quantity}</p>
                            </StyledListCard>
                        })}
                        <Link to={`/returns/${order.id}`}>Make a return</Link>
                    </StyledReceipt>
                })
                
            }
        </StyledOrderPage>
    );
};

export default Orders;