import React from 'react';

const HamzaCart = ({carts}) => {

        
    return (
        <div className='position-sticky sticky-lg-top'>
            <h3 className='mb-5'>Total Privilege Added: {carts.length}</h3>
            <h4 className='mb-5'>Added Listing</h4>
            <div className='text-start'>
            {
                carts.map(p => <li className='cart-1'
                key={p.id}
                >
                    {p.title}
                </li>)
            }
            </div>
        </div>
    );
};

export default HamzaCart;