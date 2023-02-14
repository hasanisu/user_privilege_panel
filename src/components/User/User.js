import React from 'react';
import './User.css'
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {name, path} = user;
    return (
        <div className='mb-0 p-1 mx-2 mt-2 userNav'>
            <Link className='text-decoration-none fw-bold text-white navUser'  to={path}>{name}</Link>
        </div>
    );
};

export default User;