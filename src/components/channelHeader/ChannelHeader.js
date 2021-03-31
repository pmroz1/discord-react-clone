import React from 'react'
import './ChannelHeader.css'

function ChannelHeader(props) {
    if (props.type == "text") {
        console.log("TEXT")
        return (
            <div className="channel-name-text">
                {"#  " + props.text}
            </div>
        )
    } else {
        console.log(props.icon)
        return (
            <div className="channel-name-voice">
                <i className={props.icon}>&nbsp;</i>
                
                {props.text}
            </div>
        )
    }
}

export default ChannelHeader
