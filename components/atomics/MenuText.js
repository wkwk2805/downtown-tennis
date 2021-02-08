import React from 'react'
import Link from 'next/link'

const MenuText = ({text, active, href}) => {
    return (
        <Link href={href||'home'}>
            <div style={{
                fontFamily: active ? "AppleSDGothicNeoEB":'AppleSDGothicNeoL',
                fontWeight: 600,
                fontSize:'0.9em',
                letterSpacing:"1px",
                marginBottom:"0.3em",
                cursor:'pointer',
            }}
            >
                {text}
            </div>
        </Link>
    )
}

export default MenuText
