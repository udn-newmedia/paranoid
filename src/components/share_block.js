import React, { Component } from 'react'

import Utils from '../utils/utils'

class ShareBlock extends Component{
    constructor() {
        super()
        this.lineShare = this.lineShare.bind(this)
        this.ismob = Utils.detectMob()
    }
    lineShare() {
        var title = $('title').text()
        var platform = (Utils.detectMob() == true) ? 'Mob' : 'PC'
        window.open("https://lineit.line.me/share/ui?url="+window.location.href);
        ga("send", {
			"hitType": "event",
			"eventCategory": "Line Share",
			"eventAction": "click",
			"eventLabel": "[" + platform + "] [" + title + "] [line share]"
		});
    }
    render() {
        return (
            <div className="share-block">
                <div className="fb-like-block">
                    <div className="fb-like" data-href={this.props.link} data-layout="button_count" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
                </div>
                <div className="line-block" onClick={this.lineShare}>
                    <img className="line-share" src="//media.line.me/img/button/zh-hant/84x20.png" width="86" height="22" alt="LINE分享給朋友"/>
                </div>
            </div>
        )
    }
}

export default ShareBlock