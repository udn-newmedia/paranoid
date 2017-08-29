import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Indicator from './components/indicator'
import Head from './components/head'
import Covers from './components/covers'
import EmiratesContent from './components/emirates_content'
import Banner from './components/banner'
import Relate from './components/relate'
import FBComment from './components/fb_comment'
import LogoBlock from './components/logo_block'
import Footer from './components/footer'

import './style.css'

class App extends Component{

        constructor(props) {
            super(props)
            this.updateDimensions = this.updateDimensions.bind(this);
        }

        updateDimensions() {
            window.location.href = window.location.href
        }

        componentDidMount() {
            window.addEventListener("resize", this.updateDimensions);
        }
    
        render() {
            return (
                <div>
                    <Indicator />
                    <Head link="emirates.html"/>
                    <Covers cover="emirates-cover" title1="偏執追夢" title2="讓她們從傳統中解放"/>
                    <EmiratesContent />
                    <Banner banner_id="emirates-banner" text="親身體驗全球最棒的機內娛樂" button_text="前往體驗" img_say="圖／美聯社、阿聯酋航空提供" link="https://www.emirates.com/tw/chinese/"/>
                    <Relate />
                    <FBComment />
                    <LogoBlock />
                    <Footer />
                </div>
            )
    
        }
    }
    
ReactDOM.render(<App/>, document.getElementById('app'))