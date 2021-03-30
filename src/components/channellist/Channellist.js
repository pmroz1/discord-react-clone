import React from 'react';
import './Channellist.css'

function Channellist(props) {
    const channels = []

    props.serverlist.forEach(element => {
        servers.push({ name: element.name, url: element.imgURL })
    });

    return (
        <div className="container-channellist">
            <div className="header-channellist">
                <div className="titlebox-channellist">
                    <p className="title-channellist">{props.title}</p>
                    <i className={props.arrowIcon}></i>
                </div>

                {channels.map((channels) => (
                <ChannelHeader
                    imgPath={channels.url}
                    name={channels.name}
                />
            ))}

            </div>
        </div>
    )
}

export default Channellist
