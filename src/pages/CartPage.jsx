import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/action/CartAction";

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cart);
  // const [quantity,setQuantity]=useState(1)
  const dispatch=useDispatch()
  const dicrementIncrementHandler=(id,qty)=>{
    dispatch(addToCart(id,qty))
  }

  return (
    <>
    {cartItems && cartItems.length>0?(

    <table className="table table-bordered table-hover table-striped">
      <thead className="table-dark">
        <tr>
          <th className="col-1">Image</th>
          <th>Name</th>
          <th>Price</th>
          <th className="col-1">Qty</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map(item=>(
          <tr>
          <td>
            <img className="img-fluid" src={item.image} alt="" />
          </td>
          <td>{item.name}</td>
          <td>{item.discount && item.discount>0 ? 
          <>
          <del>{item.price}</del>
          <span>{item.discount}</span> $
          </>:<span>{item.price} $</span> 
          }
          </td>
          <td>
            <input onChange={(e)=>dicrementIncrementHandler(item.id,Number(e.target.value))} type="number"
             value={item.qty} min={1} />
          </td>
          <td>{
              <span>{item.discount && item.discount>0 ?item.discount *item.qty:item.price*item.qty} Azn</span>
            }
            
            </td>
        </tr>
        ))}
        
      </tbody>
    </table>
    ):<p className="alert alert-danger">Cart is empty!</p>}
    </>
  );
};

export default CartPage;
