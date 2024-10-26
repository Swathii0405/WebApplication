

import React from "react";
import "./Destination.css";

class DestinationData extends React.Component{
render(){
    return(
        <div>
            <div className={this.props.className}>
         <div className="des-text">
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}</p>
         </div>

         <div className="image">
         <img src={this.props.img1} alt="img"/>
         <img src={this.props.img2} alt="img"/>
         </div>
        </div>
        </div>
    )
}
}

export default DestinationData;