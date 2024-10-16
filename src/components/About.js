import React from "react";
import './About.css'
import Sub from "./Sub";

const arr=[
    {
        id:1,
        image:'https://res.cloudinary.com/djzenbn7g/image/upload/v1728998474/tdslh6r5ucd9prxxpcjl.png',
        title:'Stay Ahead',
        desc:'No more guesswork-get clear, <br/> trustable insights.'
    },
    {
        id:2,
        image:'https://res.cloudinary.com/djzenbn7g/image/upload/v1728997887/likrlxwbgumuv4galbec.png',
        title:'Know Your Assets',
        desc:'Always stay on top of how your <br/> investments are performing.'
    },
    {
        id:3,
        image:'https://res.cloudinary.com/djzenbn7g/image/upload/v1728997949/h5p1tsogbbafifgs2vs6.png',
        title:'Simple, Not Overwhelming',
        desc:'Our tools are designed to make <br/> complex market analysis easy to <br/> understand and act on.'
    },
    {
        id:4,
        image:'https://res.cloudinary.com/djzenbn7g/image/upload/v1728998051/jgllqiuo7a42m4eeywwf.png',
        title:'Future Proof',
        desc:"We're constantly improving, adding <br/> new features to help you make the  <br/> most informed decisions possible. "
    }
]

const About=()=>{
   return (
    <div className="ab-main-con" id="abt">
        <h4 className="abHead"> About EthAi</h4>
        <p className="abpara"> At EthAi, we're all about making crypto trading easier and more intutive. We provide tools <br/> that help traders keep up with all new market trends, track top traders' movements.</p>
        <button className="read-more"> Read More </button>
        <ul className="inner-about-con p-5">
          {
            arr.map((i)=><Sub key={i.id} obj={i}/>)
          } 
        </ul>
    </div>
   )
}

export default About 