import React, { Component } from 'react'
import Img from 'react-image'

class CoverStar extends Component {
    constructor(props){
        super(props)
        this.test = this.test.bind(this)
    }
    test(){
        console.log(this.props)
        // this.props.onTestChange(222);
    }
    render(){
        return (
            <div className="col-md-2 cover-star" onClick={this.test}>
                <Img src={this.props.star} />
                <div className="star-text">{this.props.text}</div>
            </div>
        )
    }
}

export default CoverStar