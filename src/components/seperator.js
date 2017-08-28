import React, { Component } from 'react'
import Img from 'react-image'

import sep3 from 'assets/sep3.jpg'

const styles = {
    margin: '100px auto'
}

class Seperator extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="container" style={styles}>
                <Img src={sep3} />
            </div>
        )
    }
}

export default Seperator