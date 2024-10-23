    import React from 'react'
    import './header.css'
    import logo from '../Images/Logo_header.png'
    import { Link } from 'react-router-dom'

    const Header = () => {
    return (
        <>
        <section className='section1'>
            <div className='sect1_row1'>
                <div className='col-xl-2 col-lg-3 col-md-4 logo_column'>
                    <img src={logo} alt='watch' width={200}></img>
                </div>
                <div className='col-xl-7 col-lg-6 col-md-4 navigation_col'>
                    <div className='nav'>
                        <ul>
                            <li>HOME</li>
                            <li>SHOP</li>
                            <li>ABOUT US</li>
                            <li>PAGES</li>
                            <li><Link to='/upload'>Upload</Link></li>
                            <li><Link to='/cart'>CART</Link></li>
                            <li><Link to='/editts'>edit</Link></li>
                            <li className='buynow'><Link to='/update'>Update</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='col-xl-3 col-lg-3 col-md-4  icons_column'>
                    <div className='logo_nav'>
                        <ul>
                            <li><i class="bi bi-search"></i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  class="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
    </svg></li>
                            <li><i class="bi bi-heart-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
    </svg></li>
                            <li><i class="bi bi-person-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
    </svg></li>
                            <li><i class="bi bi-bag-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"/>
    </svg></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
    }

    export default Header