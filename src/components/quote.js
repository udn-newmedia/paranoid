import React, { Component } from 'react'

class Quote extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="quote-contain">
                <div className="quote-text">
                    {this.props.text.split('<br />').map(function(item, key) {
                        return (
                        <span key={key}>
                            {item}
                            <br/>
                        </span>
                        )
                  })}
                </div>
                <div className="quote-ref">{this.props.refer}</div>
            </div>
        )
    }
}

export default Quote