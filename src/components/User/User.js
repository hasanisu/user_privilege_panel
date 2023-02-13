import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {name, id, path} = user;
    return (
        <div >
            <Link className='text-decoration-none'  to={path}>{name}</Link>
        </div>
    );
};

export default User;