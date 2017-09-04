import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Indicator from './components/indicator'
import Head from './components/head'
import Covers from './components/covers'
import SunContent from './components/sun_content'
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
        }
    
        render() {
            return (
                <div>
                    <Indicator />
                    <Head link="./sun.html" select="4"/>
                    <Covers cover="sun-cover" title1="混搭生活" title2="孫志華的工作偏執"/>
                    <SunContent />
                    <Banner banner_id="sun-banner" text="想知道孫總偏執的祕密武器？" button_text="點我取得秘密武器" img_say="圖／陳立凱 攝影" link="http://www.samsung.com/tw/tablets/galaxy-tab-s3-t825/"/>
                    <Relate exclude4={true} />
                    <FBComment />
                    <LogoBlock />
                    <Footer />
                </div>
            )
    
        }
    }
    
ReactDOM.render(<App/>, document.getElementById('app'))