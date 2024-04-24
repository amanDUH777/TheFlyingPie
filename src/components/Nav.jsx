import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../components/MenuModal';
import Cart from '../components/CartModal';
import FanModal from './FanModal';


const Nav = () => {
    const { showCartModal, setShowCartModal } = useState(false)

    const getCartModal = (e) => {
        e.preventDefault()
        setShowCartModal(!showCartModal)
    }

    return (
        <>
            <div className='myNav'>

                <div className='myNavBar'>
                    <Link to='/' className='active'>Home</Link>
                    <Menu />
                    <FanModal />
                </div>
                <div>
                    <button className="cartBtn" onClick={getCartModal}>&#128722;</button>

                    {showCartModal &&
                        <Cart
                            showCartModal={showCartModal}
                            setShowCartModal={setShowCartModal}
                        />}
                </div>
            </div>

        </>

    )
}

export default Nav;