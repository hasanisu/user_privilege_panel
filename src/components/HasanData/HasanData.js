import React from "react";
import "./HasanData.css";
import HsprivData from "./HsprivData/HsprivData";

const HasanData = ({ userData, handleAddToCart }) => {
  const { title, hello } = userData;
const data = userData.hello;
console.log('got', data)
let massage;
if(userData.child3){
    massage = <div>
        <p>c.{userData.child3}</p>
        <button type="button" class="btn btn-secondary fw-bold btn-add"
                    onClick={() => handleAddToCart(userData)}>Add To List
            </button>
            {/* <input type="checkbox" name="" id="" onClick={() => handleAddToCart(userData)} /> */}
    </div>
}

  return (
    <div className="priv-1 ">
      <div className="text-white ">
        <h6>{title} </h6>
        
      </div>

      {/* <div className="mt-5 priv-3">

        <div>
            <p>a. {userData?.child1}</p>
            <button type="button" class="btn btn-secondary fw-bold btn-add"
                    onClick={() => handleAddToCart(userData)}>Add To List
            </button>
        </div>

        <div>
            <p>b. {userData?.child2}</p>
            <button type="button" class="btn btn-secondary fw-bold btn-add"
                    onClick={() => handleAddToCart(userData)}>Add To List
            </button>
        </div>

        <div>
            {massage}
        </div>
          
            
           
        

      </div> */}

      {
        data.map(p => <HsprivData
        key={p.id}
        pro={p}
        handleAddToCart={handleAddToCart}
        ></HsprivData>)
        
      }
 


    </div>
  );
};

export default HasanData;
