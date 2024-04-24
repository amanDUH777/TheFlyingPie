import React from "react";

// import { useState } from "react"
// import useInput from "../../constants/hooks/useInput";
// import './style.css';

// const [menu, setMenu] = useState(false)
// const [lessons, setLessons] = useState(false)

// const menuHandle = () => {
//     setMenu(true)
//     setLessons(false)
// }

// const lessonsHandle = () => {
//     setLessons(true)
//     setMenu(false)
// }



const Menu = () => {
    return (
        <div id="menu" className="menuContainer">
          
            <div>
                <div className="foodContainer">
                    <span className="modalX">X</span>
                    <h1>Pizza</h1>

                    <div className="pizza">
                        <h5>Cheese <b>$8.50</b></h5>
                        <h5>Pepperoni <b>$9.50</b></h5>
                        <h5>Margherita <b>$10.00</b></h5>
                        <h5>Four Cheese <b>$11.00</b></h5>
                        <h5>Veggie <b>$11.00</b></h5>
                        <h5>Meat Lovers <b>11.00</b></h5>
                    </div>

                    <h1>Salad</h1>
                    <div className="salad">
                        <h5>Garden <b>$5.50</b></h5>
                        <h5>Caesar <b>$7.50</b></h5>
                        <h5>Italian <b>$7.50</b></h5>
                    </div>

                    <h1>Dessert</h1>
                    <div className="dessert">
                        <h5>Cannolli <b>$8.50</b></h5>
                        <h5>Cheesecake <b>$8.50</b></h5>
                        <h5>Brownies <b>$8.50</b></h5>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default Menu
