import React from 'react'

const Logo = ({url}) => {
    return <img src={url || './logos/logo.png'} style={{width:'5vw', height:'5vw'}}/>
}

export default Logo
