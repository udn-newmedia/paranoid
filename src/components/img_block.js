import React, { Component } from 'react'
import LazyLoad from 'react-lazyload';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const lazyOffset = -200

let staticHeight

if(window.innerWidth < 768){
    staticHeight = (window.innerWidth - 40)
}
else if(window.innerWidth >= 768 && window.innerWidth < 1025){
    staticHeight = (window.innerWidth - 200) * 9 / 12 - 7.5
}
else{
    staticHeight = 654
}

let webHeight

if(window.innerWidth < 768){
    webHeight = 'auto'
}
else if(window.innerWidth >= 768 && window.innerWidth < 1025){
    webHeight = ((window.innerWidth - 200) * 9 / 12 + 27 - 7.5) + 'px'
}
else{
    webHeight = '683px'
}


const staticHeightCss = {
    height: webHeight,
    marginTop: '20px'
}

const containHeightCss = {
    height: staticHeight + 'px'
}

class ImgBlock extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-9" style={staticHeightCss}>
                        <div style={containHeightCss}>
                            <LazyLoad height={staticHeight} once offset={lazyOffset}>
                                <ReactCSSTransitionGroup
                                    transitionName="lazyload"
                                    transitionAppear={true}
                                    transitionAppearTimeout={700}
                                    transitionEnter={false}
                                    transitionLeave={false} >
                                        <img src={this.props.img1} />
                                </ReactCSSTransitionGroup>
                            </LazyLoad>
                        </div>
                        <div className="img-say">{this.props.imgSay1}</div>
                    </div>
                    <div className="col-sm-3 hidden-xs" style={staticHeightCss}></div>
                    <div className="col-sm-3 hidden-xs" style={staticHeightCss}></div>
                    <div className="col-sm-9" style={staticHeightCss}>
                        <div style={containHeightCss}>
                            <LazyLoad height={staticHeight} once offset={lazyOffset}>
                                <ReactCSSTransitionGroup
                                    transitionName="lazyload"
                                    transitionAppear={true}
                                    transitionAppearTimeout={700}
                                    transitionEnter={false}
                                    transitionLeave={false} >
                                        <img src={this.props.img2} />
                                </ReactCSSTransitionGroup>
                            </LazyLoad>
                        </div>
                        <div className="img-say">{this.props.imgSay2}</div>
                    </div>
                    <div className="col-sm-9" style={staticHeightCss}>
                        <div style={containHeightCss}>
                            <LazyLoad height={staticHeight} once offset={lazyOffset}>
                                <ReactCSSTransitionGroup
                                    transitionName="lazyload"
                                    transitionAppear={true}
                                    transitionAppearTimeout={700}
                                    transitionEnter={false}
                                    transitionLeave={false} >
                                        <img src={this.props.img3} />
                                </ReactCSSTransitionGroup>
                            </LazyLoad>
                        </div>
                        <div className="img-say">{this.props.imgSay3}</div>
                    </div>
                    <div className="col-sm-3 hidden-xs" style={staticHeightCss}></div>
                </div>
            </div>
        )
    }
}

export default ImgBlock