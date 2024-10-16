import React from "react";
import Home from "./components/Home";
import Features from "./components/Features";
import About from "./components/About";
import Tokonomies from "./components/Tokonomies";
import Roadmap from "./components/Roadmap";
import Question from "./components/Questions";
import Explore from "./components/Explore";
import './App.css'



const App = () => {
  return (
    <div>
    <div>
      <Home/>
      <Features/>
      <About/>
      <Tokonomies/>
      <Roadmap/>
      <Question/>
      <Explore/>
    </div>
    <footer className="footer p-5">

    <div className="footer-main-con">

      <div>
       <div className="logo-container1 mb-3">
       <img className='logo1' src="https://res.cloudinary.com/djzenbn7g/image/upload/v1728959819/kxwqfl91xp0aklldpr4m.png" alt="ethai"/>
       <span className="logoHeading1"> EthAi</span>
       </div>

       <ul className="app-ul">
       <li>
            <button className="tel-butt"> 
              <img className='im-x' src="https://res.cloudinary.com/djzenbn7g/image/upload/v1729055704/ljolncywewd8j10il9kd.png" alt="cross"/>
            </button>
          </li>
          <li>
            <button className="insta-butt"> 
              <img className='im-x' src="https://res.cloudinary.com/djzenbn7g/image/upload/v1729055769/iljqmgqiqhl33gneayg0.png" alt="cross"/>
            </button>
          </li>
          
          <li>
            <button className="insta-butt"> 
              <img className='im-x' src="https://res.cloudinary.com/djzenbn7g/image/upload/v1729055357/fiplglylpnixobtsdnr7.png" alt="cross"/>
            </button>
          </li>
          <li>
            <button className="tel-butt"> 
              <img className='im-x' src="https://res.cloudinary.com/djzenbn7g/image/upload/v1729055535/orame2lolush2d4kucvp.png" alt="cross"/>
            </button>
          </li>
          <li>
            <button className="insta-butt"> 
              <img className='im-x' src="https://res.cloudinary.com/djzenbn7g/image/upload/v1729055596/kbl7zqpdhdu5a5vcmjjq.png" alt="cross"/>
            </button>
          </li>
       </ul>
       </div>

       <div>
          <p className="foot-para"> “Designed for traders of <br/> today, just like you."</p>
          <div className="inp-butt-con">
          <input className='inp-sty p-2' type="text" placeholder="What's your work email?"/>
          <button className="dapp1"> Get Started</button>
          </div>

       </div>

       </div>

    </footer>
    </div>
    
  )
}

export default App