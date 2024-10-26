import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";
import video from "../../src/Assets/Videos/video1.mp4"
import Destination from "../Destination/Destination";
import Trip from "../Trip/Trip";
import Footer from "../Footer/Footer";
import Homepage from "../Home/Homepage";



const Home =()=>{

    return(
        <>
        <Navbar/>
        <video src={video} muted autoPlay loop type="video1/mp4"></video> 
       
        <Main
        cName="main"
        tittle="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel Journey"
        url="/trip" 
        btnClass="show"
        />

        






        
       <Destination/>
       <Homepage/>
       <Trip/>
      
       <Footer/>
        
        </>
    )
}

export default Home;