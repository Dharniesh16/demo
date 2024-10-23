import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { deleteFromCart, updateQuantity } from '../store/cartslice/Cartslice';
import {Bounce, ToastContainer, toast} from 'react-toastify';
import "react-toastify/ReactToastify.css"
// import './cart.css'
import { Link } from 'react-router-dom';
import './Types'

const Cart = () => {
    const removeItem = () =>
        toast.warning("Item Removed Successfully",{
            position:"top-center",
            autoClose: 1500,
            hideProgressBar: true,
            pauseOnHover: true,
            closeOnClick:true,
            draggable: true,
            progress: undefined,
            theme: "colored", 
            transition: Bounce,
        });
    const cartProducts = useSelector((state)=>state.cart.cartItems);
    const dispatch = useDispatch();

    const deleteCart = (item)=>{
        dispatch(deleteFromCart(item));
        removeItem();
    };
    const incrementCart = (id,quantity) =>{
        dispatch(updateQuantity({id,quantity: quantity+1}))
    };
    const decrementCart = (id,quantity)=>{
        if(quantity>1){
         dispatch(updateQuantity({id,quantity: quantity - 1}))
        }
    }
    const totalQuantity = cartProducts.reduce((total,item)=>total+item.quantity,0);
    // const totalAmount = cartProducts.reduce((total,item)=>total+item.price*item.quantity,0);
    // const totalPrice = totalAmount.toFixed(2)
    console.log(cartProducts)
  return (
    <>
    <ToastContainer/>
 {cartProducts.map((item) => (
    <div className="card md-3" key={item.id}>
      <div className="row g-0">
        <div className="col-md-4 im">
          <img src={item.image} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <p className="card-text">Price: {item.price}</p>
            <button className="btn btn-primary ml-5">
              <button
                className="btn btn-warning ye"
                onClick={() => decrementCart(item.id, item.quantity)}
              >     
                -
              </button>
              {item.quantity}
              <button
                className="btn btn-warning ye"
                onClick={() => incrementCart(item.id, item.quantity)}
              >
                +
              </button>
            </button>
            <button
              className="btn btn-warning"
              onClick={() => deleteCart(item)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  ))}
</>
)}
export default Cart
