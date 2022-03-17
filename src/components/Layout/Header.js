 import { Fragment } from 'react';
import classes from './Header.module.css';
import meals from '../../assests/meals.jpg'
 const Header= props =>{
     return(
         <Fragment>
             <header className={classes.header}>
                 <h1> React Meals </h1>
                  <button>Cart</button>  
            </header>
         <div className={classes['main-image']}>
<img src={meals}/>
         </div>
         </Fragment>
     )

}
export default Header;