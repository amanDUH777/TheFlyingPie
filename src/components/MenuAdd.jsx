import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createMenu } from "../features/menu/menuSlice";


const MenuAdd = () => {
    const [category, setCategory] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [img, setImg] = useState("")

    const dispatch = useDispatch()

    const handleAdd = () => {

        const newMenu = {
            category: category,
            title: title,
            description: description,
            price: price,
            img: img
        }

        dispatch(createMenu(newMenu))
        console.log(newMenu)
        setCategory('')
        setTitle('')
        setDescription('')
        setPrice(0)

    }

    return (
        <>

            <div className="addProduct">


                <br />
                <label htmlFor="catName">Category</label>
                <input value={category} type="text" id="catName" className="billInput" placeholder="category name here"
                    onChange={(e) => setCategory(e.target.value)} required />

                <label htmlFor="title">Title</label>
                <input value={title} type="text" id="title" className="billInput" placeholder="title here"
                    onChange={(e) => setTitle(e.target.value)} required />

                <label htmlFor="description">Description</label>
                <input value={description} type="text" id="description" className="billInput" placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)} required />

                <label htmlFor="price">Price $</label>
                <input value={price} type="number" id="price" className="billInput" placeholder="10.00"
                    onChange={(e) => setPrice(e.target.value)} required />

                <label htmlFor="image">Image</label>
                <input value={img} type="file" id="image" className="billInput"
                    onChange={(e) => setImg(e.target.value)} required />

                <button onClick={(e) => handleAdd(e)}>Add Product</button>

            </div>

        </>
    )
}

export default MenuAdd