import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import HasanData from "../../components/HasanData/HasanData";
import { addToDbHam, getStoredCartHam } from "../../utilities/db_ham";
import HasanCart from "../HasanCart/HasanCart";
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HamzaCart from "../HamzaCart/HamzaCart";
import HamzaData from "../../components/HamzaData/HamzaData";



const Hamza = () => {
  const usersData = useLoaderData();
  const [carts, setCarts] = useState([]);
  


    useEffect(()=>{
        const storedCart = getStoredCartHam();
        const savedCart= [];
        for(const id in storedCart){
            const addedCart = usersData.find(userData => userData.id === id);
            if(addedCart){
                savedCart.push(addedCart)
            }
        }
        setCarts(savedCart)
    }, [usersData])

  const handleAddToCarts = (userdata)=> {
    const isExits = carts.find(data => data.id === userdata.id);
    if(isExits){
      Swal.fire({
        title: 'Custom animation with Animate.css',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    }
    else{
        const newCart = [...carts, userdata];
        setCarts(newCart);
        toast("Added to the List") 
    }
    addToDbHam(userdata.id)
    
  }



  return (
    <div className="text-center bodyUser">
      <h2 className="my-0 w-75 mx-auto rounded user-1 pt-3">USER NAME:<span className="userName"> HANIF HAMZA</span></h2>
      <div className="row mx-0 p-4">
        <div className="col-md-8 text border rounded userBody1">
        <h3 className="d-flex justify-content-end position-sticky top-0 pe-2 pt-4 text-dnager"> <span className="pri">PRIVILEGE </span>  LIST</h3>
          {usersData.map((userData) => (
            <HamzaData
            key={userData.id} 
            userData={userData}
            handleAddToCart={handleAddToCarts}
            ></HamzaData>
          ))}
        </div>

        <div className="col-md-4 w-25 border rounded cartBody">
          <HamzaCart carts= {carts}></HamzaCart>
        </div>
      </div>
      <ToastContainer 
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
    </div>
  );
};

export default Hamza;