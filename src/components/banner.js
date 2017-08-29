import React, { Component } from 'react'

import ShareBlock from './share_block'

const bannerCss = {
    textDecoration: 'none'
}

class Banner extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div>
                <a href={this.props.link} target="_blank" style={bannerCss}>
                    <div id={this.props.banner_id} className="banner">
                        <div className="banner-text">{this.props.text}</div>
                        <div className="banner-button">{this.props.button_text}</div>
                    </div>
                </a>
                <div className="container">
                    <ShareBlock />
                    <div className="img-say">{this.props.img_say}</div>
                </div>
            </div>
        )
    }
}

export default Banner