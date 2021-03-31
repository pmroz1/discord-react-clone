import React from 'react'
import { useState } from 'react';
import './TopBar.css'

function useForceUpdate() {
    let [value, setState] = useState(true);
    console.log("click")
    isMutted = !isMutted
    return () => setState(!value);
}

let isMutted = false

function TobBar(props) {

    let forceUpdate = useForceUpdate();

    //    this.setCount = ()=>{
    //        console.log(count)
    //    }

    return (
        <div className="top-bar-bkg">
            <div className="top-bar-container">
                <p className="top-bar-text">&nbsp;&nbsp;active channel: &nbsp;</p>
                <div className="top-bar-text">
                    {props.text}
                </div>
            </div>
            <div className="top-bar-icons">
                <i className={props.userIcon} id="top-bar-userIcon1"></i>
                <i className={props.pinIcon} id="top-bar-userIcon2"></i>
                {
                    isMutted ?
                        <i className={props.bellIcon} id="top-bar-userIcon3" onClick={forceUpdate}></i>
                        :
                        <i className={props.bellIconOff} id="top-bar-userIcon3" onClick={forceUpdate}></i>
                }
            </div>
            <div className="top-bar-search">
                <div className="top-bar-bar-serachbox">
                    <p className="serach-text">wyszukaj</p>
                    <i className={props.searchIcon} id="top-bar-searchIcon"></i>
                </div>
            </div>
            <i className={props.helpIcon} id="top-bar-userIcon4"></i>
        </div>
    )
}

export default TobBar
