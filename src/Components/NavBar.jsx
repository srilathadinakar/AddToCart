import React from 'react';

const NavBar = ({cartCount,openModal}) => {
    return (
        <>
        <div className='bg-gray-500 '>
            <nav className='max-w-4xl mx-auto text-white flex px-5 lg:px-0 py-5 justify-between items-center'>
                <div className='text-2xl font-bold'><h1><a href='#'>Mystore</a></h1></div>
                <div className='text-2xl font-bold'><button onClick={openModal}>Cart-{cartCount} </button></div>
            </nav>  
        </div>   
        </>
    );
};

export default NavBar;