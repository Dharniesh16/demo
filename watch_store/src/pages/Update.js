import React, { useEffect, useState } from "react" 
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";


const Update = () => {
    const [productItems,setProductItems]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:4040/store')
        .then((res)=>res.json())
        .then((data)=>
            setProductItems(data))
    },[])
    const DeleteItems=(id)=>{
        fetch(`http://localhost:4040/watch/${id}`,{
            method:"DELETE"
        })
        .then((res)=>res.json())
        .then((data)=>{
            toast.error("deleted successfully");
            setProductItems((prevProductItems)=>prevProductItems.filter((Item)=>Item._id!==id))
        })
    }
    
  return (
    <div className='tables'>
        <table>
            <tr>
                <th>image</th>
                <th>price</th>  
            </tr>
            {productItems.map((Item)=>(
                <tr key={Item._id}>
                    <td><img src={Item.img} width={"250px"} height={"300px"} alt="not found"/></td>
                    <td>price:{Item.price}</td>
                    <td>
                        <button onClick={()=>DeleteItems(Item._id)}>delete</button>
                        <Link to={`/editts/${Item._id}`}><button>Edit</button></Link>
                    </td>
                </tr>
        
            ))}

        </table>
        <ToastContainer />
    </div>
  )
}

export default Update