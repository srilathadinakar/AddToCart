import React from 'react';

const CartDetails = ({cart,setCart,closeModal}) => {

    const remove = (item) => {
        setCart(cart.filter((ele)=>ele.id !== item))
    }

    return (
        <div className='fixed border inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
            <div className='bg-white rounded-md sm:w-1/2 p-5'>
            <h2 className='text-2xl font-bold text-center py-3'>Cart Details</h2>            
            {
                (cart.length > 0) ? (
                    cart.map((item,index)=>{
                        return(
                            <div key={item.id} className='flex justify-between items-center py-5'>
                                <img className='w-1/6 object-contain' src={item.image} alt={item.title} />
                                <h1 className='text-lg font-bold py-2'>{item.title}</h1>
                                <p className='text-center font-semibold text-lg py-3 text-blue-800'>Price - ${item.price}</p>
                                <button className='border border-gray-500 rounded-md p-2 mt-2 font-semibold hover:bg-red-500 hover:text-white hover:border-red-500' onClick={()=>remove(item.id)}>Remove</button>
                            </div>
                        )
                    })

                ) : (
                    <p className='text-lg font-medium pb-3'>Cart Is Empty</p>
                )                
            }
            <button className='bg-blue-500 text-white font-semibold rounded-md p-2 mt-2' onClick={closeModal}>Close</button>
        </div>
        </div>
    );
};

export default CartDetails;