


import "./Servicesus.css";
import serviceimg from "../Assets/Images/serviceimg";
import img1 from "../Assets/Images/serviceimg1";
import img2 from "../Assets/Images/serviceimg2.jfif";
import img3 from "../Assets/Images/serviceimg3.jfif";
import img4 from "../Assets/Images/serviceimg4.jfif";
import img5 from "../Assets/Images/serviceimg5";
import img6 from "../Assets/Images/serviceimg6";
import { useState } from "react";

export const Data = [

    {
                id:1,
                imgSrc:img1,
                destTitle:"Tela suit",
                location: "Delhi",
                grade: "CULTURALS RELAX",
                fees: "Rs. 1700",
                description: "Hotel Tela Suite INN Near IGI Airport Delhi is located in New Delhi, within 8.1 miles of MG Road and 8.2 miles of Qutub Minar. This 4-star hotel offers room service, an ATM and free WiFi. There's free private parking and the property."
        
            },
        
            {
                id:2,
                imgSrc:img2,
                destTitle:" Burj Al Arab",
                location: "Dubai",
                grade: "CULTURALS RELAX",
                fees: "Rs. 7000",
                description: "Being repeatedly voted as the world’s most luxurious hotel, Burj Al Arab is the pearl of the ocean.the experiences here are extraordinary! It is most expensive 7 star hotel in the world.The food was Complementry."
        
            },
        
            {
                id:3,
                imgSrc:img3,
                destTitle:" Luxury Villa",
                location: "Switzerland",
                grade: "CULTURALS RELAX",
                fees: "Rs. 1300",
                description: "The hotel will provide guests with air-conditioned rooms offering a desk, an electric tea pot, a safety deposit box, a flat-screen TV, a balcony and a private bathroom with a bidet. The rooms have a closet.Available for free parking."
        
            },
        
        
            {
                id:4,
                imgSrc:img4,
                destTitle:"Taj Lands End",
                location: "Mumbai",
                grade: "CULTURALS RELAX",
                fees: "Rs. 1200",
                description: "Located in Bandra West, Taj Lands End provides 5-star accommodation and free Wi-Fi, a sauna and an outdoor pool. It is situated a brief walk from the Walk of the Stars and Castella de Aguada."
        
            },
        
        
            {
                id:5,
                imgSrc:img5,
                destTitle:"Novotel Convention Centre",
                location: "Hyderabad",
                grade: "CULTURALS RELAX",
                fees: "Rs. 1100",
                description: "Situated within 1.7 km of AP State Archaeology Museum and 1.2 km of Ravindra Bharathi, Itsy Hotels Arastu Inn provides rooms with air conditioning and a private bathroom. With free wifi."
        
            },
        
        
            {
                id:6,
                imgSrc:img6,
                destTitle:"Super Townhouse Sarjapur ",
                location: "Bellandur",
                grade: "CULTURALS RELAX",
                fees: "Rs. 1000",
                description: "Located in Bandra West,Novotel Convention Centre Hotel provides complementry.It is situated a brief walk from the Walk of the Stars and Castella de Aguada.Provides wifi and parking facilities."
        
        
            }
    ]        
   

const Serviceus = () => {
    const [selectedId, setSelectedId] = useState(null);

    const toggleDetails = (id) => {
        setSelectedId(prevId => (prevId === id ? null : id));
    };

    return (
        <div>
            <img src={serviceimg} alt="Service" />
            <div className="service">
                <h3 className="title">HandPicked Collections For You</h3>
            </div>

            <div className="main container section">
                <div className="secTitle">
                   
                </div>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => (
                        <div key={id} className="singleDestination">
                            <div className="imageDiv">
                                <img src={imgSrc} alt={destTitle} />
                            </div>

                            <div className="cardInfo">
                                <h2 className="destTitle">{destTitle}</h2>
                                <span className="container flex">
                                    <i className="fa-solid fa-location-dot icon4"></i>
                                    <span className="name">{location}</span>
                                </span>
                                <hr />

                                <div className="fees flex">
                                    <div className="grade">
                                        <span>{grade}<small>+1</small></span>
                                    </div>

                                    <div className="price">
                                        <h5>{fees}</h5>
                                    </div>
                                </div>
                                <hr />

                            
                                {selectedId === id && (
                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                )}

                                <button className="btn flex" onClick={() => toggleDetails(id)}>
                                    DETAILS <i className="fa-solid fa-clipboard-check icon2"></i>
                                </button>

                                {selectedId === id && (
                                    <div className="details-content">
                                        
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                }
                <div className="empty"></div>
            </div>
        </div>
    );
}

export default Serviceus;
