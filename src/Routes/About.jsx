
import Navbar from "../Navbar/Navbar";
import "../Main/Main.css";
import video from "../../src/Assets/Videos/video3.mp4";
import Footer from "../Footer/Footer";
import Aboutus from "../Aboutus/Aboutus";




const About =()=>{

    return(
        <>
          
         <Navbar/>
         <video src={video} muted autoPlay loop type="video3/mp4"></video> 
         <Aboutus/>
          <Footer/>
        </>
    )
}

export default About;