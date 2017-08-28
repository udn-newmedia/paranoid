import React, { Component } from 'react'

import ShareBlock from './share_block'
import Quote from './quote'

class EmiratesContent extends Component {
    render() {
        return (
            <div className="container content">
                <p><br /></p>
                <ShareBlock />
                <p><br /></p>
                <p>在沙烏地阿拉伯，女性不能考駕照，更被禁止開車，但同樣出生伊斯蘭世界，有群女性靠著對天空幾近偏執的渴望，成功翱翔天際。</p>
                <p><br /></p>
                <p>29歲的瓦茲（Shaesta Waiz）在蘇聯入侵阿富汗時生於難民營，1987年移民美國後，她發現自己熱愛飛行，成為出生自阿富汗第一位有飛行執照的平民女性。今年八月，瓦茲剛完成獨自環球飛行的挑戰，共造訪18個國家，總航程超過2萬5千公里。</p>
                <Quote text="我發現我對飛行的熱愛後，開始挑戰自我。<br />我開始閱讀相關書籍、精進數學，開始用不同角度看待世界和天空。" refer="- Shaesta Waiz" />
                <p>「飛機不會去區分你的性別、宗教與出生背景。」今年7月，瓦茲在環球途中訪問杜拜，與阿聯酋航空旗下女機師柏姬達（Bakhita Al Muheiri）共同為女權發生，希望透過她們成功追夢的故事，鼓舞更多女性。柏姬達說：「當初家人雖然鼓勵我當機師，但他們仍然有點擔心旁人的眼光，也有點懷疑我能否做到？」</p>
            </div>
        )
    }
}

export default EmiratesContent