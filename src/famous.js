import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Indicator from './components/indicator'
import Head from './components/head'
import Covers from './components/covers'
import FamousContent from './components/famous_content'
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
                <div id="famous">
                    <Indicator />
                    <Head link="./famous.html" select="5"/>
                    <Covers cover="famous-cover" title1="這些名人也是偏執狂！" title2=""/>
                    <FamousContent />
                    <Relate exclude5={true} />
                    <FBComment />
                    <LogoBlock />
                    <Footer />
                </div>
            )
    
        }
    }
    
ReactDOM.render(<App/>, document.getElementById('app'))