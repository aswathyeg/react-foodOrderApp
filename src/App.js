import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [showCart,setShowCart]=useState(false);
  const handleShowCart=()=>{
    setShowCart(true);

  }
  const handleHideCart=()=>{
    setShowCart(false);

  }

  return (
   <CartProvider>
     {showCart && <Cart onClose = {handleHideCart}/>}
     
     <Header handleShowCart={handleShowCart}/>
     <main>
       <Meals/>
     </main>
   </CartProvider>
  );
}

export default App;
