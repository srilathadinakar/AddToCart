import React, { useState } from 'react';

const Products = ({products, cart, setCart}) => {

   const [status,setStatus] = useState(true);

     const addtocart = (item) =>{
        if(cart.find(ele=>ele.id === item.id)){
            alert("Item already added")
        }
        else{
            setCart([...cart,item])
        }    
    }

    return (
        <>
            <div className='max-w-4xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-lg my-16 mx-3 lg:mx-0 '>
            {
                products.map((item, index)=>{
                return(
                    <>                   
                    <div class="border p-4 flex flex-col rounded-md shadow-md items-center text-center">
                    <div key={item.id}>                
                        <div><img className='w-3/4 h-36 mx-auto' src={item.image} alt={item.title} /></div>
                        <h1 className='text-lg font-bold py-2'>{item.title}</h1>
                        <p className='text-center font-semibold text-lg py-3 text-blue-800'>Price - ${item.price}</p>
                        <button className='border border-gray-500 rounded-md p-2 mt-2 font-semibold hover:bg-green-500 hover:text-white hover:border-green-500' onClick={()=>{addtocart(item)} }>Add To Cart</button>                        
                        </div>
                    </div>                    
                    </>
                )
                })
            }
            </div>
           </div> 
        </>
    );
};

export default Products;