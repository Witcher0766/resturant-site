import React from "react";

const Navbar = ({filterItem, menuList}) => {


    return (
        <>

<nav className="main-btn">
            <div className="btn-group">
            {
                menuList.map((currElem) => {
                    return (
                        <button className="btn1" onClick={() => filterItem(currElem)}>{currElem}</button>
                    )
                })
            }
            </div>
        </nav>
        </>
    )
}

export default Navbar;