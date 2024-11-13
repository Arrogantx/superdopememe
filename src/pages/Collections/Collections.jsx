// Collections.js
import React, { useState } from 'react';
import "./collections.scss";
import StoreBg from '../../components/StoreBg/StoreBg';
import BottomBar from '../../components/BottomBar/BottomBar';
import StoreCarousel from '../../components/StoreCarousel/StoreCarousel';

const Collections = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
   <section className='collections'>
    <div className="wrapper">
        <StoreBg />
        <StoreCarousel setCartItems={setCartItems} />
        <BottomBar cartItems={cartItems} />
    </div>
   </section>
  );
};

export default Collections;
