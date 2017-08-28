import React, { Component } from 'react'
import { Player } from 'video-react'

import "../../node_modules/video-react/dist/video-react.css";

import ShareBlock from './share_block'

import wind from 'assets/wind.mp4'

class StarContent extends Component{
    render() {
        return (
            <div className="container content">
                <div className="step pink">Step2 : 探索自己偏執面</div>
                <h2>維持理念的偏執：天秤、射手、水瓶</h2>
                <div className="row">
                    <div className="col-md-7">
                        <Player
                            playsInline
                            poster="/assets/poster.png"
                            src={wind}
                        />
                        <ShareBlock />
                    </div>
                    <div className="col-md-5">
                        <p><b>偏執解碼:</b></p>
                        <p>重視理念的價值觀，跟有這種傾向的你們相處，原則可以討論但別想撼動。</p>
                        <p><br/></p>
                        <p><b>偏執指數:</b></p>
                        <p>★★★★★（重度）：天秤座、射手座、水瓶座</p>
                        <p><br/></p>
                        <p>★★★★（中度）：金牛座、天蠍座，你們對理念表面無所謂，但骨子霸道不服氣</p>
                        <p><br/></p>
                        <p>★★★（輕度）：牡羊座、獅子座，你們是那種「放棄吧！我的想法很難改變」的人。</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default StarContent