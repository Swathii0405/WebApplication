
import DestinationData from "./DestintionData";
import "./Destination.css";
import maldivesimg1 from "../Assets/Images/maldivesimg1";
import maldivesimg2 from "../Assets/Images/maldivesimg2";
import parisimg1 from "../Assets/Images/parisimg1";
import parisimg2 from "../Assets/Images/parisimg2";

const Destination = ()=>{
    return(
       <div className="destination">
        <h1>Popular Destination</h1>
        <p>A trip is a journey where you travel from one place to another, 
            usually for a short period of time, and then return.</p>
        
          <DestinationData 
          className="first-des"
          heading="Maldives"
          text="The Maldives is the world's lowest nation
            The Maldives are merely eight feet above sea level at their highest natural point,
            which is lower than every other country on the planet. The 1,200 islands are on average
            around seven feet above sea level. All of this coupled with
            the most wonderful warm friendly people makes the Maldives heaven on earth!"

            img1={maldivesimg1}
            img2={maldivesimg2}
          
          />


          <DestinationData 
          className="first-des-reverse"
          heading="Paris"
          text="Paris, France's capital, is a major European city and a global 
          center for art, fashion, gastronomy and culture. Its 19th-century cityscape 
          is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks
           as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is
            known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré."
            img1={parisimg1}
            img2={parisimg2}
          
          />
        
       </div>



          

    )
}

export default Destination;