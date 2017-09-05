import React, { Component } from 'react'

import relate1 from 'assets/relate1.jpg'
import relate2 from 'assets/relate2.jpg'
import relate3 from 'assets/relate3.jpg'
import relate4 from 'assets/relate4.jpg'
import relate5 from 'assets/relate5.jpg'

import Utils from '../utils/utils'

class Relate extends Component{
    constructor() {
        super()
        this.block_class = this.block_class.bind(this)
    }
    block_class(flag) {
        if(flag == true) {
            return 'col-sm-6 col-md-3 hidden'
        }
        return 'col-sm-6 col-md-3'
    }
    componentDidMount() {
        var title = $('title').text()
        var platform = (Utils.detectMob() == true) ? 'Mob' : 'PC'
        console.log(platform)
        $('#report a').click(function(){
            ga("send", {
                "hitType": "event",
                "eventCategory": "超連結點擊",
                "eventAction": "click",
                "eventLabel": "[" + platform + "] [" + title + "] [" + $(this).attr('href') + "] [relate]"
            });
            console.log("eventLabel : " + "[" + platform + "] [" + title + "] [" + $(this).attr('href') + "] [relate]")
        })
    }
    render(){
        return(
            <div id="report" className="gray-back">
                <div className="container">
                    <h6 className="pink">#我愛 我偏執</h6>
                    <div className="row">
                        <div className={this.block_class(this.props.exclude1)}>
                            <a href="./hou.html" target="_blank">
                                <img className="lazyload" src={relate1} />
                                <p>天生偏執狂 小提琴家侯以嘉</p>
                            </a>
                        </div>
                        <div className={this.block_class(this.props.exclude2)}>
                            <a href="./emirates.html" target="_blank">
                                <img className="lazyload" src={relate2} />
                                <p>偏執追夢 讓她們從傳統中解放</p>
                            </a>
                        </div>
                        <div className={this.block_class(this.props.exclude3)}>
                            <a href="./wang.html" target="_blank">
                                <img className="lazyload" src={relate3} />
                                <p>細節魔人 作家王盛弘對完美的偏執</p>
                            </a>
                        </div>
                        <div className={this.block_class(this.props.exclude4)}>
                            <a href="./sun.html" target="_blank">
                                <img className="lazyload" src={relate4} />
                                <p>混搭生活 孫志華的工作偏執</p>
                            </a>
                        </div>
                        <div className={this.block_class(this.props.exclude5)}>
                            <a href="./star.html" target="_blank">
                                <img className="lazyload" src={relate5} />
                                <p>十二星座 偏執地雷</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Relate