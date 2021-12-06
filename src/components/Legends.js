import React from 'react'

function Legends(props){
    return(
        <div>
            {props.leg_data.map(x => (
                <div className="clear">
                    <span className="reactnagle" style={{background:x.color}}></span>
                    {x.name}
                </div>
            ))}
                 {/* <div className="clear"><span className="reactnagle"></span>Auto</div>
        <div className="clear"><span className="reactnagle"></span>Motorcycle</div>
        <div className="clear"><span className="reactnagle"></span>RV</div>
        <div className="clear"><span className="reactnagle"></span>Water Craft</div>
        <div className="clear"><span className="reactnagle"></span>N/A</div> */}
        </div>
       
    )
}

export default Legends