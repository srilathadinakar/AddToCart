import React, { useEffect, useState } from 'react';
import Products from './Components/Products';
import NavBar from './Components/NavBar';
import CartDetails from './Components/CartDetails';
import Footer from './Components/Footer';

const App = () => {
  const [Modal,setModal] = useState(false);

  const [products,setProducts] = useState([]);
  const [cart,setCart] = useState([]);

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async()=>{
    try {
      const res = await fetch("https://fakestoreapi.com/products/");
      const result = await res.json();
      setProducts(result);
    } catch (error) {
      console.log(error);     
    }
  }

  return (
    <div>
      <NavBar cartCount={cart.length} openModal={()=>setModal(true)} />
      <Products products={products} setProducts={setProducts} cart={cart} setCart={setCart} />

      {Modal && (
       <CartDetails cart={cart} 
       setCart={setCart} 
       closeModal={() => setModal(false)} />)}
      
        <Footer />
    </div>
  );
};

export default App;