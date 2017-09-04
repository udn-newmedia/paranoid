import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Indicator from './components/indicator'
import Head from './components/head'
import Cover from './components/cover'
import StarSelectBlock from './components/starSelectBlock'

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
                <StarSelectBlock select={this.state.select} onSelectStar={this.selectStar}/>
            </div>
        )

    }
}

ReactDOM.render(<App/>, document.getElementById('app'))