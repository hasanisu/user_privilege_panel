import React from 'react';

const HasanCart = ({cart}) => {
    let count = 1;
    return (
        <div>
            {
                cart.map(p => <h4
                key={p.id}
                >
                    {p.title}
                </h4>)
            }
        </div>
    );
};

export default HasanCart;