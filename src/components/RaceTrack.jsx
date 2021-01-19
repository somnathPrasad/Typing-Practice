import React,{useState} from 'react'
import car1 from "../images/car1.png"
import car2 from "../images/car2.png"

function RaceTrack() {

    // const [letterActive, setletterActive] = useState([{
    //     letter:"",
    //     isActive:false
    // }])

 


    return (
        <div className="race-track">
            <img className="race-car" id="car" src={car2} style={{left:"0"}} />
        </div>
    )
}

export default RaceTrack;
