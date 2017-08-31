import React, { Component } from 'react'
import LazyLoad from 'react-lazyload';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Quote from './quote'
import ShareBlock from './share_block'
import ImgBlock from './img_block'

import famous1 from 'assets/famous1.jpg'
import famous2 from 'assets/famous2.jpg'
import famous3 from 'assets/famous3.jpg'

const lazyOffset = -200

let staticHeight

if(window.innerWidth < 768){
    staticHeight = (window.innerWidth - 40)
}
else if(window.innerWidth >= 768 && window.innerWidth < 1025){
    staticHeight = (window.innerWidth - 200) * 9 / 12 - 7.5
}
else{
    staticHeight = 654
}

let webHeight

if(window.innerWidth < 768){
    webHeight = 'auto'
}
else if(window.innerWidth >= 768 && window.innerWidth < 1025){
    webHeight = ((window.innerWidth - 200) * 9 / 12 + 27 - 7.5) + 'px'
}
else{
    webHeight = '683px'
}


const staticHeightCss = {
    height: webHeight,
    marginTop: '20px'
}

const containHeightCss = {
    height: staticHeight + 'px'
}

class FamousContent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="container">
                <div className="content">
                    <ShareBlock />
                    <p><br /></p>
                    <p>偏執不是病，他帶領我們探索自我的敏感、瘋狂、幻想，創造獨特風格的生活態度、價值觀，與甘心沉淪的安全地帶。</p>
                    <h2>偏執是我的保護色</h2>
                    <Quote text="墨鏡就是我的穆斯林長袍，我有點近視，而近視的人不戴眼鏡的時候，看起來就像隻想被收養的小狗。" refer="- Karl Lagerfeld" />
                    <div className="row">
                        <div className="col-sm-9" style={staticHeightCss}>
                            <div style={containHeightCss}>
                                <LazyLoad height={staticHeight} once offset={lazyOffset}>
                                    <ReactCSSTransitionGroup
                                        transitionName="lazyload"
                                        transitionAppear={true}
                                        transitionAppearTimeout={700}
                                        transitionEnter={false}
                                        transitionLeave={false} >
                                            <img src={famous1} />
                                    </ReactCSSTransitionGroup>
                                </LazyLoad>
                            </div>
                            <div className="img-say">處女座。Karl Lagerfeld</div>
                        </div>
                        <div className="col-sm-3 hidden-xs" style={staticHeightCss}></div>
                    </div>
                    <p><br /></p>
                    <p>叱吒高級時裝秀場半世紀，有「老佛爺」與「時尚界凱薩大帝」之稱的卡爾 · 拉格菲，現為香奈兒Chanel與芬迪FENDI的設計總監。他重塑香奈兒的設計元素，保留黑白優雅精髓，雜揉當代元素，將品牌推向高級訂 製的頂級地位。他也於1984年推出個人同名品牌，充分展現個人設計特色。</p>
                    <p><br /></p>
                    <p>如此崇高的地位，讓卡爾成為各大時尚秀場的鎂光燈焦點，他的馬尾、手套與從不脫下的太陽眼鏡，更是他的獨特標誌，堅持展現一貫的形象，是卡爾對自我形象的偏執。</p>
                    <h2>偏執讓我專注</h2>
                    <Quote text="我真的想要讓我的生活更簡單，所以我除了去想我的工作之外，盡量讓其他需要決定的事情愈少愈好。" refer="- Mark Zuckerberg" />
                    <div className="row">
                        <div className="col-sm-3 hidden-xs" style={staticHeightCss}></div>
                        <div className="col-sm-9" style={staticHeightCss}>
                            <div style={containHeightCss}>
                                <LazyLoad height={staticHeight} once offset={lazyOffset}>
                                    <ReactCSSTransitionGroup
                                        transitionName="lazyload"
                                        transitionAppear={true}
                                        transitionAppearTimeout={700}
                                        transitionEnter={false}
                                        transitionLeave={false} >
                                            <img src={famous2} />
                                    </ReactCSSTransitionGroup>
                                </LazyLoad>
                            </div>
                            <div className="img-say">金牛座。Mark Zuckerberg</div>
                        </div>
                    </div>
                    <p><br /></p>
                    <p>出席多數場合都只穿灰T-Shirt、牛仔褲與球鞋的馬克祖克柏，碰上冬天也僅加上灰色棒球帽T。</p>
                    <p><br /></p>
                    <p>就算身價696億美元，排名世界富豪第5位的祖克柏，不改他當初創業的初衷「連結全世界」，還是將多數心力投注在臉書的創新與營運。他認為自己創業並非為了賺錢或成名，而是解決問題。</p>
                    <h2>偏執讓我深入人心</h2>
                    <Quote text="我能與用紙、鉛筆和膠片製作電影最後的時代相遇，我感到相當的幸運。" refer="- 宮崎駿" />
                    <div className="row">
                        <div className="col-sm-9" style={staticHeightCss}>
                            <div style={containHeightCss}>
                                <LazyLoad height={staticHeight} once offset={lazyOffset}>
                                    <ReactCSSTransitionGroup
                                        transitionName="lazyload"
                                        transitionAppear={true}
                                        transitionAppearTimeout={700}
                                        transitionEnter={false}
                                        transitionLeave={false} >
                                            <img src={famous1} />
                                    </ReactCSSTransitionGroup>
                                </LazyLoad>
                            </div>
                            <div className="img-say">魔羯座。宮崎駿</div>
                        </div>
                        <div className="col-sm-3 hidden-xs" style={staticHeightCss}></div>
                    </div>
                    <p><br /></p>
                    <p>打造出《龍貓》、《神隱少女》等多部經典動畫的宮崎駿，儼然是這個時代日本動畫的代名詞。</p>
                    <p><br /></p>
                    <p>他最有名的創作特色是一貫的手繪水彩，堅持每樣物件都要以水彩創作，甚至連電影《風起》中上百人的場景，都堅持以手繪完成，他認為「這樣每一個路人才是鮮活的，而不僅僅是為了襯托主角而存在。」</p>
                </div>
            </div>
        )
    }
}

export default FamousContent