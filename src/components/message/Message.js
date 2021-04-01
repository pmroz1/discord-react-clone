import React from 'react'
import { useState } from 'react';
import './Message.css'

function useForceUpdate() {
    let [value, setState] = useState(true);
    // console.log(document.getElementById("edit-container").innerHTML)
    showEdit = !showEdit
    if (showEdit == false) {
        // document.getElementById("edit-container").style.visibility="visible"
        return () => setState(!value);
    }
}

let showEdit = false


function Message(props) {

    let forceUpdate = useForceUpdate();


    return (
        <div className="message-container"
            onMouseOver={forceUpdate}
        >
            <div id="edit-container">edit</div>

            <div className="message-left">
                <img className="message-img" src={process.env.PUBLIC_URL + '/assets/icons/' + props.iconURL} />
            </div>
            <div className="message-right">
                <p className="message-author" style={{ color: props.authorColor }}>
                    {props.author}
                </p>
                <p>
                    {props.value}
                </p>

            </div>

        </div>
    )
}

export default Message


{/* <div className="message-title">
<img className="message-img" src={process.env.PUBLIC_URL + '/assets/icons/' + props.iconURL} />
<p className="message-author" style={{ color: props.authorColor }}>
    {props.author}
</p>
</div>
<p>
{props.value}
</p> */}