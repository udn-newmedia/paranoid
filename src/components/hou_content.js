import React, { Component } from 'react'
import LazyLoad from 'react-lazyload';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Slider from './slider'
import classNames from 'classnames'

import Quote from './quote'
import ShareBlock from './share_block'
import ImgBlock from './img_block'

import hou1 from 'assets/hou1.jpg'
import hou2 from 'assets/hou2.jpg'
import hou3 from 'assets/hou3.jpg'

import Sound from 'react-sound';

class HouContent extends Component {
    constructor(props) {
        super(props)
        this.state = {soundStatus: 'STOPPED', playing: false, buttonStyle: classNames({
            'glyphicon': true,
            'glyphicon-triangle-right': true
        })}
        this.handleSongLoading = this.handleSongLoading.bind(this)
        this.handleSongPlaying = this.handleSongPlaying.bind(this)
        this.handleSongFinishedPlaying = this.handleSongFinishedPlaying.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
        this.width = (window.innerWidth <= 768) ? (window.innerWidth - 40) : 425
        this.height = this.width * 9 / 16
    }
    handleSongLoading() {

    }
    handleSongPlaying() {
        
    }
    handleSongFinishedPlaying() {
        
        this.setState({
            soundStatus: 'STOPPED',
            buttonStyle: classNames({
                'glyphicon': true,
                'glyphicon-triangle-right': true,
                'glyphicon-pause': false
            }),
            playing: false
        })
    }
    handleButtonClick() {
        const playState = this.state.playing
        const playString = (playState == true) ? 'STOPPED' : 'PLAYING'
        const buttonStyle = classNames({
            'glyphicon': true,
            'glyphicon-triangle-right': playState,
            'glyphicon-pause': !playState
        })
        this.setState({
            soundStatus: playString,
            buttonStyle: buttonStyle,
            playing: !playState
        })
    }
    render() {
        
        return (
            <div className="container">
                <div className="content">
                    <ShareBlock />
                    <p><br /></p>
                    <p>4歲的妳迷戀些什麼？這些事物現在還愛嗎？</p>
                    <p>如果答案是肯定的，那恭喜妳可能是天生偏執狂！</p>
                    <p><br /></p>
                    <p>4歲那年，侯以嘉（Susanne Hou）收到的耶誕禮物是爸爸親手做的小提琴，從那時起他就愛上音樂。雙親都是小提琴家，會走上音樂之路看似理所當然，但若不是真心迷戀，又怎能從4歲堅持到40歲？</p>
                    <Quote text="表演時，我覺得自己像個無所不能的超級英雄，能徜徉各種時空，但同時卻也發現自己在無垠宇宙裡，是如此苗小。" refer="- Susanne Hou" />
                    <p>「每一場演奏，都好像把你剝個精光，並用放大鏡仔細檢驗音樂跟你的關係。」侯以嘉說，音樂其實是探索自己的方式，妳是誰？妳從何而來？妳的人生哲學又是什麼？這些問題在演奏時都會逐漸明瞭。</p>
                </div>
                <ImgBlock img1={hou1} img2={hou2} img3={hou3} imgSay1="還是小女孩的侯以嘉，拉著爸爸親手做的小提琴。" imgSay2="從4歲到40歲，侯以嘉對小提琴的迷戀絲毫未減。" imgSay3="侯以嘉認為，透過音樂讓他更認識自己。" />
                <div className="content">
                    <h2>偏執 讓我認識我是誰</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <p>侯以嘉對小提琴的迷戀，或許出生前就已埋下。父親侯伯治在移民加拿大前是上海芭蕾舞團樂隊首席，也是文革後首位演出西方古典樂的音樂家，女兒出生當天，當爸爸的也還在台上演出。如今雖淡出舞台的鎂光燈，但侯伯治仍是侯以嘉重要的音樂導師，尤其是碰上「梁祝」這首濃濃中國味的小提琴協奏曲，甚至拍了一支介紹「梁祝」的短片。</p>
                        </div>
                        <div className="col-md-6">
                            <p className="hidden-md hidden-lg"><br /></p>
                            <iframe width={this.width} height={this.height} src="https://www.youtube.com/embed/TDl53IN3lIA" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                    <p className="hidden-xs"><br /></p>
                    <p><br /></p>
                    <p>「我在上海出生，移民後爸媽仍演奏中國音樂，至今家裡還是講上海話。」對侯以嘉而言，演出「梁祝」其實就是一趟檢視自己從何而來的尋根之旅。去年她為此回到上海，找到了「梁祝」的作曲家陳綱，並走訪「梁祝」的誕生地上海音樂學院，而這正好也是他父母求學工作、相識相戀的地點。侯以嘉說，演奏「梁祝」彷彿演奏父母的愛情故事，也是對於故鄉的回憶，每個音符都充滿故事。</p>
                    <p><br /></p>
                    <div className="row">
                        <div className="col-md-5">
                            <Slider />
                        </div>
                        <div className="col-md-7">
                            <Sound
                                url="./src/assets/hou.mp3"
                                playStatus={this.state.soundStatus}
                                playFromPosition={0 /* in milliseconds */}
                                onLoading={this.handleSongLoading}
                                onPlaying={this.handleSongPlaying}
                                onFinishedPlaying={this.handleSongFinishedPlaying}
                            />
                            <p><br/></p>
                            <p><b> 《梁祝小提琴協奏曲》</b></p>
                            <p><br/></p>
                            <p>題材來自於中國家喻戶曉的經典愛情故事《梁山伯與祝英台》，全曲充滿中國戲曲風格，對受西方古典音樂訓練的小提琴家而言，如何演繹東方神韻是非常巨大的挑戰。侯以嘉在父親侯伯治指導下演出此曲，對父女兩人的意義非凡。</p>
                            <p><br/></p>
                            <button id="playButton" onClick={this.handleButtonClick}>
                                <span id="playicon" className={this.state.buttonStyle}></span>視聽播放
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HouContent