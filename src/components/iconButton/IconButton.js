import React from 'react'
import "./IconButton.css"

function IconButton(props) {
    return (
        <div className="icon-button-container">
             <i className={props.buttonIcon} id="icon-id"/>
        </div>
    )
}

export default IconButton
