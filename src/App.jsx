import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import Fan from './components/FanModal';
import Cart from './components/CartModal';
import MenuAdd from "./components/MenuAdd.jsx";
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals } from './features/cart/cartSlice';



function App() {
    const { cartItems } = useSelector((store) => store.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateTotals());
    }, [cartItems]);

    const [showCartModal, setShowCartModal] = useState(false)

    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={
                        <Home
                            showCartModal={showCartModal} 
                            setShowCartModal={setShowCartModal}
                        />} />
                    <Route path='/menu' element={<Menu />} />
                    <Route path='/fan' element={<Fan />} />
                    <Route path='/Cart' element={<Cart />} />
                    <Route path='/menu-add' element={<MenuAdd />} />

                </Routes>
            </Router>



        </>
    );
}

export default App;
