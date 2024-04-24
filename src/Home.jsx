import React, { useState } from "react";
import MenuModal from './components/MenuModal';
import FanModal from './components/FanModal';
import Cart from './components/CartModal';
// import logo from '../src/images/brickPie4.jpg';
const Home = ({ showCartModal, setShowCartModal }) => {


    const getCartModal = (e) => {
        e.preventDefault()
        setShowCartModal(!showCartModal)
    }


    return (

        <div className="landingContainer">
            {/* <div className="logoContainer">
                <img src={logo} className='logo' />
            </div> */}

            <div className="navContainer">
                <br />
                <div>
                    <button className="cartBtn" onClick={getCartModal}>&#128722;</button>
                    {showCartModal &&
                        <Cart
                            showCartModal={showCartModal}
                            setShowCartModal={setShowCartModal}
                        />}
                </div>
                <div>
                    <MenuModal
                        showCartModal={showCartModal}
                        setShowCartModal={setShowCartModal}
                    />

                    <span>  <FanModal /></span>

                </div>
            </div>

            <p className="footer"> Daily 10am - Midnight   <br />  789 Jules Lane <br />  602-867-5309</p>
        </div>

    )
}

export default Home
