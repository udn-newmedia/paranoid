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
    }
    selectStar(value) {
        console.log(value)
        this.props.onSelectStar(value)
    }
    render() {
        if(this.props.select != 1){
            return (
                <ReactCSSTransitionGroup
                    transitionName="fadein"
                    transitionAppear={true}
                    transitionAppearTimeout={700}
                    transitionEnter={false}
                    transitionLeave={false} >
                
                    <Sepretor select={this.props.select}/>
                    <StarContent select={this.props.select}/>
                    <StarLink select={this.props.select} onSelectStar={this.selectStar}/>
                    <Relate />
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