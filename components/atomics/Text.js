import React from 'react'

const Text = ({text, size, weight}) => {
    return (
        <div style={{
            fontFamily: "AppleSDGothicNeoEB",
            fontWeight: weight || 400,
            fontSize: size || '1em',
            letterSpacing:"1px",
        }}>
            {text}
        </div>
    )
}

export default Text
