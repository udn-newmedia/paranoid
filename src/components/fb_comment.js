import React, { Component } from 'react'

class FBComment extends Component {
    constructor(){
        super()
    }
    componentDidMount() {
        FB.XFBML.parse()
    }
    render(){
        return(
            <div className="fb-comment-block container">
                <div className="fb-comments" data-href={this.props.link} data-numposts="5" data-width="100%"></div>
            </div>
        )
    }
}

export default FBComment