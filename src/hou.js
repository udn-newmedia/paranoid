import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Indicator from './components/indicator'
import Head from './components/head'
import Covers from './components/covers'
import HouContent from './components/hou_content'
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
                    <Head link="./hou.html" select="1"/> 
                    <Covers cover="hou-cover" title1="天生偏執狂" title2="小提琴家侯以嘉"/>
                    <HouContent />
                    <Banner banner_id="hou-banner" text="當神秘東方遇上浪漫西方<br />侯以嘉  X 英國皇家愛樂管弦樂團" button_text="點我馬上購票" img_say="圖／侯以嘉提供 試聽音樂／聯合數位文創提供" link="https://tickets.udnfunlife.com/application/UTK02/UTK0201_.aspx?PRODUCT_ID=D0HOEFR5"/>
                    <Relate exclude1={true} />
                    <FBComment link="https://udn.com/upf/newmedia/2017_data/paranoid/hou.html"/>
                    <LogoBlock />
                    <Footer />
                </div>
            )
    
        }
    }
    
ReactDOM.render(<App/>, document.getElementById('app'))