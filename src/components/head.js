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
        if(currentH > window.innerHeight/3){
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
                    <a href="./hou.html" target="_blank"><div className="hbutton" data-target="1">侯以嘉戀琴40年</div></a>
                    <a href="./emirates.html" target="_blank"><div className="hbutton" data-target="2">阿拉伯女機師追夢</div></a>
                    <a href="./wang.html" target="_blank"><div className="hbutton" data-target="3">王盛弘的寫作偏執</div></a>
                    <a href="./sun.html" target="_blank"><div className="hbutton" data-target="4">孫志華的工作偏執</div></a>
                    <a href="./famous.html" target="_blank"><div className="hbutton" data-target="5">偏執狂名人</div></a>
                    <a href="./star.html" target="_blank"><div className="hbutton" data-target="6">12星座偏執診療室</div></a>
                </div>

            </div>
        )
    }
}

export default Head