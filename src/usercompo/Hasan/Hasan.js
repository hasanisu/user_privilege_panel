import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import HasanData from "../../components/HasanData/HasanData";
import { addToDb, getStoredCart } from "../../utilities/db";
import HasanCart from "../HasanCart/HasanCart";

const Hasan = () => {
  const usersData = useLoaderData();
  const [cart, setCart] = useState([]);
  


    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart= [];
        for(const id in storedCart){
            const addedCart = usersData.find(userData => userData.id === id);
            if(addedCart){
                savedCart.push(addedCart)
            }
        }
        setCart(savedCart)
    }, [usersData])

  const handleAddToCart = (userdata)=> {
    const isExits = cart.find(data => data.id === userdata.id);
    if(isExits){
        alert('already Added')
    }
    else{
        const newCart = [...cart, userdata];
        setCart(newCart);
        

    }
    addToDb(userdata.id)
    
  }



  return (
    <div className="container text-center">
      <h2>Hi ! this is Hasan From Bangladesh </h2>
      <div class="row">
        <div className="col-md-9">
          {usersData.map((userData) => (
            <HasanData 
            key={userData.id} 
            userData={userData}
            handleAddToCart={handleAddToCart}
            ></HasanData>
          ))}
        </div>

        <div className="col-md-3 bg-danger h-full">
          <h2>privilege Cart Added List : {cart.length}</h2>
          <HasanCart cart= {cart}></HasanCart>
        </div>
      </div>
    </div>
  );
};

export default Hasan;
