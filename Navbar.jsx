import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
// import styled from 'styled-components'
import './NavbarFooter.css';
import Login from './Log/Login'
// import Login from './Components1/Log/login'



function Navbar() {
    const [menue, setMenue] = useState(false)
    const name=localStorage.getItem("activeuser")
    // const name=1
    console.log(menue)
    
    return (
        < div className='navbar'>


                <div className="NavbarFirstChild">

                    <Link to="/" ><img className='NavbarImage' src="https://tse2.mm.bing.net/th?id=OIP.JSGmiGzRmDowBYk0KLyJAwHaCO&pid=Api&P=0&w=499&h=149" alt="" /></Link>
                    <Link className = "gallery" to = "/SlidersImages">Gallery</Link>
                    {/* <Link className = "ViewDealNavbar" to = "/ViewDealNavbar">Deal</Link> */}

                </div>
                <div className="NavbarSecondChild">
                    <div> {name === null ? <Link to="/Login" >Log in</Link> : <Link to="/Login/accountmain" >{name}</Link>}</div>
                    <div onMouseEnter={() => setMenue(true)} onMouseLeave={() => setMenue(false)}><p>Menue </p></div>
                    {menue ?( <div className="navbarDropdownBox" onMouseEnter={() => setMenue(true)} onMouseLeave={() => setMenue(false)}>
            <a href=""><p>Recently View</p></a>
            <a href=""> <p>Booking View</p></a>
            <a href=""><p>Help and Support</p></a>
            </div>) : ''}
                    <div>
                        <select name="" id="" style={{width:'5vw',border:'none'}}>
                            <option>EUR</option>
                            <option>GBP</option>
                            <option>USD</option>
                            <option>AED</option>
                            <option>ARS</option>
                            <option>AUD</option>
                            <option>AZN</option>
                            <option>BGN</option>
                            <option>BHD</option>
                            <option>BBR</option>
                            <option>CAD</option>
                            <option>AHF</option>
                            <option>CLP</option>
                            <option>ANY</option>
                            <option>COP</option>
                            <option>CZK</option>
                            <option>COP</option>
                            <option>CZK</option>
                            <option>DKK</option>
                            <option>CZK</option>
                            <option>DZD</option>
                            <option>EGP</option>
                            <option>EUR</option>
                            <option>HKD</option>
                        </select>
                    </div>

                </div>
        </ div>
    )
}
export { Navbar }