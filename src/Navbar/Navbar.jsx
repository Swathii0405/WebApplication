

import "./Navbar.css";
import { Menu } from "../Menu/Menu";
import { Link } from "react-router-dom";
import makeamemorylogo from "../Assets/Images/makeamemorylogo.webp"
import Signup from "../Signup/Signup";
import { useState } from "react";

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const [isPopupOpen, setPopupOpen] = useState(false);
   

    const handleClick = () => {
        
        setClicked((prevClicked) => !prevClicked);
    };


    const openPopup = () => setPopupOpen(true);
    const closePopup = () => setPopupOpen(false);

    return (
        <nav className="NavbarItems">
            <img src={makeamemorylogo} style={{ width: "150px", height: "90px" }} alt="Logo" />

             <div className="menu-icons" onClick={handleClick}>
                 <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                 
            
            </div> 

            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {Menu.map((item, index) => (
                    <li key={index}>
                        <Link className={item.cName} to={item.url}>
                            <i className={item.icon}></i>
                            {item.title}
                        </Link>
                    </li>
                ))}
                <button onClick={openPopup}>Sign Up</button>
            </ul>
            <Signup isOpen={isPopupOpen} onClose={closePopup} />
        </nav>
    );
};

export default Navbar;

































// import "./Navbar.css";
// import { Menu } from "../Menu/Menu";
// import { Link } from "react-router-dom";
// import makeamemorylogo from "../Assets/Images/makeamemorylogo.webp";
// import Signup from "../Signup/Signup";
// import { useState } from "react";

// const Navbar = () => {
//     const [clicked, setClicked] = useState(false);
//     const [isPopupOpen, setPopupOpen] = useState(false);

//     const handleClick = () => {
//         setClicked((prevClicked) => !prevClicked);
//     };

//     const openPopup = () => setPopupOpen(true);
//     const closePopup = () => setPopupOpen(false);

//     return (
//         <nav className="NavbarItems">
//             <img src={makeamemorylogo} style={{ width: "150px", height: "90px" }} alt="Logo" />

//             <div className="menu-icons" onClick={handleClick}>
//                 <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
//             </div>

//             <ul className={clicked ? "nav-menu active" : "nav-menu"}>
//                 {Menu.map((item, index) => (
//                     <li key={index}>
//                         <Link className={item.cName} to={item.url}>
//                             <i className={item.icon}></i>
//                             {item.title}
//                         </Link>
//                     </li>
//                 ))}
//                 <button onClick={openPopup}>Sign Up</button>
//             </ul>
//             <Signup isOpen={isPopupOpen} onClose={closePopup} />
//         </nav>
//     );
// };

// export default Navbar;






