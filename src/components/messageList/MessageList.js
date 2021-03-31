// import { render } from '@testing-library/react'/
import React from 'react'


class MessageList extends React.Component {
    constructor(props) {
        super(props)
        // this.state = { message: false }

    }
    render() {
        return (
            <div className="message-list">
                {this.props.test}
            </div>
        )
    }
}

export default MessageList

