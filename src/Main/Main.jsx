
import "./Main.css";
import "./Booking.css";
import React, { useState } from "react";

const Main = (props) => {
  const [bookingSuccess, setBookingSuccess] = useState(false);

  
  const handleBooking = () => {
    setBookingSuccess(true);  
    setTimeout(() => {
      setBookingSuccess(false); 
    }, 3000);  
  };

  return (
    <>
      <div className={props.cName}></div>
      <div className="main-text">
        <h1>{props.tittle}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>
          {props.buttonText}
        </a>

        <div className="empty1"></div>
        <section>
          <div className="container">
            <div className="form-wrapper">
              <form className="des-durations">
                
                <input type="date" className="form-control" />
                <select className="form-control">
                  <option value="Destination">Destination</option>
                  <option value="Paris">Paris</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Switzerland">Switzerland</option>
                </select>
                <select className="form-control">
                  <option value="Duration">Duration</option>
                  <option value="2-4 Days">2-4 Days Tour</option>
                  <option value="5-7 Days">5-7 Days Tour</option>
                  <option value="7+ Days">7+ Days</option>
                </select>

                
                <button type="button" className="book-now-btn" onClick={handleBooking}>
                  Book Now
                </button>
              </form>

              
              {bookingSuccess && <div id="booking-message">Booking Successfully!</div>}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Main;
