import logo from './logo.svg';
import './App.css';
import { Fragment, useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [showCart,setShowCart]=useState(false);
  const handleShowCart=()=>{
    setShowCart(true);

  }
  const handleHideCart=()=>{
    setShowCart(false);

  }

  return (
   <Fragment>
     {showCart && <Cart onClose = {handleHideCart}/>}
     
     <Header handleShowCart={handleShowCart}/>
     <main>
       <Meals/>
     </main>
   </Fragment>
  );
}

export default App;
