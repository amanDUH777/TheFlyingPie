import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from '../icons';
import { removeItem, increase, decrease } from '../features/cart/cartSlice.js';
import { useDispatch, useSelector } from 'react-redux';

const CartItem = ({ amount, id, img, title, price, description, total }) => {
    console.log(amount, 'amount', price, 'price')

    const dispatch = useDispatch()

    const [fullView, setFullView] = useState(false)
    const [imgSrc, setImgSrc] = useState('')

    const enlargeItem = (img) => {
        setFullView(true)
        setImgSrc(img)
    }

    return (
        <>
            <div>
                <a href="#" onClick={() => enlargeItem(img)}>{title}</a>
                {console.log(total, 'total')}
                {fullView && (
                    <div className="fullImgContainer">
                        <span className="close" onClick={() => setFullView(false)}>&times;</span>
                        <div className="displayImg">
                            <img className="tallyImg" src={imgSrc} />
                            <div className="displayText">
                                <h3>{title}</h3>
                                <p>{description}</p>
                                <div className="price">
                                    ${price.toFixed(2)}
                                    <p>Subtotal:
                                        <span className='price'>
                                            ${(amount * price).toFixed(2)}
                                        </span>
                                    </p>
                                </div>
                                <br></br>
                                <br></br>
                                <br></br>
                                <span onClick={() => {
                                    dispatch(removeItem(id))
                                    setFullView(false)
                                }} className="removeItem">
                                    Remove
                                </span>
                            </div>
                            <div className='tallyChev'>
                                <button
                                    className="amount-btn"
                                    onClick={() =>
                                        dispatch(increase({ id }))
                                    }>
                                    <ChevronUp />
                                </button>
                                {/* amount */}
                                <p className="amount">
                                    {amount}
                                </p>
                                {/* decrease amount */}
                                <button
                                    className="amount-btn"
                                    onClick={() => {
                                        if (amount === 1) {
                                            dispatch(removeItem(id));
                                            return;
                                        }
                                        dispatch(decrease({ id }))
                                    }}>
                                    <ChevronDown />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                <span className="price">
                    ${(amount * price).toFixed(2)}
                </span>
            </div>
        </>
    );
};

export default CartItem;