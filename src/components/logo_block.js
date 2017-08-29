import React, { Component } from 'react'

import Img from 'react-image'

import nmd_logo from 'assets/nmd_logo.png'
import udn_logo from 'assets/udn_logo.png'
import shopping_logo from 'assets/shopping_logo.png'

class LogoBlock extends Component {
    render(){
        return(
            <div className="logo-contain container">
                <div className="logo-img">
                    <a href="https://shopping.udn.com/mall/Cc1a00.do" target="_blank">
                        <Img src={shopping_logo} />
                    </a>
                </div>
                <div className="logo-img">
                    <a href="https://udn.com/news/index" target="_blank">
                        <Img className="udn-logo" src={udn_logo} />
                    </a>
                </div>
                <div className="logo-img">
                    <a href="https://udn.com/upf/newmedia/udn_newmedia/" target="_blank">
                        <Img src={nmd_logo} />
                    </a>
                </div>
            </div>
        )
    }
}

export default LogoBlock