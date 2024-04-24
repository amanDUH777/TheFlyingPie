import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import MenuMap from "./MenuMap";
// import cartItems from "./CartItems";
// import boards from './CartItems';
import { createCart } from '../features/cart/cartSlice';
import { getMenus } from "../features/menu/menuSlice";

const MenuModal = ({ showCartModal, setShowCartModal }) => {

    const dispatch = useDispatch();

    // const { amount, total} = useSelector((state) => state.cartItems)

    const { menus } = useSelector((state) => state.menu)


    const [showModal, setShowModal] = useState(false)
    const [pizzaList, setPizzaList] = useState([])
    const [saladList, setSaladList] = useState([])
    const [dessertList, setDessertList] = useState([])

    useEffect(() => {
        
        dispatch(getMenus())
        // console.log(menus)
        let pizzaList = menus.filter((item) =>
            item.category === 'pizza')
        setPizzaList(pizzaList)
        // console.log(pizzaList, 'pizza')
        let saladList = menus.filter((item) =>
            item.category === 'salad')
        setSaladList(saladList)
        let dessertList = menus.filter(item =>
            item.category === 'dessert')
        setDessertList(dessertList)

    }, [dispatch, menus])

    const getModal = (e) => {
        e.preventDefault()
        setShowModal(!showModal)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setShowModal(false)
        // showCartModal(false)
        setShowCartModal(true)
    }

    const addToCart = (id, price, title, description, img) => {

        const addItem = {
            id: id,
            title: title,
            price: price,
            description: description,
            img: img,
            amount: 1
            
        }
        
        dispatch(createCart(addItem))
        
        console.log(addItem, 'addItem')
    }


    return (
        <>
            <button type='button' className="menuBtn" onClick={getModal}>Menu</button>

            {showModal && (
                <div className="menuModalContainer-background">
                    <span onClick={() => setShowModal(false)} className="closeMenuModal">
                        &times;
                    </span>

                    <div className="menuModalContainer">
                        <div className="pizzaContainer">
                            {/* this is where we are going to map cart items */}
                            <div className='row'>
                                {pizzaList.map((item, index) => {
                                    return (
                                        <div key={index} className='contain'>
                                            <img className="food" src={item.img} alt="thing" />
                                            <div className="overlay">
                                                <div className="overlayText">
                                                    <h3>{item.title}</h3>
                                                    <p>{item.description}</p>
                                                    <h3 className="price">${item.price.toFixed(2)}</h3>
                                                </div>
                                                <div className="addBtnContainer">
                                                    <button className="addBtn" onClick={() => addToCart(item._id, item.price, item.title, item.description, item.img)}>Add to Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <hr className="hrMenu" />
                        <br />
                        <div className="saladContainer">
                            <div className="row">
                                {saladList.map((item, index) => {
                                    return (
                                        <div key={index} className='contain'>
                                            <img className="food" src={item.img} alt="thing" />
                                            <div className="overlay">
                                                <div className="overlayText">
                                                    <h3>{item.title}</h3>
                                                    <p>{item.description}</p>
                                                    <h3 className="price">${item.price.toFixed(2)}</h3>
                                                </div>
                                                <div className="addBtnContainer">
                                                    <button className="addBtn" onClick={() => addToCart(item._id, item.price, item.title, item.description, item.img)}>Add to Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>                           
                        </div>
                        <br />
                        <hr className="hrMenu" />
                        <br />
                        <div className="dessertContainer">                           
                            <div className="row">
                                {dessertList.map((item, index) => {
                                    return (
                                        <div key={index} className='contain'>
                                            <img className="food" src={item.img} alt="thing" />
                                            <div className="overlay">
                                                <div className="overlayText">
                                                    <h3>{item.title}</h3>
                                                    <p>{item.description}</p>
                                                    <p>${item.price.toFixed(2)}</p>
                                                </div>
                                                <div className="addBtnContainer">
                                                    <button className="addBtn" onClick={() => addToCart(item._id, item.price, item.title, item.description, item.img)}>Add to Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <br />
                        <hr className="hrMenu" />
                        <button type="submit" className="payModalBtn" onClick={handleSubmit}>Place Order Now</button>
                        <br />
                        {/* <hr className="hrMenu" /> */}
                    </div>
                </div>
            )
            }
        </>
    )
}
export default MenuModal
