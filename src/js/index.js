//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components

import PropTypes from "prop-types"

function SimpleCounter (props)  {
    	
    // Aquí pongo el html que necesito
    return (
        <div className="container d-flex bg-black justify-content-center mt-3 rounded">
           <div className="card me-2 bg-dark m-3" style={{width: "13rem", height: "180px"}}>
              <div className="card-body">
                <h5 className="card-title h-50 text-center" style={{ fontSize: "80px", color:"white"}}>{props.digitOne}</h5>   
              </div>
           </div>
           <div className="card me-2 bg-dark m-3" style={{width: "13rem", height: "180px"}}>
              <div className="card-body">
                <h5 className="card-title h-50 text-center" style={{ fontSize: "80px", color:"white"}}>{props.digitTwo}</h5>   
              </div>
           </div>
           <div className="card me-2 bg-dark m-3" style={{width: "13rem", height: "180px"}}>
              <div className="card-body">
                <h5 className="card-title h-50 text-center" style={{ fontSize: "80px", color:"white"}}>{props.digitThree}</h5>   
              </div>
           </div>
           <div className="card me-2 bg-dark m-3" style={{width: "13rem", height: "180px"}}>
              <div className="card-body">
                <h5 className="card-title h-50 text-center" style={{ fontSize: "80px", color:"white"}}>{props.digitFour}</h5>   
              </div>
           </div>
        </div>
)
}
    // 1.Aqui pongo el js
    let counter = 0
	setInterval(function() {
		const one = Math.floor(counter/1000)
		const two = Math.floor(counter/100)
		const three = Math.floor(counter/10)
		const four = Math.floor(counter/1)
		counter++
		console.log(one, two, three, four)
        ReactDOM.render(
            <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />,
            document.querySelector('#app')
        )
	}, 1000);
	


SimpleCounter.propTypes = {
digitFour : PropTypes.number,
digitThree : PropTypes.number,
digitTwo : PropTypes.number,
digitOne : PropTypes.number,
}



//render your react application
