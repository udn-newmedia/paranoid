import React, { Component } from 'react'

class Head extends Component {
    constructor(props) {
        super(props)
        this.toggleClass= this.toggleClass.bind(this);
        this.handleScroll = this.handleScroll.bind(this)
        this.state = {style: { top: '0' }, active: false}
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    toggleClass(){
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    }
    handleScroll(event) {
        
        let currentH = event.srcElement.body.scrollTop
        let top = (window.innerWidth > 1024) ? '6px' : '0px'
        if(currentH > window.innerHeight){
            this.setState({
                style: { top: top}
            })
        }
        else{
            this.setState({
                style: { top: '0'}
            })
        }
        
    }

    render() {
        return (
            <div id="head" style={this.state.style}>
                <div id="icon">
                    <a href={this.props.link}>
                        <div className="head-text pink">我愛 <b>我偏執</b></div>
                    </a>
                </div>
                <div id="hbutton" className="squre hidden-md hidden-lg">
                    <div id="nav-icon" className={this.state.active ? 'open': null} onClick={this.toggleClass}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div id="hbutton-contain" className={this.state.active ? 'open': null}>
                    <div className="hbutton" data-target="1">侯以嘉戀琴40年</div>
                    <div className="hbutton" data-target="2">阿拉伯女性升空追夢</div>
                    <div className="hbutton" data-target="3">作家王盛弘的書寫偏執</div>
                    <div className="hbutton" data-target="4">孫志華的工作偏執</div>
                    <div className="hbutton" data-target="5">這些名人也是偏執狂</div>
                </div>

            </div>
        )
    }
}

export default Head