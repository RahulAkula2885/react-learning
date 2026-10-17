import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem,removeItem } from "../store/cart";
import toast from "react-hot-toast";


function ProductSingleRedux({ productName, updateCartName, removeCartName}) {

  
    console.log("------------------------Start---------------------------")
    console.log(productName)
    console.log("------------------------End--------------------------")

    let dispatch = useDispatch();
    let cartItems = useSelector((state) => state.cart.items);

    function addToCart(){
      //updateCartName();
     // dispatch({ type: "cart/increment" });
     dispatch(addItem({ id: productName.id, title: productName.title }));
    toast.success("Item added to cart!");
    }
    function removeInCart(){

         const itemExists = cartItems.some(
            item => item.id === productName.id
        );

        if (!itemExists) {
            toast.error("Item not found in cart!");
            return;
        }
        //dispatch({ type: "cart/decrement" });
      //dispatch(removeItem({ id: productName.id }));
      dispatch(removeItem({ id: productName.id }));
      toast.success("Item removed from cart!");
    }

  return (
    <div className="col-3">
      <div className="card-shadow">
          <img
            src={productName.thumbnail}
            alt={productName.title}
           
            className="card-img"
          />
      </div>

  
    <div className="card-body">

      <h4>{productName.title}</h4>

      <p>{productName.description}</p>

      <div>
       <i className="i bi-currency-rupee"></i> <h5>${productName.price}</h5>
      </div>
            
      <p>Rating: {productName.rating}</p>
    </div>

    <div className="card-footer d-flex gap-2">
      <button className="btn-primary btn" onClick={ a => addToCart(a)}>
          Add to cart
      </button>
       <button className="btn-danger btn" onClick={ a => removeInCart(a)}>
          Remove item
      </button>

    </div>

    </div>
  );
}

export default ProductSingleRedux;