import React from 'react';

const HamzaData = ({ userData, handleAddToCart }) => {
    return (
        <div className='priv-1 ' >
            <div className='me-5 mt-5 text-white priv-2'>
                <h6>{userData.title} </h6>
            </div>
            <div className='mt-5 priv-3'>
            <button type="button" class="btn btn-secondary fw-bold btn-add"
                    onClick={() => handleAddToCart(userData)}
                >Add To List</button>
            </div>

        </div>
    );
};

export default HamzaData;