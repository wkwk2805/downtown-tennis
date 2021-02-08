import React from 'react'

const Text = ({text, size, weight, family, color}) => {
    return (
        <div style={{
            fontFamily: family || "AppleSDGothicNeoEB",
            fontWeight: weight || 400,
            fontSize: size || '1em',
            letterSpacing:"1px",
            color: color || 'black'
        }}>
            {text}
        </div>
    )
}

export default Text
