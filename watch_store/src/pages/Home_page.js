import React, { useState } from 'react';  
import './home_page.css' 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import './Types'
import Type from './Types';
import { addToCart, deleteFromCart } from '../store/cartslice/Cartslice';
import { useDispatch, useSelector } from 'react-redux';
import { Bounce,ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import owl1 from '../Images/owl1.png'
import owl2 from '../Images/owl2.png'
import owl3 from '../Images/owl3.png'
import owl4 from '../Images/owl4.png'
import owl5 from '../Images/owl5.png'
import owl6 from '../Images/owl6.png'
import f1 from '../Images/pills1.png'
import f2 from '../Images/pills2.png'
import f3 from '../Images/featured3.png'
import f4 from '../Images/featured4.png'
import f5 from '../Images/featured5.png'
import f6 from '../Images/featured6.png'
import f7 from '../Images/featured7.png'
import f8 from '../Images/featured8.png'
import bs1 from '../Images/bestselling1.png'
import bs2 from '../Images/bestselling2.png'
import bs3 from '../Images/bestselling3.png'
import bs4 from '../Images/bestselling4.png'
import bs5 from '../Images/bestselling5.png'
import bs6 from '../Images/bestselling6.png'
import bs7 from '../Images/bestselling7.png'
import bs8 from '../Images/bestselling8.png'
import na1 from '../Images/newarr1.png'
import na2 from '../Images/newarr2.png'
import na3 from '../Images/newarr3.png'
import na4 from '../Images/newarr4.png'
import na5 from '../Images/newarr5.png'
import na6 from '../Images/newarr6.png'
import na7 from '../Images/newarr7.png'
import na8 from '../Images/newarr8.png'
import os1 from '../Images/onsale1.png'
import os2 from '../Images/onsale2.png'
import os3 from '../Images/onsale3.png'
import os4 from '../Images/onsale4.png'
import os5 from '../Images/onsale5.png'
import os6 from '../Images/onsale6.png'
import os7 from '../Images/onsale7.png'
import os8 from '../Images/onsale8.png'
const Home_page = () => {
  const [activeTab, setActiveTab] = useState('tab1'); 
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
      const addItem = () =>
        toast.success("Item added Successfully",{
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
      const cartProducts = useSelector((state)=>state.cart.cartItems) 
      const dispatch = useDispatch();
      const addCart=(item)=>{
        dispatch(addToCart(item));
        addItem();
      };
      const deleteCart=(item)=>{
        dispatch(deleteFromCart(item));
        removeItem();
      }

  return (
    <>
    <section className='section2'>
        <div className='sect2_row1'>
            <div className='col-lg-8 sect2_col1'>
                <div className='sect2_row1_backimage1'>
                    <div className='sect1_heading_col1'>
                        <h2>Latest Watch Collection</h2>
                        <br/>
                        <p>Raymond Weil’s emblematic collection, nabucco,<br/>makes a strong come back this year.</p>
                        <button>EXPLORE NOW</button>
                        <div className='sw'>
                            {/* below is the js swiper */}
                        <Swiper
                          spaceBetween={30}   
                          pagination={{ 
                            clickable: true,
                          }}
                          modules={[Pagination]}
                          className="mySwiper"
                        >
                          <SwiperSlide>
                            <div className='swiper_row1'>
                                <div className='col-lg-6 swiper_row1_col1'>
                                    <div className='cont'>
                                        <p>BeatXp</p>
                                        <h2>Noise Pulse Smart<br/>Watch</h2>
                                        <p>Starting At $600.00</p>
                                        <button>SHOP NOW</button>
                                    </div>
                                </div>
                                <div className='col-lg-6 swiper_row1_col2'>
                                    <div className='swiper1_image'>
                                    </div>
                                </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                          <div className='swiper2_row1'>
                                <div className='col-lg-6 swiper2_row1_col1'>
                                    <div className='swiper2_cont'>
                                        <p>Noise</p>
                                        <h2>Fire-Bolt Phoenix<br/>Pro</h2>
                                        <p>Starting At $900.00</p>
                                        <button>SHOP NOW</button>
                                    </div>
                                </div>
                                <div className='col-lg-6 swiper2_row1_col2'>
                                    <div className='swiper2_image'>
                                    </div>
                                </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                          <div className='swiper3_row1'>
                                <div className='col-lg-6 swiper3_row1_col1'>
                                    <div className='swiper3_cont'>
                                        <p>Boat</p>
                                        <h2>beatXP Marv Neo<br/>Watch</h2>
                                        <p>Starting At $1500.00</p>
                                        <button>SHOP NOW</button>
                                    </div>
                                </div>
                                <div className='col-lg-6 swiper3_row1_col2'>
                                    <div className='swiper3_image'>
                                    </div>
                                </div>
                            </div>
                          </SwiperSlide>
                        </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 sect2_col2'>
                <div className='sect2_row1_backimage2'>
                </div>
            </div>
        </div>
    </section>
    <section className='owl-section'>
      <div className='owl_heading'>
        <h1>Our Categories</h1>
        <p>See Our Best Latest Collection</p>
      </div>
      <OwlCarousel
        className="owl-theme"
        loop
        margin={10}
        nav
        items={6}  // You can customize the number of items visible
        autoplay={true}
        autoplayTimeout={3000}
        dots={true}
      > 
        {/* Add your 15 images below */}
        <div className="item owl1_img">
          <div className='owl1_border'></div>
          <img src={owl1} alt="Image 1" height={"200px"}/>
          </div>
        <div className="item">
          <div className='owl1_border'></div>
          <img src={owl2} alt="Image 2" height={"200px"}/>
          </div>
        <div className="item">
           <div className='owl1_border'></div>
          <img src={owl3} alt="Image 3" height={"200px"}/>
        </div>
        <div className="item">
          <div className='owl1_border'></div>
          <img src={owl4} alt="Image 4" height={"200px"}/>
        </div>
        <div className="item">
          <div className='owl1_border'></div>
          <img src={owl5} alt="Image 5" height={"200px"}/>
        </div>
        <div className="item">
          <div className='owl1_border'></div>
          <img src={owl6} alt="Image 6" height={"200px"}/>
        </div>
        
      </OwlCarousel>
    </section>
    <section className='section4'>
    {/* <section className='section4'> */}
      <div className='sect4_heading'>
        <h1>Universal Timekeepers of the world</h1>
        <p>Latest Watches You Can't Resist!</p>
      </div>
      
      {/* <div className="container mt-5 button_container">
        <div className='but_cont'>
        <ul className="nav nav-pills">
          <li className="nav-item but">
            <button
              className={`nav-link ${activeTab === 'tab1' ? 'active' : ''}`}
              onClick={() => setActiveTab('tab1')}
            >
              FEATURED
            </button>
          </li>
          <li className="nav-item but">
            <button
              className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`}
              onClick={() => setActiveTab('tab2')}
            >
              BEST SELLING
            </button>
          </li>
          <li className="nav-item but">
            <button
              className={`nav-link ${activeTab === 'tab3' ? 'active' : ''}`}
              onClick={() => setActiveTab('tab3')}
            >
              NEW ARRIVALS
            </button>
          </li>
          <li className="nav-item but">
            <button
              className={`nav-link ${activeTab === 'tab4' ? 'active' : ''}`}
              onClick={() => setActiveTab('tab4')}
            >
              ON SALE
            </button>
          </li>
        </ul>
        </div>
        </div> */}
        <div>
        <ToastContainer/>
        <div className='conatiner top3'>
          <div className='row'>
              {Type.map((item)=>(
            <div className='col-lg-3'>
            <div class="card" key={item.id}>
    <img src={item.image} class="card-img-top" alt="..." width={"250px"} height={"300px"}/>
    <div class="card-body">
      <p>price:{item.price}</p>
      {cartProducts.find(items=>items.id === item.id)?
      <button className='btn btn-danger' onClick={()=>deleteCart(item)}>Remove from Cart</button>:
      <button className='btn btn-success' onClick={()=>addCart(item)}>Add to Cart</button>
      }
    </div>
  </div>
            </div>))} 
          </div>
        </div>
        
      </div>
       </section>  
       </>
  )
}

export default Home_page