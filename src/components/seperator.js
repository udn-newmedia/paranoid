import React, { Component } from 'react'
import Img from 'react-image'

import sep1 from 'assets/sep1.jpg'
import sep2 from 'assets/sep2.jpg'
import sep3 from 'assets/sep3.jpg'
import sep4 from 'assets/sep4.jpg'

const styles = {
    margin: '100px auto'
}

class Seperator extends Component {
    constructor(props){
        super(props)
    }
    render(){
        if(this.props.select == 'wind'){
            return(
                <div className="container" style={styles}>
                    <Img src={sep3} />
                </div>
            )
        }
        else if(this.props.select == 'fire') {
            return(
                <div className="container" style={styles}>
                    <Img src={sep1} />
                </div>
            )
        }
        else if(this.props.select == 'water') {
            return(
                <div className="container" style={styles}>
                    <Img src={sep2} />
                </div>
            )
        }
        else if(this.props.select == 'earth') {
            return(
                <div className="container" style={styles}>
                    <Img src={sep4} />
                </div>
            )
        }
        else{
            return null
        }
        
    }
}

export default Seperator