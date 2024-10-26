

import "./Footer.css"

const Footer =()=>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1 style={{fontFamily:"serif"}}>Make a Memory</h1>
                    <p>Choose Your Favourite Destination</p>
                </div>
                <div>
                    <a href="./">
                    <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="./">
                    <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="./">
                    <i className="fa-brands fa-behance-square"></i>
                    </a>
                    <a href="./">
                    <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
            </div>
                 
                 <div className="bottom">
                    <div>
                        <h4>Terms and settings</h4>
                        <a href="/">Privacy & cookies</a>
                        <a href="/">Terms and conditions</a>
                        <a href="/">Grievance officer</a>
                        <a href="/">Modern Slavery Statement</a>
                        
                    </div>

                    <div>
                        <h4>Discover</h4>
                        <a href="/">Genius loyalty programme</a>
                        <a href="/">Seasonal and holiday deals</a>
                        <a href="/">Travel articles</a>
                        <a href="/">Traveller Review Awards</a>
                        
                    </div>

                    <div>
                        <h4>About</h4>
                        <a href="/">About Booking.com</a>
                        <a href="/">Investor relations</a>
                        <a href="/">Corporate contact</a>
                        <a href="/">Careers</a>
                        <a href="/">Sustainability</a>
                    
                        
                    </div>


                    <div>
                        <h4>Partners</h4>
                        <a href="/">Extranet login</a>
                        <a href="/">Partner help</a>
                        <a href="/">List your property</a>
                        <a href="/">Become an affiliate</a>
                        
                    
                        
                    </div>

                   

                 </div>
        </div>
    )
}

export default Footer;