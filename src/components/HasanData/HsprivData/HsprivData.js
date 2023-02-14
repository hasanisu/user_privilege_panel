import React from 'react';

const HsprivData = ({pro, handleAddToCart}) => {
    
    return (
        <div className=''>
            
                <button onClick={()=> handleAddToCart(pro)}>{pro.title1}</button>
                <button onClick={()=> handleAddToCart(pro)}>{pro.title2}</button>
                <button onClick={()=> handleAddToCart(pro)}>{pro.title3}</button>
            
        </div>
    );
};

export default HsprivData;