import React from 'react';

const HasanData = ({userData, handleAddToCart}) => {

    return (
        <div>
            <h6>{userData.title} </h6>
              <button onClick={()=>handleAddToCart(userData)} >Add this</button> 
            
        </div>
    );
};

export default HasanData;