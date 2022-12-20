import React from "react";


function Contant(props) {
    return(
        <div className="big-contant">
        <div className="contant">
            <h3>Best Shoping Super Market</h3>
            <p>Waxaad Kaheli Kartaa Wax Walba Oo <br /> Shopin ah sida <span className="haylat">Dharka  </span>,
            <span className="haylat"> Kabaha</span> Iyo <br /> <span className="haylat">Wax Yaabaha Guryaha</span> iyo 
            wax yabaha <span className="haylat">Dumarka  </span></p>
            </div>
            
                <img src={props.sawir} alt="sawir" />
        </div>
    )
}

export default Contant;