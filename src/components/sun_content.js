import React, { Component } from 'react'
import LazyLoad from 'react-lazyload';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Quote from './quote'
import ShareBlock from './share_block'
import ImgBlock from './img_block'

import sun1 from 'assets/sun1.jpg'
import sun2 from 'assets/sun2.jpg'
import sun3 from 'assets/sun3.jpg'

class SunContent extends Component {

    render() {
        return (
            <div className="container">
                <div className="content">
                    <ShareBlock />
                    <p><br /></p>
                    <p>「其實我還蠻喜歡工作跟生活融合不分的狀態，對我來說很有安全感」，聯合線上總經理這樣的說法自虐嗎？</p>
                    <p><br /></p>
                    <p>進入後工業社會，人們從生產線解放，於是很難再將工作和生活清楚分割：往往，我們在上班時融入生活興趣，以平衡工作的壓力，卻也常在下班後，腦中仍轉著工作的問題和點子。工作混搭生活，反倒成了網路時代的一種常態，至少這是孫總的日常，也反映了他對工作的偏執。</p>
                    <Quote text="我也不知道我到底是為了工作閱讀、還是閱讀之後融入工作，哈！但這些行為都不是刻意的，對我來說還蠻自然的。" refer="- 孫志華" />
                    <p>「我的平板在哪？」孫總的偏執全靠著一台平板，每天睜眼第一件事就是找平板，開機同時也幫大腦開機，按孫總自己的說法，是「人生、生活、工作的啟發一次滿足」。</p>
                </div>
                <ImgBlock img1={sun1} img2={sun2} img3={sun3} imgSay1="每天早上打開平板，對孫總而言也是幫大腦開機。" imgSay2="孫志華習慣透過手寫整理思緒。" imgSay3="孫總的休閒娛樂也離不開平板。" />
                <div className="content">
                    <h2>手寫偏執 我寫故我在</h2>
                    <p>平板裡頭密密麻麻都是他的筆記，清單滑了好幾下都見不到底。「7年前我剛來聯合報系時，就寫掉五六本筆記本，後來平板出現，就隨身帶著平板紀錄想法。」孫志華習慣用手寫手繪整理思緒，透過圖像式、類似PPT的邏輯，「能讓我全盤檢視內外部的狀況，更容易理解一件事，若有什麼疏漏，也容易被揪出來。」</p>
                    <p><br /></p>
                    <p>從無到有的建構過程，圖像式、結構化的思考對孫志華非常重要。他說如果不用這樣，會覺得事情沒有邏輯，或擔心思考不夠縝密。</p>
                    <p><br /></p>
                    <p>「我也是有娛樂的啦！」訪問尾聲，孫志華極力想撇清工作狂的形象。他說最近在追Netflix的劇集，除了現在討論度很高的「紙牌屋」第五季之外，也大推「都鐸王朝」和「麥地奇家族：佛羅倫斯大師」，不過這些也都是在平板上看。</p>
                </div>
            </div>
        )
    }
}

export default SunContent