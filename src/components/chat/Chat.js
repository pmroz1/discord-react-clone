import React from 'react'
import MessageList from '../messageList/MessageList'
import './Chat.css'
import CreateMessage from '../createMessage/CreateMessage'

function Chat(props) {
    return (
        <div className="chat-body">
            <div className="chat-container">
                <MessageList
                    messages={props.messages}
                    // test="XD"
                />
            </div>
            <CreateMessage />

        </div>
    )
}

export default Chat
