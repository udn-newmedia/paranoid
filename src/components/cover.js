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
        this.selectStar = this.selectStar.bind(this);
    }
    selectStar(value) {
        console.log(value)
        this.props.onSelectStar(value)
    }
    render() {
        if(this.props.select == 1){
            return (
                <div id="cover" className={this.props.cover}> 
                    <div className="title-contain pink">
                        <div className="sub-title">#我愛 <b>我偏執</b></div>
                        <h1 className="pink">十二星座<br/>偏執地雷</h1>
                    </div>
                    <div className="step pink">Step1 : 選擇星座</div>
                    <div className="star-button-contain row">
                        <CoverStar star={aries} text="牡羊座" onSelectStar={this.selectStar} starGroup="fire"/>
                        <CoverStar star={taurus} text="金牛座" onSelectStar={this.selectStar} starGroup="earth"/>
                        <CoverStar star={gemini} text="雙子座" onSelectStar={this.selectStar} starGroup="earth"/>
                        <CoverStar star={cancer} text="巨蟹座" onSelectStar={this.selectStar} starGroup="earth"/>
                        <CoverStar star={leo} text="獅子座" onSelectStar={this.selectStar} starGroup="fire"/>
                        <CoverStar star={virgo} text="處女座" onSelectStar={this.selectStar} starGroup="water"/>
                        <CoverStar star={libra} text="天秤座" onSelectStar={this.selectStar} starGroup="wind"/>
                        <CoverStar star={scorpio} text="天蠍座" onSelectStar={this.selectStar} starGroup="water"/>
                        <CoverStar star={sagittarius} text="射手座" onSelectStar={this.selectStar} starGroup="wind"/>
                        <CoverStar star={capricorn} text="摩羯座" onSelectStar={this.selectStar} starGroup="fire"/>
                        <CoverStar star={aquarius} text="水瓶座" onSelectStar={this.selectStar} starGroup="wind"/>
                        <CoverStar star={pisces} text="雙魚座" onSelectStar={this.selectStar} starGroup="water"/>
                    </div>
                </div>
            )
        }
        else{
            return null
        }
    }
}

export default Cover