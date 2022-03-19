 import classes from 'Cart.module.css';
 const Cart=()=> {
     const CartItems= (<ul className={classes['cart-items']}>

         {[{id:'c1',name:'Sushi',amount:2,price:12.99}].map((item)=>(
             <li>
                 {item.name}
             </li>
         ))}
     </ul>);
    return(
        <div>
            <div className={classes.total}>
                <span>
Total Amount
                </span>
                <span>
35.69
                </span>
            </div>
            <div className={classed.actions}>
            <button>Close</button>
            
            <button>Order</button>
            </div>
        </div>
    )
}
export default Cart;