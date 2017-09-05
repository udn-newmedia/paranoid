import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Indicator from './components/indicator'
import Head from './components/head'
import Cover from './components/cover'

import Sepretor from './components/seperator'
import StarContent from './components/star_content'
import StarLink from './components/star_link'
import Relate from './components/relate'
import FBComment from './components/fb_comment'
import LogoBlock from './components/logo_block'
import Footer from './components/footer'

import './style.css'

class App extends Component{
    constructor(){
        super()
        this.state = {select : 1}
        this.selectStar = this.selectStar.bind(this)
        this.updateDimensions = this.updateDimensions.bind(this);
    }
    updateDimensions() {
        // window.location.href = window.location.href
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
        
    }
    selectStar(value){
        console.log(value)
        this.setState({
            select: value
        })
        this.forceUpdate()
        window.scrollTo(0,0)
    }
    render() {
        if(this.state.select == 1){
            return (
                <div id="star">
                    <Indicator />
                    <Head link="./star.html" select="6"/>
                    <ReactCSSTransitionGroup
                        transitionName="fadein"
                        transitionAppear={true}
                        transitionAppearTimeout={700}
                        transitionEnter={false}
                        transitionLeave={false} >
                            <Cover cover="star-cover" onSelectStar={this.selectStar} select={this.state.select}/>
                    </ReactCSSTransitionGroup>
                </div>
            )
        }
        else{
            return (
                <ReactCSSTransitionGroup
                    transitionName="fadein"
                    transitionAppear={true}
                    transitionAppearTimeout={700}
                    transitionEnter={false}
                    transitionLeave={false} >

                    <Sepretor select={this.state.select}/>
                    <StarContent select={this.state.select}/>
                    <StarLink select={this.state.select} onSelectStar={this.selectStar}/>
                    <Relate exclude5={true} />
                    <FBComment link="https://udn.com/upf/newmedia/2017_data/paranoid/star.html"/>
                    <LogoBlock />
                    <Footer />
                
                </ReactCSSTransitionGroup>
            )
        }

    }
}

ReactDOM.render(<App/>, document.getElementById('app'))