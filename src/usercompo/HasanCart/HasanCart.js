import React from 'react';
import './HasanCart.css'

const HasanCart = ({cart}) => {
    
   

    return (
        <div className='position-sticky sticky-lg-top'>
            <h3 className='mb-5'>Total Privilege Added: {cart.length}</h3>
            <h4 className='mb-5'>Added Listing</h4>
            <div className='text-start'>
            {
                cart.map(p => <li className='cart-1'
                key={p.id}
                >
                    {p.title1}
                    {p.title2}
                    {p.title3}
                </li>)
            }
            </div>
        </div>
    );
};

export default HasanCart;