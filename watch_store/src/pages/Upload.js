import React from 'react'
import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css'



const Upload = () => {
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form =event.target;
        const img=form.img.value;
        const price=form.price.value;
        const quantity =1;

        if( img==="" || price==="" || quantity==="")                    
        {   
            // <ToastContainer />
            toast.warn("fill the required fields")
            return;
        }
        const watchObj ={img,price,quantity};
        console.log(watchObj);

        fetch('http://localhost:4040/upload',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(watchObj)
        }).then((res)=>res.json())
        .then((data)=>{
            // <ToastContainer />
            toast.success("data added successfully");
            form.reset();
            window.location.href= '/update';
        })
      
        
    }
  return (
    <div className='formss'>
        <form onSubmit={handleSubmit}>
            <label>image :</label>
            <input type='text' name='img'></input>
            {/* why we are giving name here...name works but value does not */}
            <br/>
            <label>price</label>
            <input type='number' name='price'></input>
            <br/>
            <button>upload</button>
        </form>
        {/* <button onClick={handleTestToast}>Test Toast</button> Test button */}
         <ToastContainer />
    </div>
  )
}

export default Upload

