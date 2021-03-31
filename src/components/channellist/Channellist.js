import React from 'react';
import './Channellist.css'
import ChannelHeader from '../channelHeader/ChannelHeader'

function Channellist(props) {
    const text = []
    const voice = []

    props.textChannelList.forEach(element => {
        text.push({ name: element.channelName, type: element.type })
    });

    props.voiceChannelList.forEach(element => {
        voice.push({ name: element.channelName, type: element.type })
    });

    console.log(text)

    return (
        <div className="container-channellist">
            <div className="header-channellist">
                <div className="titlebox-channellist">
                    <p className="title-channellist">{props.title}</p>
                    <i className={props.arrowIcon}></i>
                    <div className="divider"></div>
                </div>
                <p className="channel-tab">{props.textChannelTitle}</p>
                <div className="">
                    {text.map((dataObj) => (
                        <ChannelHeader
                            text={dataObj.name}
                            type={props.type}
                        />
                    ))}
                </div>

                <div className="">&nbsp;</div>
                <p className="channel-tab">{props.voiceChannelTitle}</p>
                <div className="voice-channels">
                    
                    {voice.map((dataObj) => (
                        <ChannelHeader
                            text={dataObj.name}
                            type={props.type2}
                            icon={props.voiceIcon}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Channellist
