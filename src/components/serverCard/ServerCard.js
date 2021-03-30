import React from 'react'
import './ServerCard.css'

function ServerCard(props) {
    return (
        <div className="card-container" >
            <img className="card-image" src={process.env.PUBLIC_URL + '/assets/img/' + props.imgPath } alt={props.name} />
            {/* <p>{props.name}</p> */}
        </div>
    )
}

export default ServerCard