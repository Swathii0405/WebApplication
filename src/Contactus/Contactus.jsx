

import "./Contactus.css";
const Contactus =()=>{
    return(

      
       <div>
                   

             <div className="from-container">
            <h1>Send a message to us!</h1>
             <form>
             <div className="input-container">
             <i className="fas fa-user icon3"></i>
                 <input type="text"placeholder="Name"/></div> 

                 <div className="input-container">
                 <i className="fas fa-envelope icon3"></i>
                 <input type="email"placeholder="E-mail"/></div>

                 <div className="input-container">
                 <i className="fas fa-lock icon3"></i>
                 <input type="password"placeholder="Password"/></div>

                 
                  <textarea name="" id=""placeholder="Enter Your Message"rows={4}></textarea>
                
                 <button style={{marginTop:"20px"}}> Send Message<i class="fa-solid fa-paper-plane icon1"></i></button>
           </form>

         </div>  

       </div>
       
    )
}

export default Contactus;










 