import React, { Component } from 'react'

import Img from 'react-image'

import nmd_logo from 'assets/nmd_logo.png'
import udn_logo from 'assets/udn_logo.png'
import shopping_logo from 'assets/shopping_logo.png'

class LogoBlock extends Component {
    render(){
        return(
            <div className="logo-contain container">
                <Img src={nmd_logo} />
                <Img className="udn-logo" src={udn_logo} />
                <Img src={shopping_logo} />
            </div>
        )
    }
}

export default LogoBlock