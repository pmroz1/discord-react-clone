import React from 'react'
import MessageList from '../messageList/MessageList'
import './Chat.css'

function Chat(props) {
    return (
        <div className="chat-body">
            <div className="chat-container">
                <MessageList
                    messages={props.messages}
                    test="XD"
                />
            </div>

        </div>
    )
}

export default Chat
