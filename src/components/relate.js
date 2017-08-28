import React, { Component } from 'react'
import Img from 'react-image'

import relate1 from 'assets/relate1.jpg'
import relate2 from 'assets/relate2.jpg'
import relate3 from 'assets/relate3.jpg'
import relate4 from 'assets/relate4.jpg'
import relate5 from 'assets/relate5.jpg'


class Relate extends Component{
    render(){
        return(
            <div id="report" className="gray-back">
                <div className="container">
                    <h6 className="pink">#我愛 我偏執</h6>
                    <div className="row">
                        <div className="col-sm-3">
                            <a href="http://p.udn.com.tw/upf/newmedia/2017_data/20170303_3dmedia/index.html" target="_blank">
                                <Img className="lazyload" src={relate1} />
                                <p>細節魔人 作家王盛弘對完美的偏執</p>
                            </a>
                        </div>
                        <div className="col-sm-3">
                            <a href="http://p.udn.com.tw/upf/newmedia/2017_data/20170303_3dmedia/index.html" target="_blank">
                                <Img className="lazyload" src={relate2} />
                                <p>工作混搭生活 孫志華的工作偏執</p>
                            </a>
                        </div>
                        <div className="col-sm-3">
                            <a href="http://p.udn.com.tw/upf/newmedia/2017_data/20170303_3dmedia/index.html" target="_blank">
                                <Img className="lazyload" src={relate3} />
                                <p>偏執追夢 讓她們從傳統中解放</p>
                            </a>
                        </div>
                        <div className="col-sm-3">
                            <a href="http://p.udn.com.tw/upf/newmedia/2017_data/20170303_3dmedia/index.html" target="_blank">
                                <Img className="lazyload" src={relate5} />
                                <p>5位名人</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Relate