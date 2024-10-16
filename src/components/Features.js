import React,{useState,useEffect} from "react";
import './Features.css'


const Features=()=>{

    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1011);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1011);
    };
    
    // Listen for window resize events
    window.addEventListener("resize", handleResize);
    
    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="main-feature-con pt-5 pb-5" id="features"> 

    <div className="card card1">


        {window.innerWidth>1011?
        
        <div className="blue-box">
           <div className="small-white-box">
           </div>
        </div>:

        <div>
            <img className='small-dev-im' src="https://res.cloudinary.com/djzenbn7g/image/upload/v1729062444/px7ubvg5rzbowzbl2e83.png" alt="small-im"/>
        </div>

      }
     
     
        <div>
            <h4 className="card-title card-head"> Trade Optimizer </h4>
            <p className="card-text card-para"> 
             Find the right moments to  buy or sell, with  personalized trade  suggestions designed to  help you make the most of  every opportunity.
            </p>
        </div>
    </div>

 
   <div>
    <div className="middle-half-con mb-3"> 

    <div className="card middle-card">
        <div>
        <h1 className="card-title card-head">
          Market Insight
        </h1>
        <p className="card-text card-para">
         Stay ahead of the market. Get real time  updates on market trends, track top traders'  movements, and spot signals from key  influencers.
        </p>
        </div>
       {window.innerWidth<=1011? <img src="https://res.cloudinary.com/djzenbn7g/image/upload/v1729064948/nkhfyomeu3i66gjx3y1p.png" alt="half-sm-im" className="half-con"/>:''}

    </div>



    {window.innerWidth>1011?
       <div>
            <img src="https://res.cloudinary.com/djzenbn7g/image/upload/v1728974957/t8ua6vfha0kjcuiya32f.png" alt="half-im" className="half-con"/>
        </div>:''
    }

    </div>

   {window.innerWidth>1011?
    <div className="card empty-card">

    </div>:''
    }

    </div>

    <div className="card card3">

        {window.innerWidth>1011?
         <img className='ckt-im' src="https://res.cloudinary.com/djzenbn7g/image/upload/v1728976329/yltz4jnmb4lwmusroqcs.png" alt="ckt"/>:
         <div>
            <h4 className="card-title card-head"> Risk Guard  </h4>
            <p className="card-text card-para"> 
                Get alerts on market swings and potential risks before  they impact your portfolio.  This agent helps you  navigate volatility and stay  prepared for anything.
            </p>
        </div>
        }
    
        {window.innerWidth>1011?
         <div>
            <h4 className="card-title card-head"> Risk Guard  </h4>
            <p className="card-text card-para"> 
                Get alerts on market swings <br/> and potential risks before <br/> they impact your portfolio. <br/> This agent helps you <br/> navigate volatility and stay <br/> prepared for anything.
            </p>
        </div>
        :
        <img className='ckt-im mt-3' src="https://res.cloudinary.com/djzenbn7g/image/upload/v1729065737/avzlg8gdjwiulnmm9utb.png" alt="ai"/>
        }

    </div>

    <div className="card card4 mb-3 cash-con">
           <div>
            <h4 className="card-title card-head text-start"> Portfolio Sync </h4>
            <p className="card-text card-para ex"> 
                Easily manage your portfolio.  You'll always know what you  own, how it's performing, and where it's headed
            </p>
            </div> 
           {window.innerWidth<=1011?<img className='cash' src="https://res.cloudinary.com/djzenbn7g/image/upload/v1729066476/f1aicrl67c1rbx9lvhpt.png" alt="cash"/>:''}
    </div>

    <div className="search-card5-con">
    <div className="card card5">
          <h4 className="card-title card-head"> Opportunity Scout </h4>
            <p className="card-text card-para ex"> 
                Find exciting new projects, events and tokens that others might be missing.  Identifying promising opportunities  early, so you never miss out on the  next big thing.
            </p>
           {window.innerWidth<=1011? <img className="w-25 extraa" src="https://res.cloudinary.com/djzenbn7g/image/upload/v1729067448/trkzumyvaia0mdwrxtja.png" alt="search"/>:''}

    </div>


   {window.innerWidth>1011?
    <div className="search-con">
        <img className='search-im' src="https://res.cloudinary.com/djzenbn7g/image/upload/v1728993172/ddsttejucf3jyvsjwluv.png" alt="search"/>
    </div>
      :''
   }


    </div>

    </div>
  )
}

export default Features