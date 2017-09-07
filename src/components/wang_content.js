import React, { Component } from 'react'
import LazyLoad from 'react-lazyload';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Player } from 'video-react'

import Quote from './quote'
import ShareBlock from './share_block'
import ImgBlock from './img_block'

import wang from 'assets/wang.mp4'

import wangPoster from 'assets/wang_poster.jpg'

import wang1 from 'assets/wang1.jpg'
import wang2 from 'assets/wang2.jpg'
import wang3 from 'assets/wang3.jpg'

import Utils from '../utils/utils'

class WangContent extends Component {

    render() {
        if(Utils.detectIE()){
            return (
                <div className="container">
                    <div className="content">
                        <ShareBlock link="https://udn.com/upf/newmedia/2017_data/paranoid/wang.html"/>
                        <p><br /></p>
                        <p>「可以呀！我能聊聊在寫書、編書上的偏執。」作家王盛弘一口答應採訪邀請。</p>
                        <p><br /></p>
                        <p>王盛弘認為，許多作家、藝術家都有偏執的一面，可能是整本書中的一個詞彙、一個標點，甚至是行距、字體大小，旁人看來是微乎其微的細節，但對作家來說是「不這樣堅持，我就無法把作品交出去。」</p>
                        <Quote text="很多藝術家、作家有這樣的性格，他可以讓旁邊的人可能很痛苦，讓自己也很辛苦，可是他也可能催化出很好的作品" refer="─ 王盛弘" />
                        <p>「通常我會先擬大綱，寫完後在寫草稿，一篇草稿可能寫2～3遍，覺得可以了，我才用電腦謄打，之後再花1年左右，一氣呵成把整本書重新編排、重打一次。」反覆打磨的過程，王盛弘承認確實折磨，他曾經為了一本散文集內的文章排序，編了十幾種版本，「可是我覺得每一次的成果比前面好一點點，我就覺得值得了。」</p>
                    </div>
                    <ImgBlock img1={wang1} img2={wang2} img3={wang3} imgSay1="一開始先手寫草稿是王盛弘的寫作習慣。" imgSay2="最後校閱階段，王盛弘仍對自己的作品反覆刪修，這就是他編書的偏執。圖／王盛弘提供" imgSay3="愛走路的王盛弘說，步行的速度能讓他細細觀察路邊的一花一木。圖／王盛弘提供" />
                    <div className="content">
                        <h2>旅行筆記 書寫就是我的意識流</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <p>「我覺得走路好像行動的靜坐，好像精神的瑜伽一樣。」王盛弘說每當靈感受阻，他就會去走路，走非常久的路，走一走靈感就會冒出來。走路時將五感打開，接收外界的資訊，細細觀察途中的花草木，這些都是王盛弘寫作的養分。</p>
                                <p><br /></p>
                                <p>但旅行總不能只靠雙腳，王盛弘說：「我當然喜歡走路了，可是搭不同的交通工具也會有不同的感受。」蹬著單車，總給人開心到想唱歌的心情；搭火車到遠方，車窗就是觀景窗，框著的都是一幅畫。在旅行路上，王盛弘總會用紙筆記錄下未受污染的第一眼，「書寫就跟著我的思緒、我的意識流啪啦啪啦，速度非常的快」。</p>
                            </div>
                            <div className="col-md-6">
                                <p className="hidden-md hidden-lg"><br /></p>
                                <video
                                    controls
                                    playsInline
                                    poster={wangPoster}
                                    src={wang}
                                />
                            </div>
                        </div>
                        <p><br /></p>
                        <p>只是這次啟程，王盛弘不打算自己一個人走，新書《花都開好了》要帶上讀者，一起體驗他在的旅行途中的觀察。</p>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div className="container">
                    <div className="content">
                        <ShareBlock link="https://udn.com/upf/newmedia/2017_data/paranoid/wang.html"/>
                        <p><br /></p>
                        <p>「可以呀！我能聊聊在寫書、編書上的偏執。」作家王盛弘一口答應採訪邀請。</p>
                        <p><br /></p>
                        <p>王盛弘認為，許多作家、藝術家都有偏執的一面，可能是整本書中的一個詞彙、一個標點，甚至是行距、字體大小，旁人看來是微乎其微的細節，但對作家來說是「不這樣堅持，我就無法把作品交出去。」</p>
                        <Quote text="很多藝術家、作家有這樣的性格，他可以讓旁邊的人可能很痛苦，讓自己也很辛苦，可是他也可能催化出很好的作品" refer="─ 王盛弘" />
                        <p>「通常我會先擬大綱，寫完後在寫草稿，一篇草稿可能寫2～3遍，覺得可以了，我才用電腦謄打，之後再花1年左右，一氣呵成把整本書重新編排、重打一次。」反覆打磨的過程，王盛弘承認確實折磨，他曾經為了一本散文集內的文章排序，編了十幾種版本，「可是我覺得每一次的成果比前面好一點點，我就覺得值得了。」</p>
                    </div>
                    <ImgBlock img1={wang1} img2={wang2} img3={wang3} imgSay1="一開始先手寫草稿是王盛弘的寫作習慣。" imgSay2="最後校閱階段，王盛弘仍對自己的作品反覆刪修，這就是他編書的偏執。圖／王盛弘提供" imgSay3="愛走路的王盛弘說，步行的速度能讓他細細觀察路邊的一花一木。圖／王盛弘提供" />
                    <div className="content">
                        <h2>旅行筆記 書寫就是我的意識流</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <p>「我覺得走路好像行動的靜坐，好像精神的瑜伽一樣。」王盛弘說每當靈感受阻，他就會去走路，走非常久的路，走一走靈感就會冒出來。走路時將五感打開，接收外界的資訊，細細觀察途中的花草木，這些都是王盛弘寫作的養分。</p>
                                <p><br /></p>
                                <p>但旅行總不能只靠雙腳，王盛弘說：「我當然喜歡走路了，可是搭不同的交通工具也會有不同的感受。」蹬著單車，總給人開心到想唱歌的心情；搭火車到遠方，車窗就是觀景窗，框著的都是一幅畫。在旅行路上，王盛弘總會用紙筆記錄下未受污染的第一眼，「書寫就跟著我的思緒、我的意識流啪啦啪啦，速度非常的快」。</p>
                            </div>
                            <div className="col-md-6">
                                <p className="hidden-md hidden-lg"><br /></p>
                                <Player
                                    playsInline
                                    poster={wangPoster}
                                    src={wang}
                                />
                            </div>
                        </div>
                        <p><br /></p>
                        <p>只是這次啟程，王盛弘不打算自己一個人走，新書《花都開好了》要帶上讀者，一起體驗他在的旅行途中的觀察。</p>
                    </div>
                </div>
            )
        }
    }
}

export default WangContent