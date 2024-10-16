import React from "react";
import './Questions.css'
import AddIcon from '@mui/icons-material/Add';



const Question=()=>{
   return (
    <div className="ques-main-con p-5">
      <h4 className="ques-hd"> Frequently Asked <br/> Questions</h4>
      <ul className="ques-ul">
         <li className="li-alig mb-1">
           <button className="addIc"><AddIcon style={{fontSize:'20px'}}/></button>
           <p className="li-pa"> What is EthAi?</p>
         </li>
         <li className="li-alig mb-1">
           <button className="addIc"><AddIcon style={{fontSize:'20px'}}/></button>
           <p className="li-pa"> How can EthAi can help me as a Trader?</p>
         </li>
         <li className="li-alig mb-1">
           <button className="addIc"><AddIcon style={{fontSize:'20px'}}/></button>
           <p className="li-pa"> Who can use EthAi?</p>
         </li>
         <li className="li-alig mb-1">
           <button className="addIc"><AddIcon style={{fontSize:'20px'}}/></button>
           <p className="li-pa"> How does EthAi track smart money flow?</p>
         </li>
         <li className="li-alig mb-1">
           <button className="addIc"><AddIcon style={{fontSize:'20px'}}/></button>
           <p className="li-pa"> How does ensure data security?</p>
         </li>
      </ul>
      </div>
   )
}

export default Question