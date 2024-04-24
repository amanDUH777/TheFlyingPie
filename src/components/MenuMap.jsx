import React, { useState } from "react";

const MenuMap = () => {
    const [itemMap, setItemMap] = useState([]);

    return (
        <>
            {itemMap.map((item, index) => {
                return(
                    <div key={index}>
                        <h3>{item}</h3>
                        <h3>{item}</h3>
                        <h3>{item}</h3>
                    </div>
                )
            })}
        </>
    )
}
export default MenuMap;