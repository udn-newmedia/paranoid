import React, { Component } from 'react'
import LazyLoad from 'react-lazyload';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Quote from './quote'
import ShareBlock from './share_block'
import ImgBlock from './img_block'

import famous1 from 'assets/famous1.jpg'
import famous2 from 'assets/famous2.jpg'
import famous3 from 'assets/famous3.jpg'
import famous4 from 'assets/famous4.jpg'
import famous5 from 'assets/famous5.jpg'
import famous6 from 'assets/famous6.jpg'
import famous7 from 'assets/famous7.jpg'
import famous8 from 'assets/famous8.jpg'
import famous9 from 'assets/famous9.jpg'
import famous10 from 'assets/famous10.jpg'

const lazyOffset = -200

let staticHeight

if(window.innerWidth < 768){
    staticHeight = (window.innerWidth - 40)
}
else if(window.innerWidth >= 768 && window.innerWidth < 1025){
    staticHeight = (window.innerWidth - 200) * 9 / 12 - 7.5
}
else{
    staticHeight = 440
}

let webHeight

if(window.innerWidth < 768){
    webHeight = 'auto'
}
else if(window.innerWidth >= 768 && window.innerWidth < 1025){
    webHeight = ((window.innerWidth - 200) * 9 / 12 + 27 - 7.5) + 'px'
}
else{
    webHeight = '440px'
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
                    <p>偏執不是病，它帶領我們探索自我的敏感、瘋狂、幻想，創造獨特風格的生活態度、價值觀，與甘心沉淪的安全地帶。</p>
                    <h2>偏執是我的保護色</h2>
                    <Quote text="墨鏡就是我的穆斯林長袍，我有點近視，而近視的人不戴眼鏡的時候，看起來就像隻想被收養的小狗。" refer="─ 卡爾拉格菲" />
                    <div className="row">
                        <div className="col-sm-6" style={staticHeightCss}>
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
                        </div>
                        <div className="col-sm-6" style={staticHeightCss}>
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
                        </div>
                    </div>
                    <p><br /></p>
                    <p>叱吒高級時裝秀場半世紀，有「老佛爺」與「時尚界凱薩大帝」之稱的卡爾拉格菲，現為香奈兒Chanel與芬迪FENDI的設計總監。他重塑香奈兒的設計元素，保留黑白優雅精髓，雜揉當代元素，將品牌推向高級訂製的頂級地位。他也於1984年推出個人同名品牌，充分展現個人設計特色。</p>
                    <p><br /></p>
                    <p>如此崇高的地位，讓卡爾拉格菲成為各大時尚秀場的鎂光燈焦點，馬尾、手套與從不脫下的太陽眼鏡，更是他的獨特標誌，堅持展現一貫自我形象的偏執。</p>
                    <h2>偏執讓我專注</h2>
                    <Quote text="我真的想要讓我的生活更簡單，所以我除了去想我的工作之外，盡量讓其他需要決定的事情愈少愈好。" refer="─ 馬克祖克柏" />
                    <div className="row">
                        <div className="col-sm-6" style={staticHeightCss}>
                            <div style={containHeightCss}>
                                <LazyLoad height={staticHeight} once offset={lazyOffset}>
                                    <ReactCSSTransitionGroup
                                        transitionName="lazyload"
                                        transitionAppear={true}
                                        transitionAppearTimeout={700}
                                        transitionEnter={false}
                                        transitionLeave={false} >
                                            <img src={famous3} />
                                    </ReactCSSTransitionGroup>
                                </LazyLoad>
                            </div>
                        </div>
                        <div className="col-sm-6" style={staticHeightCss}>
                            <div style={containHeightCss}>
                                <LazyLoad height={staticHeight} once offset={lazyOffset}>
                                    <ReactCSSTransitionGroup
                                        transitionName="lazyload"
                                        transitionAppear={true}
                                        transitionAppearTimeout={700}
                                        transitionEnter={false}
                                        transitionLeave={false} >
                                            <img src={famous4} />
                                    </ReactCSSTransitionGroup>
                                </LazyLoad>
                            </div>
                        </div>
                    </div>
                    <p><br /></p>
                    <p>出席多數場合都只穿灰T-Shirt、牛仔褲與球鞋的馬克祖克柏，碰上冬天也僅加上灰色棒球帽T。</p>
                    <p><br /></p>
                    <p>就算身價696億美元，排名世界富豪第5位的祖克柏，不改他當初創業的初衷「連結全世界」，還是將多數心力投注在臉書的創新與營運。他認為自己創業並非為了賺錢或成名，而是解決問題。</p>
                    <h2>偏執讓我深入人心</h2>
                    <Quote text="我能與用紙、鉛筆和膠片製作電影最後的時代相遇，我感到相當的幸運。" refer="─ 宮崎駿" />
                    <div className="row">
                        <div className="col-sm-6" style={staticHeightCss}>
                            <div style={containHeightCss}>
                                <LazyLoad height={staticHeight} once offset={lazyOffset}>
                                    <ReactCSSTransitionGroup
                                        transitionName="lazyload"
                                        transitionAppear={true}
                                        transitionAppearTimeout={700}
                                        transitionEnter={false}
                                        transitionLeave={false} >
                                            <img src={famous5} />
                                    </ReactCSSTransitionGroup>
                                </LazyLoad>
                            </div>
                        </div>
                        <div className="col-sm-6" style={staticHeightCss}>
                            <div style={containHeightCss}>
                                <LazyLoad height={staticHeight} once offset={lazyOffset}>
                                    <ReactCSSTransitionGroup
                                        transitionName="lazyload"
                                        transitionAppear={true}
                                        transitionAppearTimeout={700}
                                        transitionEnter={false}
                                        transitionLeave={false} >
                                            <img src={famous6} />
                                    </ReactCSSTransitionGroup>
                                </LazyLoad>
                            </div>
                        </div>
                    </div>
                    <p><br /></p>
                    <p>打造出《龍貓》、《神隱少女》等多部經典動畫的宮崎駿，儼然是這個時代日本動畫的代名詞。</p>
                    <p><br /></p>
                    <p>他最有名的創作特色是一貫的手繪水彩，堅持每樣物件都要以水彩創作，甚至連電影《風起》中上百人的場景，都堅持以手繪完成，他認為「這樣每一個路人才是鮮活的，而不僅僅是為了襯托主角而存在。」</p>
                    <h2>偏執是我的童年</h2>
                    <Quote text="如果你真的想要什麼，你必須準備好非常努力，把握機會，最重要的是，永遠不放棄。" refer="─ 珍古德" />
                    <div className="row">
                        <div className="col-sm-6" style={staticHeightCss}>
                            <div style={containHeightCss}>
                                <LazyLoad height={staticHeight} once offset={lazyOffset}>
                                    <ReactCSSTransitionGroup
                                        transitionName="lazyload"
                                        transitionAppear={true}
                                        transitionAppearTimeout={700}
                                        transitionEnter={false}
                                        transitionLeave={false} >
                                            <img src={famous7} />
                                    </ReactCSSTransitionGroup>
                                </LazyLoad>
                            </div>
                        </div>
                        <div className="col-sm-6" style={staticHeightCss}>
                            <div style={containHeightCss}>
                                <LazyLoad height={staticHeight} once offset={lazyOffset}>
                                    <ReactCSSTransitionGroup
                                        transitionName="lazyload"
                                        transitionAppear={true}
                                        transitionAppearTimeout={700}
                                        transitionEnter={false}
                                        transitionLeave={false} >
                                            <img src={famous8} />
                                    </ReactCSSTransitionGroup>
                                </LazyLoad>
                            </div>
                        </div>
                    </div>
                    <p><br /></p>
                    <p>在珍古德二歲的生日時，父親送她一個美麗的像真正猩猩的玩偶，他的名字叫做Jubilee，種下她對動物的好奇心。十歲時，每個人都嘲笑她想去非洲的夢想，她憑著母親的鼓勵，就算沒有科學研究背景，也還是獲得前往非洲的機會。</p>
                    <p><br /></p>
                    <p>60年如一日，已經高齡83歲的珍古德，依舊奔波世界各地，提倡環境保護與動物生存權的議題。對她來說，沒有比維繫環境永續更值得不眠不休的工作至今。</p>
                    <h2>偏執確保我工作精確</h2>
                    <Quote text="工作倦怠是因為你有所不滿，克服倦怠的方法，就是了解你為工作犧牲了什麼。" refer="─ 瑪莉莎梅爾" />
                    <div className="row">
                        <div className="col-sm-6" style={staticHeightCss}>
                            <div style={containHeightCss}>
                                <LazyLoad height={staticHeight} once offset={lazyOffset}>
                                    <ReactCSSTransitionGroup
                                        transitionName="lazyload"
                                        transitionAppear={true}
                                        transitionAppearTimeout={700}
                                        transitionEnter={false}
                                        transitionLeave={false} >
                                            <img src={famous9} />
                                    </ReactCSSTransitionGroup>
                                </LazyLoad>
                            </div>
                        </div>
                        <div className="col-sm-6" style={staticHeightCss}>
                            <div style={containHeightCss}>
                                <LazyLoad height={staticHeight} once offset={lazyOffset}>
                                    <ReactCSSTransitionGroup
                                        transitionName="lazyload"
                                        transitionAppear={true}
                                        transitionAppearTimeout={700}
                                        transitionEnter={false}
                                        transitionLeave={false} >
                                            <img src={famous10} />
                                    </ReactCSSTransitionGroup>
                                </LazyLoad>
                            </div>
                        </div>
                    </div>
                    <p><br /></p>
                    <p>人稱矽谷偏執女王的瑪莉莎梅爾，在Google創業初期就參與整個產品設計，在負責搜尋引擎建置時，不僅親自寫程式，更擔負起使用者設計與產品設計的任務，奠基了我們現在看到的Google首頁簡潔的風格。</p>
                    <p><br /></p>
                    <p>冷靜理性的頭腦與強硬的行事作風，形塑她獨特的領導風格，對產品完美呈現的堅持，讓她曾經為了找到最好的陰影風格，要求工程師微調41種版本，才找到滿意的結果。</p>
                </div>
            </div>
        )
    }
}

export default FamousContent