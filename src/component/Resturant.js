import React, { useState } from "react";
import Menu from "./MenuApi.js"
import MenuCard from "./MenuCard";
import Navbar from "./Navbar.js";


const uniqueList = [
    ...new Set(
    Menu.map((currElem) => {
    return currElem.category;
})
), "All",
];

// console.log(uniqueList);

const Resturant = () => {
    const [menuInit, setMenu] = useState(Menu);
    const [menuList, setList] = useState(uniqueList);
    // console.log(menuInit);

    const filterItem = (category) => {


        if(category === "All"){
            setMenu(Menu);
            return;
        }

        const updatedlist = Menu.filter((currElem) => {
            return currElem.category === category;
        })
        setMenu(updatedlist);
    }

    return (
        <>
        <Navbar filterItem={filterItem} menuList ={menuList}/>
            <MenuCard menuInit={menuInit} />
        </>
       
    )
}


export default Resturant;