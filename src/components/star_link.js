import React, { Component } from 'react'

import Img from 'react-image'

import fire1 from 'assets/img01_1.jpg'
import fire2 from 'assets/img01_2.jpg'
import fire3 from 'assets/img01_3.jpg'
import water1 from 'assets/img02_1.jpg'
import water2 from 'assets/img02_2.jpg'
import water3 from 'assets/img02_3.jpg'
import wind1 from 'assets/img03_1.jpg'
import wind2 from 'assets/img03_2.jpg'
import wind3 from 'assets/img03_3.jpg'
import earth1 from 'assets/img04_1.jpg'
import earth2 from 'assets/img04_2.jpg'
import earth3 from 'assets/img04_3.jpg'

import star from 'assets/start_web.jpg'

class StarLink extends Component{
    constructor(props){
        super(props)
        this.selectStar = this.selectStar.bind(this)
    }
    selectStar(){
        console.log(this.props)
        this.props.onSelectStar(1);
    }
    render() {
        if(this.props.select == 'wind'){
            return(
                <div id="star-link" className="container content">
                    <div className="step pink">Step3 : 如何舒緩你的理念偏執！</div>
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
                    <div className="mt-150 other-contain" onClick={this.selectStar}>
                        <Img src={star} />
                        <div>
                            <span className="other-text gray">看其他偏執星座</span>
                        </div>
                    </div>
                </div>
            )
        }
        else if(this.props.select == 'fire'){
            return(
                <div id="star-link" className="container content">
                    <div className="step pink">Step3 : 如何舒緩你的工作偏執！</div>
                    <div className="row">
                        <div className="col-md-6 star-link-contain">
                            <div className="star-link-text gray">重度 ★★★★★<br/>牡羊座、獅子座、摩羯座</div>
                            <p className="star-link-subtext gray">造專屬零工作空間</p>
                            <div className="star-link-button pink">深入分析</div>
                        </div>
                        <div className="col-md-6">
                            <Img src={fire1} />
                        </div>
                        <div className="col-md-6 mt-30 star-link-contain">
                            <div className="star-link-text gray">中度 ★★★★<br/>處女座、水瓶座</div>
                            <p className="star-link-subtext gray">好好跟自己對話 才能繼續精進</p>
                            <div className="star-link-button pink">深入分析</div>
                        </div>
                        <div className="col-md-6 mt-30">
                            <Img src={fire2} />
                        </div>
                        <div className="col-md-6 mt-30 star-link-contain">
                            <div className="star-link-text gray">輕度 ★★★<br/>射手座、天蠍座</div>
                            <p className="star-link-subtext gray">立即慶祝 紓解追成就的壓力</p>
                            <div className="star-link-button pink">深入分析</div>
                        </div>
                        <div className="col-md-6 mt-30">
                            <Img src={fire3} />
                        </div>
                    </div>
                    <div className="mt-150 other-contain" onClick={this.selectStar}>
                        <Img src={star} />
                        <div>
                            <span className="other-text gray">看其他偏執星座</span>
                        </div>
                    </div>
                </div>
            )
        }
        else if(this.props.select == 'water'){
            return(
                <div id="star-link" className="container content">
                    <div className="step pink">Step3 : 如何舒緩你的感情偏執！</div>
                    <div className="row">
                        <div className="col-md-6 star-link-contain">
                            <div className="star-link-text gray">重度 ★★★★★<br/>處女座、天蠍座、雙魚座</div>
                            <p className="star-link-subtext gray">別人的愛難掌握 對自己的愛可以</p>
                            <div className="star-link-button pink">深入分析</div>
                        </div>
                        <div className="col-md-6">
                            <Img src={water1} />
                        </div>
                        <div className="col-md-6 mt-30 star-link-contain">
                            <div className="star-link-text gray">中度 ★★★★<br/>巨蟹座、獅子座</div>
                            <p className="star-link-subtext gray">堆滿彼此重視的點滴</p>
                            <div className="star-link-button pink">深入分析</div>
                        </div>
                        <div className="col-md-6 mt-30">
                            <Img src={water2} />
                        </div>
                        <div className="col-md-6 mt-30 star-link-contain">
                            <div className="star-link-text gray">輕度 ★★★<br/>天秤座、摩羯座</div>
                            <p className="star-link-subtext gray">來個家人朋友時間 感受不同的愛</p>
                            <div className="star-link-button pink">深入分析</div>
                        </div>
                        <div className="col-md-6 mt-30">
                            <Img src={water3} />
                        </div>
                    </div>
                    <div className="mt-150 other-contain" onClick={this.selectStar}>
                        <Img src={star} />
                        <div>
                            <span className="other-text gray">看其他偏執星座</span>
                        </div>
                    </div>
                </div>
            )
        }
        else if(this.props.select == 'earth'){
            return(
                <div id="star-link" className="container content">
                    <div className="step pink">Step3 : 如何舒緩你的生活小事偏執！</div>
                    <div className="row">
                        <div className="col-md-6 star-link-contain">
                            <div className="star-link-text gray">重度 ★★★★★<br/>金牛座、雙子座、巨蟹座</div>
                            <p className="star-link-subtext gray">擁有生活小幫手，是最棒的舒壓</p>
                            <div className="star-link-button pink">深入分析</div>
                        </div>
                        <div className="col-md-6">
                            <Img src={earth1} />
                        </div>
                        <div className="col-md-6 mt-30 star-link-contain">
                            <div className="star-link-text gray">中度 ★★★★<br/>處女座、天秤座</div>
                            <p className="star-link-subtext gray">從裡到外，好物提升生活質感</p>
                            <div className="star-link-button pink">深入分析</div>
                        </div>
                        <div className="col-md-6 mt-30">
                            <Img src={earth2} />
                        </div>
                        <div className="col-md-6 mt-30 star-link-contain">
                            <div className="star-link-text gray">輕度 ★★★<br/>雙魚座</div>
                            <p className="star-link-subtext gray">幫你好好紀錄生活痕跡</p>
                            <div className="star-link-button pink">深入分析</div>
                        </div>
                        <div className="col-md-6 mt-30">
                            <Img src={earth3} />
                        </div>
                    </div>
                    <div className="mt-150 other-contain" onClick={this.selectStar}>
                        <Img src={star} />
                        <div>
                            <span className="other-text gray">看其他偏執星座</span>
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

export default StarLink