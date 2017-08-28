import React, { Component } from 'react'

class Covers extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        return(
            <div id="cover" className={this.props.cover}>
                <div className="title-contain pink">
                    <div className="sub-title pink">#我愛 <b>我偏執</b></div>
                    <h1 className="pink">{this.props.title1}<br/>{this.props.title2}</h1>
                </div>
            </div>
        )
    }
}

export default Covers