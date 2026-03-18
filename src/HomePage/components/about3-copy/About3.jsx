
import './about3.css'
import officeresearch from '../../../images/Procumrent3.png'


const DummyAbout3 = () => {


//const navigate= useNavigate()


  return (

    <div style={{marginBottom:"2rem"}}>


    <section id='about'>

    {/* <p style={{fontWeight:"700",fontSize:"3.5rem",color:"#40255F",paddingBottom:"1rem",paddingLeft:"0.8rem",paddingRight:"0.8rem",borderBottom:"1px solid #40255F",width:"max-content",margin:"0 auto",marginBottom:"2rem",marginTop:"3rem"}}> The Solution<span className="text-accent">  get the Job! </span></p> */}
    <div className="container-hp about__container" style ={{marginTop:"0rem"}}>
       


    {<div className='aboutCTA1'>
    
 
    <img  className='CTAboximg1' src={officeresearch} alt="search image"/>
    
       
        
        </div>}
       

      <div className="aboutExplainer">
      <h1 style={{fontWeight:"600",color:"#000",fontSize:"2.2rem"}}>Always Be in the Right Place at the Right Time</h1>

         <p style={{fontSize:"1.1rem"}}>
        Stay coordinated and responsive with smarter scheduling and location awareness. Our system helps agents and teams manage showings efficiently, ensuring coverage across properties and reducing scheduling conflicts. Clients experience timely showings, organized agents, and a seamless real estate process from start to finish.
        </p>

       {/*<div className = "about-btn-placement" >
        <button   onClick={()=>{navigate('/login')}} className="btn ">
           Get Started 
         </button>

         <p  onClick={()=>{navigate('/dashboard/home')}} className="btn-invisible" >See How It Works</p>
     </div>*/}


      </div>
     
     {/*<div className='aboutCTA'>
    
       <img  className='CTAbox' src={countPennies} alt="counting coins"/>
     

     <div className='clip-path-bottom-right'></div>
     <div className='clip-path-bottom-left'></div>
     <div className='clip-path-top-left'></div>
</div>*/}  



      

   
   
</div>

    </section>


</div>
  )
}

export default DummyAbout3