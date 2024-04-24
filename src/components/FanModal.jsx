import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createFan } from "../features/fan/fanSlice";



const FanModal = () => {

    const [showFanModal, setShowFanModal] = useState(false)
    const [name, setName] = useState('')
    const [address, setAddress] = useState(0)
    const [sign, setSign] = useState('')
    const [message, setMessage] = useState('')
    const [favoritePizza, setFavoritePizza] = useState('')

    const dispatch = useDispatch()
    // console.log(favoritePizza, 'favoritePizza')

    const getFanModal = (e) => {
        e.preventDefault()
        setShowFanModal(!showFanModal)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setShowFanModal(false)

        const newFan = {
            name: name,
            address: address,
            sign: sign,
            message: message,
            favoritePizza: favoritePizza
        }

        dispatch(createFan(newFan))
  
        
        alert('Welcome to The Flying Pie Fan Club!')
        setName('')
        setAddress('')
        setSign('')
        setMessage('')
        setFavoritePizza('')

    }

    return (
        <>
          <button type='button' className="fanBtn" onClick={getFanModal}>Fan Club</button>

            {showFanModal && (
                <div className="fanModalContainer-background">
                    <span onClick={() => setShowFanModal(false)} className="closeFanModal">&times;</span>

                    <form className="fanModalContainer">
                        < h1 >Fan Club Favorites</h1 >

                        <div className="fanList" >
                            <ul className="itemsList" >
                                <input type="checkbox" id="myCheckbox" value={favoritePizza} onClick={() => setFavoritePizza('Cheese')} /> Cheese
                                <br />

                                <input type="checkbox" value={favoritePizza} onClick={() => setFavoritePizza('Margherita')} /> Margherita
                                <br />

                                <input type="checkbox" id="myCheckbox" value={favoritePizza} onClick={() => setFavoritePizza('Pepperoni')} /> Pepperoni
                                <br />

                                <input type="checkbox" id="myCheckbox" value={favoritePizza} onClick={() => setFavoritePizza('Four Cheese')} /> Four Cheese
                                <br />

                                <input type="checkbox" id="myCheckbox" value={favoritePizza} onClick={() => setFavoritePizza('Veggie')} /> Veggie
                                <br />

                                <input type="checkbox" id="myCheckbox" value={favoritePizza} onClick={() => setFavoritePizza('Meat Lovers')} /> Meat Lovers

                            </ul>

                        </div>

                        {/* <p className="boardRental">&#127940;includes board rental</p>

                        <h1>reserve your day for personalized fan</h1> */}

                        <div className="formList">
                            <input className="fanTextBox" type="text" placeholder="What's your name?" required name="Name" value={name} onChange={(e) => setName(e.target.value)} />
                            
                            <br />
                            <input className="fanTextBox" type="text" placeholder="What's your sign?" required name="Sign" value={sign} onChange={(e) => setSign(e.target.value)} />
                            <br />
                            <input className="fanTextBox" type="text" placeholder="Do you come here often?" name="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
                            <br />
                            <br />
                            <button className="joinBtn" type="submit" onClick={handleSubmit}>
                                Join Our Fan Club!
                            </button>
                            <br />

                        </div>

                    </form>
                </div>
            )}


        </>
    )
}

export default FanModal