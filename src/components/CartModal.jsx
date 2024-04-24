import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createCustomer } from "../features/customer-purchase/customerSlice";
import { clearCart } from "../features/cart/cartSlice";
import { ChevronDown, ChevronUp } from '../icons';
import CartItem from "./CartItems";



const CartModal = ({ showCartModal, setShowCartModal }) => {

    const [showDeliveryDiv, setShowDeliveryDiv] = useState(false)

    const [divChecked, setDivChecked] = useState('divChecked')


    const [fullName, setFullName] = useState('');
    // const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expMonth, setExpMonth] = useState('');
    const [expYear, setExpYear] = useState('');
    const [cvv, setCvv] = useState('');
    const [delAddress, setDelAddress] = useState('')
    const [delCity, setDelCity] = useState('')
    const [delState, setDelState] = useState('')
    const [delZip, setDelZip] = useState('')

    const dispatch = useDispatch();

    const { cartItems, total, amount } = useSelector((state) => state.cart)

    const getDeliveryDiv = () => {
        setShowDeliveryDiv(!showDeliveryDiv)
    }


    const handlePurchase = (e) => {
        e.preventDefault()
        const newPurchase = {
            fullName: fullName,
            address: address,
            city: city,
            state: state,
            zipCode: zipCode,
            cardName: cardName,
            cardNumber: cardNumber,
            expMonth: expMonth,
            expYear: expYear,
            cvv: cvv,
            delAddress: delAddress,
            delCity: delCity,
            delState: delState,
            delZip: delZip,
        }

        dispatch(createCustomer(newPurchase))
        // console.log(newPurchase, 'this is a new purchase')
        setShowCartModal(false)
        dispatch(clearCart(cartItems))

        alert('Thank you for your business! Your order is being prepared and will arrive soon!')
        setFullName('')
        setAddress('')
        setCity('')
        setState('')
        setZipCode('')
        setCardName('')
        setCardNumber('')
        setExpMonth('')
        setExpYear('')
        setCvv('')



    }
    return (
        <>
            <div className="cartContainer-background">
                <span onClick={() => setShowCartModal(false)} className="closeCart">&times;</span>
                <div className="cartModal">
                    <div className="row">
                        <div className="col-75">
                            <form >
                                <div className="row">
                                    <div className="col-50" id="col-50Pmt">
                                        <h3 className="cartHeader">PAYMENT</h3>
                                        <label className="fname" id="types" htmlFor="fname">Payment Types Accepted:</label>
                                        <div className="icon-container">
                                            <span className='credit'> &#128179; Visa </span>
                                            <span className="credit"> &#128179; MasterCard</span>
                                            <span className="credit"> &#128179; Discover</span>
                                            <hr></hr>
                                        </div>
                                        <input type="text" id="cname" className="billInput" placeholder="Name on Card"
                                            value={cardName} onChange={(e) => setCardName(e.target.value)} required />
                                        <input type="text" id="ccnum" className="billInput" placeholder="Card Number"
                                            value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
                                        <input type="text" id="expmonth" className="billInput" placeholder="Exp Month"
                                            value={expMonth} onChange={(e) => setExpMonth(e.target.value)} required />
                                        <div className="row">
                                            <div className="col-50">
                                                <input type="text" id="expyear" className="billInput" placeholder="Exp Year"
                                                    value={expYear} onChange={(e) => setExpYear(e.target.value)} required />
                                            </div>
                                            <div className="col-50">
                                                <input type="text" id="cvv" className="billInput" placeholder="CVV"
                                                    value={cvv} onChange={(e) => setCvv(e.target.value)} required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-50">
                                        <h3 className="cartHeader">BILLING</h3>
                                        <div>
                                            <span><label htmlFor='box' className="fname">Delivery Address Same as Billing:</label></span>
                                            <span><input id='boxContainer' onClick={getDeliveryDiv} className='checked' type="checkbox"
                                                checked={divChecked} onChange={() => setDivChecked(!divChecked)} /></span>
                                            <p></p>
                                            <hr></hr>
                                            <span className="checkmark"></span>
                                        </div>
                                        <div>
                                            <input type="text" id="fullname" className="billInput" placeholder="Full Name"
                                                value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                                            <input type="text" id="address" className="billInput" placeholder="Address"
                                                value={address} onChange={(e) => setAddress(e.target.value)} required />
                                            <input type="text" id="city" className="billInput" placeholder="City"
                                                value={city} onChange={(e) => setCity(e.target.value)} required />
                                            <div className="row">
                                                <div className="col-50">
                                                    <input type="text" id="state" className="billInput" placeholder="State"
                                                        value={state} onChange={(e) => setState(e.target.value)} required />
                                                </div>
                                                <div className="col-50">
                                                    <input type="text" id="zip" className="billInput" placeholder="Postal Code"
                                                        value={zipCode} onChange={(e) => setZipCode(e.target.value)} required />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="deliveryDiv">
                                    {showDeliveryDiv &&
                                        <div className='deliveryDiv'>
                                            <div className='row'>
                                                <div className='col-50'>
                                                    <div className='row'>
                                                        <div className='col-25'>
                                                            <h3 className="cartHeader3" htmlFor='deliveryAddress'>DELIVERY ADDRESS</h3>
                                                            <hr></hr>
                                                            <input className="billInput" type="text" id='deliveryAddress' placeholder="Street Address"
                                                                value={delAddress} onChange={(e) => setDelAddress(e.target.value)} required />
                                                            <input className="billInput" type="text" id='deliveryCity' placeholder="City"
                                                                value={delCity} onChange={(e) => setDelCity(e.target.value)} required />
                                                            <div className="row">
                                                                <div className='col-50'>
                                                                    <input className="billInput" type="text" id='deliveryState' placeholder="State"
                                                                        value={delState} onChange={(e) => setDelState(e.target.value)} required />
                                                                </div>
                                                                <div className='col-50'>
                                                                    <input className="billInput" type="text" id='deliveryZip' placeholder="Postal Code"
                                                                        value={delZip} onChange={(e) => setDelZip(e.target.value)} required />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                                {/* <div> */}
                                    <button type="submit" className="payModalBtn" onClick={(e) => handlePurchase(e)}>
                                        Checkout
                                    </button>
                                {/* </div> */}
                            </form>
                        </div>
                        <div className="col-25">
                            <div className="tallyContainer">
                                <h5 className="cartTop">
                                    Cart<span className="price">{amount}</span>
                                </h5>
                                <hr />
                                {cartItems.map((item) => {
                                    return <CartItem key={item.id} {...item} total={total} />
                                })}
                                <hr />
                                <h5 className="tallyTotal">
                                    Total:
                                    <span className="price">
                                        ${total.toFixed(2)}
                                    </span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}


export default CartModal;


// import React, { useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { createCustomer } from "../features/customer-purchase/customerSlice";
// import { clearCart } from "../features/cart/cartSlice";
// // import { ChevronDown, ChevronUp } from '../icons';
// import CartItem from "./CartItems";



// const CartModal = ({ showCartModal, setShowCartModal }) => {



//     const [showDeliveryDiv, setShowDeliveryDiv] = useState(true)
//     const [divChecked, setDivChecked] = useState('cash')
//     const [showCashDiv, setShowCashDiv] = useState('showCashDiv')
//     const [showCardDiv, setShowCardDiv] = useState('showCardDiv')

//     const [cashChecked, setCashChecked] = useState('cashChecked')

//     const [fullName, setFullName] = useState('');
//     const [email, setEmail] = useState('');
//     const [address, setAddress] = useState('');
//     const [city, setCity] = useState('');
//     const [state, setState] = useState('');
//     const [zipCode, setZipCode] = useState('');
//     const [cardName, setCardName] = useState('');
//     const [cardNumber, setCardNumber] = useState('');
//     const [expMonth, setExpMonth] = useState('');
//     const [expYear, setExpYear] = useState('');
//     const [cvv, setCvv] = useState('');


//     const [delAddress, setDelAddress] = useState('')
//     const [delCity, setDelCity] = useState('')
//     const [delState, setDelState] = useState('')
//     const [delZip, setDelZip] = useState('')



//     const dispatch = useDispatch();



//     const { cartItems, total, amount } = useSelector((state) => state.cart)

//     const getDeliveryDiv = () => {
//         setShowDeliveryDiv(!showDeliveryDiv)
//     }

//     const getCardDiv = (pType) => {
//         setShowCardDiv(!showCardDiv)
//         if (pType === 'cash') {
//             setShowCardDiv(false)
//         } else if (pType === 'card') {
//             setShowCardDiv(true)
//         }
//     }


//     const handlePurchase = (e) => {
//         e.preventDefault()
//         const newPurchase = {
//             fullName: fullName,
//             email: email,
//             address: address,
//             city: city,
//             state: state,
//             zipCode: zipCode,
//             cardName: cardName,
//             cardNumber: cardNumber,
//             expMonth: expMonth,
//             expYear: expYear,
//             cvv: cvv,
//             delAddress: delAddress,
//             delCity: delCity,
//             delState: delState,
//             delZip: delZip,
//         }

//         dispatch(createCustomer(newPurchase))
//         console.log(newPurchase, 'this is a new purchase')
//         setShowCartModal(false)
//         dispatch(clearCart(cartItems))

//         alert('Thanks for your order! Your Flying Pie yummies will arrive soon.')
//         setFullName('')
//         setEmail('')
//         setAddress('')
//         setCity('')
//         setState('')
//         setZipCode('')
//         setCardName('')
//         setCardNumber('')
//         setExpMonth('')
//         setExpYear('')
//         setCvv('')


//     }
//     return (
//         <>
//             <div className="cartContainer-background">
//                 <span onClick={() => setShowCartModal(false)} className="closeCart">&times;</span>
//                 <div className="cartModal">
//                     <div className="row">
//                         <div className="col-75">
//                             <form>
//                             <div className="row">
//                                 <div className="col-50" id="col-50Pmt">
//                                     <h3 className="cartHeader">Payment</h3>
//                                     {/* <br /> */}
//                                     <label htmlFor="fname">Payments Accepted:</label>
//                                     <div className="iconContainer">
//                                         <span>&#128179;Visa</span>
//                                         <span>&#128179;Mastercard</span>
//                                         <span>&#128179;AMEX</span>
//                                         <hr></hr>
//                                         {/* <div className='row'> */}
//                                             {/* <div className='col-50'> */}
//                                                 {/* <div className='row' > */}
//                                                     {/* <div className="col-25">
//                                                         <input name='payment-type' id='box' onClick={() => getCardDiv("cash")} className='checked' type="checkbox" checked={divChecked === 'cash' ? true : false} onChange={() => setDivChecked('cash')} />
//                                                         <label htmlFor='box' className="box">Cash</label><br></br>
//                                                     </div> */}
//                                                     {/* <div className="col-25">
//                                                         <input name='payment-type' id='box' onClick={() => getCardDiv("card")} className='checked' type="checkbox" checked={divChecked === 'card' ? true : false} onChange={() => setDivChecked('card')} /> */}
//                                                         {/* <label className="box">Visa, Mastercard, American Express</label><br></br> */}
//                                                     {/* </div> */}
//                                                 {/* </div>
//                                             </div>
//                                         </div> */}
//                                     </div>
//                                     <br />
//                                     <div className='deliveryDiv'>
//                                         <h3 className="cartHeader">Delivery Address</h3>
//                                         <div className='row'>
//                                             <div className='col-50'>
//                                                 <div className='row'>
//                                                     <div className='col-25'>
//                                                         <label htmlFor='deliveryAddress'>Delivery Address</label>
//                                                         <input className="billInput" type="text" id='deliveryAddress' placeholder="123 Main St"
//                                                             value={delAddress} onChange={(e) => setDelAddress(e.target.value)} required />

//                                                         <label htmlFor='deliveryCity'>Delivery City</label>
//                                                         <input className="billInput" type="text" id='deliveryCity' placeholder="Nowhere"
//                                                             value={delCity} onChange={(e) => setDelCity(e.target.value)} required />
//                                                         <div className="row">
//                                                             <div className='col-50'>
//                                                                 <label htmlFor='deliveryState'>Delivery State</label>
//                                                                 <input className="billInput" type="text" id='deliveryState' placeholder="AZ"
//                                                                     value={delState} onChange={(e) => setDelState(e.target.value)} required />
//                                                             </div>
//                                                             <div className='col-50'>
//                                                                 <label htmlFor='deliveryZip'>Delivery Zip</label>
//                                                                 <input className="billInput" type="text" id='deliveryZip' placeholder="85051"
//                                                                     value={delZip} onChange={(e) => setDelZip(e.target.value)} required />
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className='col-25'>
//                                                         <label htmlFor='deliveryMess'>Delivery Instructions</label>
//                                                         <textarea id="deliveryMess" type="text" className="delInst">Need to know...</textarea>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>


//                                     <div className="cardDiv">
//                                         <div className="row">
//                                             <div className="col-75">
//                                                 <div className="row">
//                                                     <div className="col-50" >
//                                                         <div className="col-25">
//                                                             <h3 className="cartHeader">Card info</h3>
//                                                             <label htmlFor="cname">Name on card</label>
//                                                             <input type="text" id="cname" className="billInput" placeholder="First Middle Last"
//                                                                 value={cardName} onChange={(e) => setCardName(e.target.value)} required />
//                                                             <label htmlFor="ccnum">Card Number</label>
//                                                             <input type="text" id="ccnum" className="billInput" placeholder="1111-2222-3333-4444"
//                                                                 value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
//                                                             <label htmlFor="expmonth">Exp. Month</label>
//                                                             <input type="text" id="expmonth" className="billInput" placeholder="July"
//                                                                 value={expMonth} onChange={(e) => setExpMonth(e.target.value)} required />
//                                                             <div className="row">
//                                                                 <div className="col-50">
//                                                                     <label htmlFor="expyear">Exp. Year</label>
//                                                                     <input type="text" id="expyear" className="billInput" placeholder="2025"
//                                                                         value={expYear} onChange={(e) => setExpYear(e.target.value)} required />
//                                                                 </div>
//                                                                 <div className="col-50">
//                                                                     <label htmlFor="cvv">CVV</label>
//                                                                     <input type="text" id="cvv" className="billInput" placeholder="333"
//                                                                         value={cvv} onChange={(e) => setCvv(e.target.value)} required />
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-50">
//                                                         <div className="col-25">
//                                                             <h3 className="cartHeader">Billing Address</h3>
//                                                             <label htmlFor="fullname">Billing Name</label>
//                                                             <input type="text" id="fullname" className="billInput" placeholder="full name"
//                                                                 value={fullName} onChange={(e) => setFullName(e.target.value)} required />
//                                                             <label htmlFor="address">Billing Address</label>
//                                                             <input type="text" id="address" className="billInput" placeholder="123 w. 33rd street"
//                                                                 value={address} onChange={(e) => setAddress(e.target.value)} required />
//                                                             <label htmlFor="city">Billing City</label>
//                                                             <input type="text" id="city" className="billInput" placeholder="honolulu"
//                                                                 value={city} onChange={(e) => setCity(e.target.value)} required />
//                                                             <div className="row">
//                                                                 <div className="col-50">
//                                                                     <label htmlFor="state">Billing State</label>
//                                                                     <input type="text" id="state" className="billInput" placeholder="hi"
//                                                                         value={state} onChange={(e) => setState(e.target.value)} required />
//                                                                 </div>
//                                                                 <div className="col-50">
//                                                                     <label htmlFor="zip">Billing Zip</label>
//                                                                     <input type="text" id="zip" className="billInput" placeholder="70112"
//                                                                         value={zipCode} onChange={(e) => setZipCode(e.target.value)} required />
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             </form>
//                         </div>



//                         <div className="col-25">
//                             <div className="tallyContainer">
//                                 <h4>
//                                     My Order<span className="price">{amount}</span>
//                                 </h4>
//                                 {cartItems.map((item) => {
//                                     return <CartItem key={item.id} {...item} total={total} />
//                                 })}
//                                 <hr />

//                                 <p>Total:
//                                     <span className="price">
//                                         ${total.toFixed(2)}
//                                     </span>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <button type="submit" className="payModalBtn" onClick={(e) => handlePurchase(e)}>
//                             Submit Order
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default CartModal;