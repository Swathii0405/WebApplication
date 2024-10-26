
import "../Home/Homepage.css"
import adventurebannerimg from "../Assets/Images/adventurebannerimg";
import shipbaannerimg from "../Assets/Images/shipbannerimg"
import flightbannerimg from "../Assets/Images/flightbannerimg";
import banner1 from "../Assets/Images/banner1img";
import banner3 from "../Assets/Images/banner3img";
import banner4 from "../Assets/Images/banner4img";





const Homepage =()=>{
    return(
        
       <div>
            

            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={adventurebannerimg} style={{height:400}}  class="d-block w-100" alt={adventurebannerimg}/>
    </div>
    <div class="carousel-item">
      <img src={shipbaannerimg}  style={{height:400}}   class="d-block w-100" alt={shipbaannerimg}/>
    </div>
    <div class="carousel-item">
      <img src={flightbannerimg}  style={{height:400}} class="d-block w-100" alt={flightbannerimg}/>
    </div>
    <div class="carousel-item">
      <img src={banner1}  style={{height:400}} class="d-block w-100" alt={banner1}/>
    </div>
    <div class="carousel-item">
      <img src={banner3}  style={{height:400}} class="d-block w-100" alt={banner3}/>
    </div>
    <div class="carousel-item">
      <img src={banner4}  style={{height:400}} class="d-block w-100" alt={banner4}/>
    </div>
  </div>
 
</div>




       </div>

        
        
        
    )
}

export default Homepage;

