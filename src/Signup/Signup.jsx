
import { useState } from 'react';
import './Signup.css';
import appleimg from "../Assets/Images/appleimg.png";
import googleicon from "../Assets/Images/googleicon.png";

const Signup = ({ isOpen, onClose }) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Form submitted!');
        onClose();
    };

    if (!isOpen) return null;

    return (

        
        
        <div className="popup">
        <div className="popup-content">
            <span className="close" onClick={onClose}>&times;</span>
          
            <form onSubmit={handleSubmit}>
            <div style={{fontSize:"30px",paddingBottom:"20px"}}><b>Sign-Up</b></div>
                <div style={{color: "red", fontSize: "15px"}}>Sign in to avail exciting discounts and cashbacks!!</div><br />
    
               
                <div className="input-container">
                    <i className="fas fa-envelope icon"></i>
                    <input
                        type="email"
                        id="email"
                        placeholder='Enter Your Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
    
                <div className="input-container">
                    <i className="fas fa-lock icon"></i>
                    <input
                        type="password"
                        id="password"
                        placeholder='Enter Your Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                
                <p className='separatorline'><span>or</span></p>

                <div>
                <button className='social-button'>
                    <img src={googleicon} className='social-icon'/>Google
                </button><br />
                <button className='social-button'>
                    <img src={appleimg} className='social-icon'/>Apple
                </button>
                </div>
    
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
    
    );
};

export default Signup;






