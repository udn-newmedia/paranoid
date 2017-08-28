import React, { Component } from 'react'

import Img from 'react-image'

import wind1 from 'assets/img03_1.jpg'
import wind2 from 'assets/img03_2.jpg'
import wind3 from 'assets/img03_3.jpg'

import star from 'assets/start_web.jpg'

class StarLink extends Component{
    render() {
        return(
            <div id="star-link" className="container content">
                <div className="step pink">Step3 : 對的情境，解決你的偏執焦慮！</div>
                <h2>維持理念的偏執：</h2>
                <div className="row">
                    <div className="col-md-6 star-link-contain">
                        <div className="star-link-text gray">重度 ★★★★★<br/>天秤座、射手座、水瓶座</div>
                        <p className="star-link-subtext gray">原則讓你喘不過氣？暫時放下吧！</p>
                        <div className="star-link-button pink">深入分析</div>
                    </div>
                    <div className="col-md-6">
                        <Img src={wind1} />
                    </div>
                    <div className="col-md-6 mt-30 star-link-contain">
                        <div className="star-link-text gray">中度 ★★★★<br/>金牛座、天蠍座</div>
                        <p className="star-link-subtext gray">碰上不服氣的事？來點美食紓解</p>
                        <div className="star-link-button pink">深入分析</div>
                    </div>
                    <div className="col-md-6 mt-30">
                        <Img src={wind2} />
                    </div>
                    <div className="col-md-6 mt-30 star-link-contain">
                        <div className="star-link-text gray">輕度 ★★★<br/>牡羊座、獅子座</div>
                        <p className="star-link-subtext gray">意見拉扯很累？下午茶恢復元氣</p>
                        <div className="star-link-button pink">深入分析</div>
                    </div>
                    <div className="col-md-6 mt-30">
                        <Img src={wind3} />
                    </div>
                </div>
                <div className="mt-50 other-contain">
                    <Img src={star} />
                    <div>
                        <span className="other-text gray">看其他偏執星座</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default StarLink