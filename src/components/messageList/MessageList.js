import React from 'react'
import { configuration } from '../../configuration'
import Message from '../message/Message'
import './MessageList.css'

function MessageList() {
    const messages = []
    // console.log("ha")

    configuration.Messages.forEach(element => {
        messages.push({
            channelName: element.channelName,
            iconURL: element.iconURL,
            author: element.author,
            authorColor: element.authorColor,
            value: element.value
        })
    });

    return (
        <div className="message-list">
            {messages.map((dataObj) => (
                <Message
                    author={dataObj.author}
                    authorColor={dataObj.authorColor}
                    value={dataObj.value}
                    iconURL={dataObj.iconURL}
                />
            ))}
        </div>
    )
}

export default MessageList

