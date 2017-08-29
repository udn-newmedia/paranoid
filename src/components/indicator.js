import React, { Component } from 'react'

class Indicator extends Component {
    constructor(props) {
        super(props)
        this.handleScroll = this.handleScroll.bind(this)
        this.state = {style: { width: '0'}}
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll(event) {

        let currentH = event.srcElement.body.scrollTop
        let totalH = event.srcElement.body.clientHeight - window.innerHeight
        let progress = ((currentH / totalH) * 100).toFixed(2) + '%'
        this.setState({
            style: { width: progress}
        })
    }
    
    render() {
        return (
            <div id="indicator">
                <div id="indicator-bar" style={this.state.style}></div>
            </div>
        )
    }
}

export default Indicator