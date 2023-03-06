import React from "react";


const MenuCard = ({ menuInit }) => {

    // console.log(menuInit);

    return (
        <>
         <div className="main-container">

         {
            menuInit.map((currElem, index) => {

                // destructor

                const {id, name, category, image, description} = currElem;

                return (
                    <>
                    <div className="sub-container" key={id}>
            <div className="card">
                <span className="idnumber">{id}➡️{category}</span>
                {/* <span className="category">{currElem.category}</span> */}
                <h2 className="name">{name}</h2>
                <span className="desc">
                    {description}
                </span>
            </div>
            <img className="card-img" src={image} alt="maggie" />
            <button className="btn">Order Now</button>
        </div>
                    </>
                )
            })
         }
     
        </div>
        </>
        
    )
}


export default MenuCard;