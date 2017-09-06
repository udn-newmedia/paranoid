import React, { Component } from 'react'

import Utils from '../utils/utils'

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
import fire_mob1 from 'assets/img01_1_mob.jpg'
import fire_mob2 from 'assets/img01_2_mob.jpg'
import fire_mob3 from 'assets/img01_3_mob.jpg'
import water_mob1 from 'assets/img02_1_mob.jpg'
import water_mob2 from 'assets/img02_2_mob.jpg'
import water_mob3 from 'assets/img02_3_mob.jpg'
import wind_mob1 from 'assets/img03_1_mob.jpg'
import wind_mob2 from 'assets/img03_2_mob.jpg'
import wind_mob3 from 'assets/img03_3_mob.jpg'
import earth_mob1 from 'assets/img04_1_mob.jpg'
import earth_mob2 from 'assets/img04_2_mob.jpg'
import earth_mob3 from 'assets/img04_3_mob.jpg'

import star from 'assets/start_web.png'

class StarLink extends Component{
    constructor(props){
        super(props)
        this.selectStar = this.selectStar.bind(this)
        this.dynamic_img = this.dynamic_img.bind(this)
    }
    componentDidMount() {
        var title = $('title').text()
        var platform = (Utils.detectMob() == true) ? 'Mob' : 'PC'
        console.log(platform)
        $('#star-link a').click(function(){
            ga("send", {
                "hitType": "event",
                "eventCategory": "超連結點擊",
                "eventAction": "click",
                "eventLabel": "[" + platform + "] [" + title + "] [" + $(this).attr('href') + "] [深入分析]"
            });
            console.log("eventLabel : " + "[" + platform + "] [" + title + "] [" + $(this).attr('href') + "] [深入分析]")
        })
    }
    selectStar(){
        console.log(this.props)
        window.location.href = window.location.href
    }
    dynamic_img(select, number) {
        if(window.innerWidth <= 768) {
            switch(select) {
                case 'fire':
                    if(number == 1){
                        return fire_mob1
                    }
                    if(number == 2){
                        return fire_mob2
                    }
                    if(number == 3){
                        return fire_mob3
                    }
                    break
                case 'water':
                    if(number == 1){
                        return water_mob1
                    }
                    if(number == 2){
                        return water_mob2
                    }
                    if(number == 3){
                        return water_mob3
                    }
                    break
                case 'wind':
                    if(number == 1){
                        return wind_mob1
                    }
                    if(number == 2){
                        return wind_mob2
                    }
                    if(number == 3){
                        return wind_mob3
                    }
                    break
                case 'earth':
                    if(number == 1){
                        return earth_mob1
                    }
                    if(number == 2){
                        return earth_mob2
                    }
                    if(number == 3){
                        return earth_mob3
                    }
                    break
            }
        }
        else{
            switch(select) {
                case 'fire':
                    if(number == 1){
                        return fire1
                    }
                    if(number == 2){
                        return fire2
                    }
                    if(number == 3){
                        return fire3
                    }
                    break
                case 'water':
                    if(number == 1){
                        return water1
                    }
                    if(number == 2){
                        return water2
                    }
                    if(number == 3){
                        return water3
                    }
                    break
                case 'wind':
                    if(number == 1){
                        return wind1
                    }
                    if(number == 2){
                        return wind2
                    }
                    if(number == 3){
                        return wind3
                    }
                    break
                case 'earth':
                    if(number == 1){
                        return earth1
                    }
                    if(number == 2){
                        return earth2
                    }
                    if(number == 3){
                        return earth3
                    }
                    break
            }
        }
    }
    render() {
        if(this.props.select == 'wind'){
            return(
                <div id="star-link" className="container content">
                    <div className="step pink">Step3 : 如何舒緩你的理念偏執！</div>
                    <div className="row">
                        <div className="col-xs-6 star-link-contain">
                            <div className="star-link-text gray">重度 ★★★★★<br/>天秤座、<span className="hidden-md hidden-lg"><br/></span>射手座、<span className="hidden-md hidden-lg"><br/></span>水瓶座</div>
                            <p className="star-link-subtext gray">原則讓你喘不過氣？暫時放下吧！</p>
                            <a href="http://shopping.udn.com/mall/cus/event/eventPage.do?header=true&UrlRefXuid=202712319t9rVOpe58V#heavy" target="_blank"><div className="star-link-button pink">深入分析</div></a>
                        </div>
                        <div className="col-xs-6">
                            <img src={this.dynamic_img(this.props.select, 1)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-6 mt-30 star-link-contain">
                            <div className="star-link-text gray">中度 ★★★★<br/>金牛座、天蠍座</div>
                            <p className="star-link-subtext gray">碰上不服氣的事？來點美食紓解</p>
                            <a href="http://shopping.udn.com/mall/cus/event/eventPage.do?header=true&UrlRefXuid=202712319t9rVOpe58V#medium" target="_blank"><div className="star-link-button pink">深入分析</div></a>
                        </div>
                        <div className="col-xs-6 mt-30">
                            <img src={this.dynamic_img(this.props.select, 2)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-6 mt-30 star-link-contain">
                            <div className="star-link-text gray">輕度 ★★★<br/>牡羊座、獅子座</div>
                            <p className="star-link-subtext gray">意見拉扯很累？下午茶恢復元氣</p>
                            <a href="http://shopping.udn.com/mall/cus/event/eventPage.do?header=true&UrlRefXuid=202712319t9rVOpe58V#light" target="_blank"><div className="star-link-button pink">深入分析</div></a>
                        </div>
                        <div className="col-xs-6 mt-30">
                            <img src={this.dynamic_img(this.props.select, 3)} />
                        </div>
                    </div>
                    <div className="mt-150 other-contain" onClick={this.selectStar}>
                        <img src={star} />
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
                        <div className="col-xs-6 star-link-contain">
                            <div className="star-link-text gray">重度 ★★★★★<br/>牡羊座、獅子座、摩羯座</div>
                            <p className="star-link-subtext gray">創造專屬零工作空間</p>
                            <a href="http://shopping.udn.com/mall/cus/event/eventPage.do?header=true&UrlRefXuid=20271231844N0t52auD#heavy" target="_blank"><div className="star-link-button pink">深入分析</div></a>
                        </div>
                        <div className="col-xs-6">
                            <img src={this.dynamic_img(this.props.select, 1)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-6 mt-30 star-link-contain">
                            <div className="star-link-text gray">中度 ★★★★<br/>處女座、水瓶座</div>
                            <p className="star-link-subtext gray">好好跟自己對話 才能繼續精進</p>
                            <a href="http://shopping.udn.com/mall/cus/event/eventPage.do?header=true&UrlRefXuid=20271231844N0t52auD#medium" target="_blank"><div className="star-link-button pink">深入分析</div></a>
                        </div>
                        <div className="col-xs-6 mt-30">
                            <img src={this.dynamic_img(this.props.select, 2)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-6 mt-30 star-link-contain">
                            <div className="star-link-text gray">輕度 ★★★<br/>射手座、天蠍座</div>
                            <p className="star-link-subtext gray">立即慶祝 紓解追成就的壓力</p>
                            <a href="http://shopping.udn.com/mall/cus/event/eventPage.do?header=true&UrlRefXuid=20271231844N0t52auD#light" target="_blank"><div className="star-link-button pink">深入分析</div></a>
                        </div>
                        <div className="col-xs-6 mt-30">
                            <img src={this.dynamic_img(this.props.select, 3)} />
                        </div>
                    </div>
                    <div className="mt-150 other-contain" onClick={this.selectStar}>
                        <img src={star} />
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
                        <div className="col-xs-6 star-link-contain">
                            <div className="star-link-text gray">重度 ★★★★★<br/>處女座、天蠍座、雙魚座</div>
                            <p className="star-link-subtext gray">別人的愛難掌握 對自己的愛可以</p>
                            <a href="http://shopping.udn.com/mall/cus/event/eventPage.do?header=true&UrlRefXuid=202709081OH55qxiJ3H#heavy" target="_blank"><div className="star-link-button pink">深入分析</div></a>
                        </div>
                        <div className="col-xs-6">
                            <img src={this.dynamic_img(this.props.select, 1)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-6 mt-30 star-link-contain">
                            <div className="star-link-text gray">中度 ★★★★<br/>巨蟹座、獅子座</div>
                            <p className="star-link-subtext gray">堆滿彼此重視的點滴</p>
                            <a href="http://shopping.udn.com/mall/cus/event/eventPage.do?header=true&UrlRefXuid=202709081OH55qxiJ3H#medium" target="_blank"><div className="star-link-button pink">深入分析</div></a>
                        </div>
                        <div className="col-xs-6 mt-30">
                            <img src={this.dynamic_img(this.props.select, 2)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-6 mt-30 star-link-contain">
                            <div className="star-link-text gray">輕度 ★★★<br/>天秤座、摩羯座</div>
                            <p className="star-link-subtext gray">來個家人朋友時間 感受不同的愛</p>
                            <a href="http://shopping.udn.com/mall/cus/event/eventPage.do?header=true&UrlRefXuid=202709081OH55qxiJ3H#light" target="_blank"><div className="star-link-button pink">深入分析</div></a>
                        </div>
                        <div className="col-xs-6 mt-30">
                            <img src={this.dynamic_img(this.props.select, 3)} />
                        </div>
                    </div>
                    <div className="mt-150 other-contain" onClick={this.selectStar}>
                        <img src={star} />
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
                        <div className="col-xs-6 star-link-contain">
                            <div className="star-link-text gray">重度 ★★★★★<br/>金牛座、雙子座、巨蟹座</div>
                            <p className="star-link-subtext gray">擁有生活小幫手，是最棒的舒壓</p>
                            <a href="http://shopping.udn.com/mall/cus/event/eventPage.do?header=true&UrlRefXuid=202709082dV2L0MWPS7#heavy" target="_blank"><div className="star-link-button pink">深入分析</div></a>
                        </div>
                        <div className="col-xs-6">
                            <img src={this.dynamic_img(this.props.select, 1)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-6 mt-30 star-link-contain">
                            <div className="star-link-text gray">中度 ★★★★<br/>處女座、天秤座</div>
                            <p className="star-link-subtext gray">從裡到外，好物提升生活質感</p>
                            <a href="http://shopping.udn.com/mall/cus/event/eventPage.do?header=true&UrlRefXuid=202709082dV2L0MWPS7#medium" target="_blank"><div className="star-link-button pink">深入分析</div></a>
                        </div>
                        <div className="col-xs-6 mt-30">
                            <img src={this.dynamic_img(this.props.select, 2)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-6 mt-30 star-link-contain">
                            <div className="star-link-text gray">輕度 ★★★<br/>雙魚座</div>
                            <p className="star-link-subtext gray">幫你好好紀錄生活痕跡</p>
                            <a href="http://shopping.udn.com/mall/cus/event/eventPage.do?header=true&UrlRefXuid=202709082dV2L0MWPS7#light" target="_blank"><div className="star-link-button pink">深入分析</div></a>
                        </div>
                        <div className="col-xs-6 mt-30">
                            <img src={this.dynamic_img(this.props.select, 3)} />
                        </div>
                    </div>
                    <div className="mt-150 other-contain" onClick={this.selectStar}>
                        <img src={star} />
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