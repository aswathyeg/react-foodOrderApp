import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
    const cartCtx=useContext(CartContext);
    const CartItems = (<ul className={classes['cart-items']}>

        {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
            <li>
                {item.name}
            </li>
        ))}
    </ul>);
    return (
        <Modal onClose={props.onClose}>
            {CartItems}
            <div className={classes.total}>
                <span>Total Amount</span>

                <span>35.69</span>

            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>

                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}
export default Cart;