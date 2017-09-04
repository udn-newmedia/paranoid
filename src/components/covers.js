import React, { Component } from 'react'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import emirates_l2 from 'assets/emirates_bg_l2.png'
import emirates_l3 from 'assets/emirates_bg_l3.png'
import emirates_mobile_l2 from 'assets/emirates_mobile_bg_l2.png'
import emirates_mobile_l3 from 'assets/emirates_mobile_bg_l3.png'
import hou_l2 from 'assets/hou_bg_l2.png'
import hou_l3 from 'assets/hou_bg_l3.png'
import hou_mobile_l2 from 'assets/hou_mobile_bg_l2.png'
import hou_mobile_l3 from 'assets/hou_mobile_bg_l3.png'
import wang_l2 from 'assets/wang_bg_l2.png'
import wang_l3 from 'assets/wang_bg_l3.png'
import wang_mobile_l2 from 'assets/wang_mobile_bg_l2.png'
import wang_mobile_l3 from 'assets/wang_mobile_bg_l3.png'
import sun_l2 from 'assets/sun_bg_l2.png'
import sun_l3 from 'assets/sun_bg_l3.png'
import sun_mobile_l2 from 'assets/sun_mobile_bg_l2.png'
import sun_mobile_l3 from 'assets/sun_mobile_bg_l3.png'
import famous_l2 from 'assets/famous_bg_l2.png'
import famous_l3 from 'assets/famous_bg_l3.png'
import famous_mobile_l2 from 'assets/famous_mobile_bg_l2.png'
import famous_mobile_l3 from 'assets/famous_mobile_bg_l3.png'


class Covers extends Component {
    constructor(props) {
        super(props)
        this.dynamic_motion = this.dynamic_motion.bind(this)
    }
    dynamic_motion(cover, direction){
        if(cover === 'wang-cover' && window.innerWidth <= 768){
            if(direction === 'right') {
                return 'leftin'
            }
            if(direction === 'left') {
                return 'rightin'
            }
        }
        else if(cover === 'sun-cover' && window.innerWidth <= 768){
            if(direction === 'right') {
                return 'leftin'
            }
            if(direction === 'left') {
                return 'rightin'
            }
        }
        else{
            if(direction === 'right') {
                return 'rightin'
            }
            if(direction === 'left') {
                return 'leftin'
            }
        }
        
    }
    render() {

        if(this.props.cover == 'sun-cover') {
            if(window.innerWidth <= 768){
                this.bg_l2 = sun_mobile_l2
                this.bg_l3 = sun_mobile_l3
            }
            else{
                this.bg_l2 = sun_l2
                this.bg_l3 = sun_l3
            }
        }

        if(this.props.cover == 'emirates-cover') {
            if(window.innerWidth <= 768){
                this.bg_l2 = emirates_mobile_l2
                this.bg_l3 = emirates_mobile_l3
            }
            else{
                this.bg_l2 = emirates_l2
                this.bg_l3 = emirates_l3
            }
        }

        if(this.props.cover == 'hou-cover') {
            if(window.innerWidth <= 768){
                this.bg_l2 = hou_mobile_l2
                this.bg_l3 = hou_mobile_l3
            }
            else{
                this.bg_l2 = hou_l2
                this.bg_l3 = hou_l3
            }
        }

        if(this.props.cover == 'wang-cover') {
            if(window.innerWidth <= 768){
                this.bg_l2 = wang_mobile_l2
                this.bg_l3 = wang_mobile_l3
            }
            else{
                this.bg_l2 = wang_l2
                this.bg_l3 = wang_l3
            }
        }

        if(this.props.cover == 'famous-cover') {
            if(window.innerWidth <= 768){
                this.bg_l2 = famous_mobile_l2
                this.bg_l3 = famous_mobile_l3
            }
            else{
                this.bg_l2 = famous_l2
                this.bg_l3 = famous_l3
            }
        }



        return(
            <div id="cover" className={this.props.cover}>
                <div className="bg-layer">
                    <ReactCSSTransitionGroup
                        transitionName={this.dynamic_motion(this.props.cover, 'right')}
                        transitionAppear={true}
                        transitionAppearTimeout={1500}
                        transitionEnter={false}
                        transitionLeave={false} >
                        <img className="bg-l2" src={this.bg_l2}/>
                    </ReactCSSTransitionGroup>
                    <ReactCSSTransitionGroup
                        transitionName={this.dynamic_motion(this.props.cover, 'left')}
                        transitionAppear={true}
                        transitionAppearTimeout={1500}
                        transitionEnter={false}
                        transitionLeave={false} >
                        <img className="bg-l3" src={this.bg_l3}/>
                    </ReactCSSTransitionGroup>
                </div>
                <div className="title-contain pink">
                    <div className="sub-title pink">#我愛 <b>我偏執</b><span className="animate-bar"></span></div>
                    <ReactCSSTransitionGroup
                        transitionName="fadein-long"
                        transitionAppear={true}
                        transitionAppearTimeout={2000}
                        transitionEnter={false}
                        transitionLeave={false} >
                        <h1 className="pink">{this.props.title1}<br/>{this.props.title2}</h1>
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        )
    }
}

export default Covers