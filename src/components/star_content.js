import React, { Component } from 'react'
import { Player } from 'video-react'

import "../../node_modules/video-react/dist/video-react.css";

import ShareBlock from './share_block'

import fire from 'assets/fire.mp4'
import water from 'assets/water.mp4'
import wind from 'assets/wind.mp4'
import earth from 'assets/earth.mp4'

import firePoster from 'assets/fire.jpg'
import waterPoster from 'assets/water.jpg'
import windPoster from 'assets/wind.jpg'
import earthPoster from 'assets/earth.jpg'

import Utils from '../utils/utils'

class StarContent extends Component{
    constructor(props){
        super(props)
        this.content = {
            1: {

            },
            wind: {
                h2: '維持理念的偏執：天秤、射手、水瓶',
                poster: windPoster,
                video: wind,
                content1: '重視理念的價值觀，跟有這種傾向的你們相處，原則可以討論但別想撼動。',
                content2: '★★★★★（重度）：天秤座、射手座、水瓶座',
                content3: '★★★★（中度）：金牛座、天蠍座，你們對理念表面無所謂，但骨子霸道不服氣',
                content4: '★★★（輕度）：牡羊座、獅子座，你們是那種「放棄吧！我的想法很難改變」的人。'
            },
            fire: {
                h2: '使命必達的工作偏執：牡羊、獅子、摩羯',
                poster: firePoster,
                video: fire,
                content1: '工作使命必達的偏執，有這種傾向的你們事業心很重，對於工作使命必達，是標準的忙起來就是工作狂的類型。',
                content2: '★★★★★（重度）：牡羊座、獅子座、摩羯座',
                content3: '★★★★（中度）：處女座、水瓶座，專業技能的養成企圖，是你持續往上的動力',
                content4: '★★★（輕度）：射手座、天蠍座，為了讓生活更自在，以達到事業成就為手段。'
            },
            water: {
                h2: '戀愛優先的感情偏執：處女、天蠍、雙魚',
                poster: windPoster,
                video: wind,
                content1: '戀愛就是的一切，你們認為能在情場上獲得滿足與勝利的人，才算人生勝利組。',
                content2: '★★★★★（重度）：處女座、天蠍座、雙魚座',
                content3: '★★★★（中度）：巨蟹座、獅子座，被重視的感覺是你人生必需品',
                content4: '★★★（輕度）：天秤座、摩羯座，婚姻是你人生成就清單前幾順位。'
            },
            earth: {
                h2: '注重日常的偏執：金牛、巨蟹、雙子',
                poster: windPoster,
                video: wind,
                content1: '別人看來不起眼的生活小事，對有這種傾向的你們來說，卻是每天都會接觸到、感受最深的事情，怎能不重視呢？',
                content2: '★★★★★（重度）：金牛座、雙子座、巨蟹座',
                content3: '★★★★（中度）：處女座、天秤座，你堅持生活就是要過得很有質感。',
                content4: '★★★（輕度）：雙魚座，你認為日常小事的每個滋味要好好體會。'
            }
        }
    }
    componentDidMount() {
        FB.XFBML.parse()
    }
    render() {
            if(Utils.detectIE()){
                return (
                    <div id="star-content" className="container content">
                        <div className="step pink">Step2 : 探索自己偏執面</div>
                        <h2>{this.content[this.props.select].h2}</h2>
                        <div className="row">
                            <div className="col-md-7">
                                <video
                                    controls
                                    playsInline
                                    poster={this.content[this.props.select].poster}
                                    src={this.content[this.props.select].video}
                                />
                                <ShareBlock link="https://udn.com/upf/newmedia/2017_data/paranoid/star.html"/>
                            </div>
                            <div className="col-md-5">
                                <p><b>偏執解碼:</b></p>
                                <p>{this.content[this.props.select].content1}</p>
                                <p><br/></p>
                                <p><b>偏執指數:</b></p>
                                <p>{this.content[this.props.select].content2}</p>
                                <p><br/></p>
                                <p>{this.content[this.props.select].content3}</p>
                                <p><br/></p>
                                <p>{this.content[this.props.select].content4}</p>
                            </div>
                        </div>
                    </div>
                )
            }
            else{
                return (
                    <div id="star-content" className="container content">
                        <div className="step pink">Step2 : 探索自己偏執面</div>
                        <h2>{this.content[this.props.select].h2}</h2>
                        <div className="row">
                            <div className="col-md-7">
                                <Player
                                    playsInline
                                    poster={this.content[this.props.select].poster}
                                    src={this.content[this.props.select].video}
                                />
                                <ShareBlock />
                            </div>
                            <div className="col-md-5">
                                <p><b>偏執解碼:</b></p>
                                <p>{this.content[this.props.select].content1}</p>
                                <p><br/></p>
                                <p><b>偏執指數:</b></p>
                                <p>{this.content[this.props.select].content2}</p>
                                <p><br/></p>
                                <p>{this.content[this.props.select].content3}</p>
                                <p><br/></p>
                                <p>{this.content[this.props.select].content4}</p>
                            </div>
                        </div>
                    </div>
                )
            }
            
    }
}

export default StarContent