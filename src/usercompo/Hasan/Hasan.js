import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import HasanData from "../../components/HasanData/HasanData";
import { addToDb, getStoredCart } from "../../utilities/db";
import HasanCart from "../HasanCart/HasanCart";
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Hasan.css'



const Hasan = () => {
  const usersData = useLoaderData();
  const [cart, setCart] = useState([]);
  
    useEffect(()=>{
        const storedCart = getStoredCart();
        console.log('id', storedCart)
        const savedCart= [];
        for(const hello in storedCart){
            const addedCart = usersData.find(userData => userData.hello.id === hello);
            if(addedCart){
                savedCart.push(addedCart)
            }
        }
        setCart(savedCart)
    }, [usersData])

  const handleAddToCart = (userdata)=> {
    const isExits = cart.find(data => data.id === userdata.id);
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
        const newCart = [...cart, userdata];
        setCart(newCart);
        toast("Added to the List") 
    }
    addToDb(userdata.id)
    
  }



  return (
    <div className="text-center bodyUser">
      <h2 className="my-0 w-75 mx-auto rounded user-1 pt-3">USER NAME: <span className="userName">IMAM MD HASAN</span> </h2>
      <div className="row mx-0 p-4 ">
        <div className="col-md-8 text border rounded userBody1 ">
          <h3 className="d-flex justify-content-end position-sticky top-0 pe-2 pt-4 text-dnager"> <span className="pri">PRIVILEGE </span>  LIST</h3>
          {usersData.map((userData) => (
            <HasanData 
            key={userData.id} 
            userData={userData}
            handleAddToCart={handleAddToCart}
            ></HasanData>
          ))}
        </div>

        <div className="col-md-4 w-25 border rounded cartBody">
          
          <HasanCart cart= {cart}></HasanCart>
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

export default Hasan;
