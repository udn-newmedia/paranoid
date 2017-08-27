import React, { Component } from 'react'

import aries from 'assets/aries.png'
import taurus from 'assets/taurus.png'
import gemini from 'assets/gemini.png'
import cancer from 'assets/cancer.png'
import leo from 'assets/leo.png'
import virgo from 'assets/virgo.png'
import libra from 'assets/libra.png'
import scorpio from 'assets/scorpio.png'
import sagittarius from 'assets/sagittarius.png'
import capricorn from 'assets/capricorn.png'
import aquarius from 'assets/aquarius.png'
import pisces from 'assets/pisces.png'

import CoverStar from './cover_star'


class Cover extends Component {
    constructor(props) {
        super(props)
        this.handletestChange = this.handletestChange.bind(this);
        this.state = {t: ''};
    }
    handletestChange() {
        console.log(this.state)
    }
    render() {
        return (
            <div id="cover">
                <div className="title-contain">
                    <div className="sub-title">#我愛 我偏執</div>
                    <h1>十二星座<br/>偏執地雷</h1>
                    <div className="step">Step1 : 選擇星座</div>
                </div>
                <div className="star-button-contain row">
                    <CoverStar star={aries} text="牡羊座" onTestChange={this.handletestChange}/>
                    <CoverStar star={taurus} text="金牛座"/>
                    <CoverStar star={gemini} text="雙子座"/>
                    <CoverStar star={cancer} text="巨蟹座"/>
                    <CoverStar star={leo} text="獅子座"/>
                    <CoverStar star={virgo} text="處女座"/>
                    <CoverStar star={libra} text="天秤座"/>
                    <CoverStar star={scorpio} text="天蠍座"/>
                    <CoverStar star={sagittarius} text="射手座"/>
                    <CoverStar star={capricorn} text="摩羯座"/>
                    <CoverStar star={aquarius} text="水瓶座"/>
                    <CoverStar star={pisces} text="雙魚座"/>
                </div>
            </div>
        )
    }
}

export default Cover