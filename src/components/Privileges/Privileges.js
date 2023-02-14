import React from "react";
import Lottie from "lottie-react";
import animation from '../../assets/animation.json';

const Privileges = () => {
    
    return (
        <div className='d-flex align-items-center container-fluid justify-content-between'>
            <div className="ms-5 ps-5 ">
              <h2 className="fs-2 fw-bold">WELCOME TO </h2>
                <h4>JAPAN REMIT FINANCE PRIVILEGES SITE</h4>
            </div>
            <div >
            <Lottie className="w-75  h-75" animationData={animation} loop={true} />;
            </div>
        </div>
    );
};

export default Privileges;