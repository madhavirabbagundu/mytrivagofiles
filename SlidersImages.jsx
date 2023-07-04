import React from "react";
import  images  from "./images";
import './SliderImages.css'
function SlidersImages(){
    const [selectImg,setSelectImg] = React.useState(images[0])

    return(
        <div className="App1">
        <div className="container">
            <img src = {selectImg} alt = "Selected" className = "selected"/></div>
            <div className = "imgContainer">
                {/* <img src = {img} alt = "dog"/> */}
                {/* <div className="imgContainer1">  */}
                  {images.map((img,index)=>(
                    <img style = {{border:selectImg === img? "4px solid pink":""}}
                    key={index}
                    src = {img}
                    alt = "dog"
                    onClick = {()=>setSelectImg(img)}
                    />
                ))}
                {/* </div> */}
            </div>
            
        </div>
        // </div>
    )
}
export { SlidersImages }