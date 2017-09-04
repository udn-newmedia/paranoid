import React, { Component } from 'react'
import LazyLoad from 'react-lazyload';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Quote from './quote'
import ShareBlock from './share_block'
import ImgBlock from './img_block'

import emirates1 from 'assets/emirates1.jpg'
import emirates2 from 'assets/emirates2.jpg'
import emirates3 from 'assets/emirates3.jpg'

class EmiratesContent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="container">
                <div className="content">
                    <ShareBlock />
                    <p><br /></p>
                    <p>在沙烏地阿拉伯，女性不能考駕照，更被禁止開車，但同樣出生伊斯蘭世界，有群女性靠著對天空幾近偏執的渴望，成功翱翔天際。</p>
                    <p><br /></p>
                    <p>29歲的瓦茲（Shaesta Waiz）在蘇聯入侵阿富汗時生於難民營，1987年移民美國後，她發現自己熱愛飛行，成為出生自阿富汗第一位有飛行執照的平民女性。今年八月，瓦茲剛完成獨自環球飛行的挑戰，共造訪18個國家，總航程超過2萬5千公里。</p>
                    <Quote text="我發現我對飛行的熱愛後，開始挑戰自我。<br />我開始閱讀相關書籍、精進數學，開始用不同角度看待世界和天空。" refer="─ 瓦茲" />
                    <p>「飛機不會去區分你的性別、宗教與出生背景。」今年7月，瓦茲在環球途中訪問杜拜，與阿聯酋航空旗下女機師柏姬達（Bakhita Al Muheiri）共同為女權發聲，希望透過她們成功追夢的故事，鼓舞更多女性。柏姬達說：「當初家人雖然鼓勵我當機師，但他們仍然有點擔心旁人的眼光，也有點懷疑我能否做到？」</p>
                </div>
                <ImgBlock img1={emirates1} img2={emirates2} img3={emirates3} imgSay1="瓦茲（左）與柏姬達（右）用自己的故事鼓勵女性勇敢追夢。" imgSay2="對天空的偏執讓她們從傳統束縛中解放。" imgSay3="達爾維什（右）與穆哈里（左）在國際婦女節共飛。" />
                <div className="content">
                    <h2>對天空的偏執 讓她們挑戰傳統</h2>
                    <p>長久以來，機師都是非常「陽剛」的職業，根據國際民航組織（ICAO）統計，全世界只有不到5％的商用機飛行員是女性。出生埃及的達爾維什（Nevin Darwish），現職是阿聯酋航空的機長，也是阿拉伯國家第一位飛A380的女機師。阿聯酋航空員工有超過四成是女性，其中還包括來自24個國家的女機師。</p>
                    <p><br /></p>
                    <p>隨著投入航空業的女性逐漸增加，今年3月的國際婦女節，阿聯酋航空由杜拜飛往維也納的航班，特別安排達爾維什搭配女副機長穆哈里（Alia Al Muhairi），透過兩位女機師共飛，宣示航空業的女力崛起。或許在不久的將來，就能搭到全由女性主持的A380航班，享受連續 13 年蟬聯「全球最佳機內娛樂」大獎的服務。</p>
                </div>
            </div>
        )
    }
}

export default EmiratesContent