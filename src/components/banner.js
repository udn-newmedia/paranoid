import React, { Component } from 'react'

import ShareBlock from './share_block'
import Utils from '../utils/utils'

const bannerCss = {
    textDecoration: 'none'
}

class Banner extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        var title = $('title').text()
        var platform = (Utils.detectMob() == true) ? 'Mob' : 'PC'
        console.log(platform)
        $('#banner a').click(function(){
            ga("send", {
                "hitType": "event",
                "eventCategory": "超連結點擊",
                "eventAction": "click",
                "eventLabel": "[" + platform + "] [" + title + "] [" + $(this).attr('href') + "] [banner]"
            });
            console.log("eventLabel : " + "[" + platform + "] [" + title + "] [" + $(this).attr('href') + "] [banner]")
        })
    }
    render() {
        return(
            <div id="banner">
                <a href={this.props.link} target="_blank" style={bannerCss}>
                    <div id={this.props.banner_id} className="banner">
                        <div className="banner-text">
                            {this.props.text.split('<br />').map(function(item, key) {
                                return (
                                <span key={key}>
                                    {item}
                                    <br/>
                                </span>
                                )
                            })}
                        </div>
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