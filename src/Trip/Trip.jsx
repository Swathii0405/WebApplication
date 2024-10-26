

import "./Trip.css";
import TripData from "./TripData";
import switzerlandimg from "../Assets/Images/switzerlandimg";
import tajmahalimg from "../Assets/Images/tajmahalimg";
import malaysiaimg from "../Assets/Images/malaysiaimg";


const Trip =()=>{
return(
    <div className="trip">
        <h1 style={{fontFamily:"fantasy"}}>Recent Travel</h1>
        <p>You can discover unique destination using Google Maps.</p>
<div className="tripcard">
    <TripData
    image={switzerlandimg}
    heading = "Travel in Switzerland"
    text = "Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps. Its cities contain medieval quarters, with landmarks like capital Bern’s Zytglogge clock tower and Lucerne’s wooden chapel bridge. "
    />


<TripData
    image={tajmahalimg}
    heading = "Trvel in Delhi"
    text = "Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people."
    />

<TripData
    image={malaysiaimg}
    heading = "Travel in Malaysia"
    text = "Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences. The capital, Kuala Lumpur, is home to colonial buildings, busy shopping districts such as Bukit Bintang and skyscrapers such as the iconic, 451m-tall Petronas Twin Towers."
    />
</div>
    </div>
)
}
export default Trip;