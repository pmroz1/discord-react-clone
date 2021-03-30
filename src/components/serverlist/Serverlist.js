import React from 'react';
import ServerCard from '../serverCard/ServerCard';
import IconButton from '../iconButton/IconButton';
import './Serverlist.css';

function Serverlist(props) {
    const servers = []
    const buttons = []

    props.serverlist.forEach(element => {
        servers.push({ name: element.name, url: element.imgURL })
    });

    props.buttons.forEach(element => {
        buttons.push({ name: element.name, url: element.imgURL, icon : element.icon })
    });

    return (
        <div className="container-serverlist">
            <p className="title-serverlist"
                style={{ fontSize: props.titleFontSize + "px" }}
            >{props.title}</p>

            <div className="divider-serverlist" />

            {servers.map((server) => (
                <ServerCard
                    imgPath={server.url}
                    name={server.name}
                />
            ))}

            <div className="bottomBar-serverlist">
                {buttons.map((button) => (
                    <IconButton
                        buttonIcon={button.icon}
                        url={button.url}
                        name={button.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default Serverlist
