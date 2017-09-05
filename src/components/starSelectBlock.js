import React, { Component } from 'react'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Sepretor from './seperator'
import StarContent from './star_content'
import StarLink from './star_link'
import Relate from './relate'
import FBComment from './fb_comment'
import LogoBlock from './logo_block'
import Footer from './footer'

class starSelectBlock extends Component {
    constructor() {
        super()
        this.selectStar = this.selectStar.bind(this);
        this.state = {select: 1}
    }
    selectStar(value) {
        console.log(value)
        this.setState({select: value})
        this.props.onSelectStar(value)
    }
    render() {
        if(this.state.select != 1){
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
                    <FBComment />
                    <LogoBlock />
                    <Footer />
                
                </ReactCSSTransitionGroup>
            )
        }
        else{
            return null
        }
    }
}

export default starSelectBlock