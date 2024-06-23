import React from "react";
import App from "./App";
function Avatar(props){
    return <div>
        <img className="circle-img" src={props.img} alt="avatar_img" />
    </div>
}

export default Avatar;