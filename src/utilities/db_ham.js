// use local storage to manage cart data
const addToDbHam = id =>{
    let privilegeCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('privilege-cart');
    if(storedCart){
        privilegeCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = privilegeCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        privilegeCart[id] = newQuantity;
    }
    else{
        privilegeCart[id] = 1;
    }
    localStorage.setItem('privilege-cart', JSON.stringify(privilegeCart));
}

const getStoredCartHam = () =>{
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('privilege-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }

    return shoppingCart;
}

const removeFromDbHam = id =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCartHam = () =>{
    localStorage.removeItem('shopping-cart');
};

export {
    addToDbHam,
    getStoredCartHam,  
    removeFromDbHam,
    deleteShoppingCartHam
}