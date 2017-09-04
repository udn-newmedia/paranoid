import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Indicator from './components/indicator'
import Head from './components/head'
import Covers from './components/covers'
import WangContent from './components/wang_content'
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
            // window.location.href = window.location.href
        }

        componentDidMount() {
            window.addEventListener("resize", this.updateDimensions);
            var x = document.querySelectorAll("a");
            console.log(x)
            
        }
    
        render() {
            return (
                <div>
                    <Indicator />
                    <Head link="./wang.html" select="3" />
                    <Covers cover="wang-cover" title1="細節魔人" title2="作家王盛弘對完美的偏執"/>
                    <WangContent />
                    <Banner banner_id="wang-banner" text="可以等等我嗎這世界，以步行的速度" button_text="點我 跟著王盛弘一起去看花" img_say="攝影／程宜華、張心慈" link="http://reading.udn.com/v2/bookDesc.do?id=115063"/>
                    <Relate exclude3={true} />
                    <FBComment />
                    <LogoBlock />
                    <Footer />
                </div>
            )
    
        }
    }
    
ReactDOM.render(<App/>, document.getElementById('app'))