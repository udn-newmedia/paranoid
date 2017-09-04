import React, { Component } from 'react'
import Img from 'react-image'

class CoverStar extends Component {
    constructor(props){
        super(props)
        this.selectStar = this.selectStar.bind(this)
    }
    selectStar(){
        console.log(this.props)
        this.props.onSelectStar(this.props.starGroup);
    }
    render(){
        return (
            <div className="col-xs-4 col-md-2 cover-star" onClick={this.selectStar}>
                <Img src={this.props.star} />
                <div className="star-text">{this.props.text}</div>
            </div>
        )
    }
}

export default CoverStar