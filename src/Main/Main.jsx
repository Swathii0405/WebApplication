
import "./Main.css";
const Main =(props)=>{

    return(
        <>
       <div className={props.cName}>
       </div>
        <div className="main-text">
            <h1>{props.tittle}</h1>
            <p>{props.text}</p>
            <a href={props.url}className={props.btnClass}>
                {props.buttonText}
            </a>

             <div className="empty1"></div>

                    <section id="location-search">
                    <div claassName="container">
                        <div className="form-wrapper">
                            <form className="des-duration">
                                <input type="Date"className="form-control"/>
                                <select className="form-control">
                                  <div className="empty2"></div>
                                <option value="Destination">Destination</option>
                                <option value="Destination">Paris</option>
                                <option value="Destination">Maldives</option>
                                <option value="Destination">Switzerland</option>
                                </select>


                                <select className="form-control">
                                <div className="empty2"></div>
                                <option value="Duration">Duration</option>
                                <option value="2-4 Days">2-4 Days Tour</option>
                                <option value="5-7 Days">5-7 Days Tour</option>
                                <option value="7+ Days">7+ Days</option>
                                </select>

                            </form>

                        </div>

                    </div>
                   

                </section> 
                {/* <button claassName="sear-btn">Search Now</button> */}

               
 




</div>
        </>
    )
}

export default Main;