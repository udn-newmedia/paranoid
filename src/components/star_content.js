import React, { Component } from 'react'
import { Player } from 'video-react'

import "../../node_modules/video-react/dist/video-react.css";

import ShareBlock from './share_block'

import fire from 'assets/fire.mp4'
import water from 'assets/water.mp4'
import wind from 'assets/wind.mp4'
import earth from 'assets/earth.mp4'

class StarContent extends Component{
    render() {
        if(this.props.select == 'wind'){
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
        else if(this.props.select == 'fire'){
            return (
                <div className="container content">
                    <div className="step pink">Step2 : 探索自己偏執面</div>
                    <h2>使命必達的工作偏執：牡羊、獅子、摩羯</h2>
                    <div className="row">
                        <div className="col-md-7">
                            <Player
                                playsInline
                                poster="/assets/poster.png"
                                src={fire}
                            />
                            <ShareBlock />
                        </div>
                        <div className="col-md-5">
                            <p><b>偏執解碼:</b></p>
                            <p>工作使命必達的偏執，有這種傾向的你們事業心很重，對於工作使命必達，是標準的忙起來就是工作狂的類型。</p>
                            <p><br/></p>
                            <p><b>偏執指數:</b></p>
                            <p>★★★★★（重度）：羊座、獅子座、摩羯座</p>
                            <p><br/></p>
                            <p>★★★★（中度）：處女座、水瓶座，專業技能的養成企圖，是你持續往上的動力</p>
                            <p><br/></p>
                            <p>★★★（輕度）：射手座、天蠍座，為了讓生活更自在，以達到事業成就為手段。</p>
                        </div>
                    </div>
                </div>
            )
        }
        else if(this.props.select == 'water'){
            return (
                <div className="container content">
                    <div className="step pink">Step2 : 探索自己偏執面</div>
                    <h2>戀愛優先的感情偏執： 處女、天蠍、雙魚</h2>
                    <div className="row">
                        <div className="col-md-7">
                            <Player
                                playsInline
                                poster="/assets/poster.png"
                                src={water}
                            />
                            <ShareBlock />
                        </div>
                        <div className="col-md-5">
                            <p><b>偏執解碼:</b></p>
                            <p>戀愛就是的一切，你們認為能在情場上獲得滿足與勝利的人，才算人生勝利組。</p>
                            <p><br/></p>
                            <p><b>偏執指數:</b></p>
                            <p>★★★★★（重度）：處女座、天蠍座、雙魚座</p>
                            <p><br/></p>
                            <p>★★★★（中度）：巨蟹座、獅子座 ，被重視的感覺是你人生必需品</p>
                            <p><br/></p>
                            <p>★★★（輕度）：天秤座、摩羯座，婚姻是你人生成就清單前幾順位。</p>
                        </div>
                    </div>
                </div>
            )
        }
        else if(this.props.select == 'earth'){
            return (
                <div className="container content">
                    <div className="step pink">Step2 : 探索自己偏執面</div>
                    <h2>注重日常的偏執：金牛、巨蟹、雙子</h2>
                    <div className="row">
                        <div className="col-md-7">
                            <Player
                                playsInline
                                poster="/assets/poster.png"
                                src={earth}
                            />
                            <ShareBlock />
                        </div>
                        <div className="col-md-5">
                            <p><b>偏執解碼:</b></p>
                            <p>別人看來不起眼的生活小事，對有這種傾向的你們來說，卻是每天都會接觸到、感受最深的事情，怎能不重視呢？</p>
                            <p><br/></p>
                            <p><b>偏執指數:</b></p>
                            <p>★★★★★（重度）：牛座、雙子座、巨蟹座</p>
                            <p><br/></p>
                            <p>★★★★（中度）：處女座、天秤座，你堅持生活就是要過得很有質感。</p>
                            <p><br/></p>
                            <p>★★★（輕度）：雙魚座，你認為日常小事的每個滋味要好好體會。</p>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return null
        }
        
    }
}

export default StarContent