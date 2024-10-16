import React from "react";
import './Sub.css'

const Sub=(props)=>{

   const {obj}=props
   const {id,image,title,desc}=obj

    return(
      <li className="card li-sub mb-1">
        <img src={image} alt={`im${id}`} className="icon"/>
        <h5 className="card-title li-head">
            {title}
        </h5>
        <p className="card-text li-para" dangerouslySetInnerHTML={{ __html: desc }}/>
      </li>
    )
}

export default Sub 