import React from 'react'

function Message(props) {
    return (
        <div>
            <h2> {props.useraname}: {props.text}</h2>    
        </div>
    )
}

export default Message
