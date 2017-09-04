import React, { Component } from 'react'
import Img from 'react-image'

import sep1 from 'assets/sep1.jpg'
import sep2 from 'assets/sep2.jpg'
import sep3 from 'assets/sep3.jpg'
import sep4 from 'assets/sep4.jpg'

import sep1_m from 'assets/sep1_mobile.jpg'
import sep2_m from 'assets/sep2_mobile.jpg'
import sep3_m from 'assets/sep3_mobile.jpg'
import sep4_m from 'assets/sep4_mobile.jpg'

const styles = {
    margin: (window.innerWidth <= 768) ? '50px auto' : '100px auto'
}

class Seperator extends Component {
    constructor(props){
        super(props)
        this.dynamic_img = this.dynamic_img.bind(this)
    }
    dynamic_img(number) {
        if(window.innerWidth <= 768){
            if(number == 1) {
                return sep1_m
            }
            if(number == 2) {
                return sep2_m
            }
            if(number == 3){
                return sep3_m
            }
            if(number ==4 ){
                return sep4_m
            }
        }
        else{
            if(number == 1) {
                return sep1
            }
            if(number == 2) {
                return sep2
            }
            if(number == 3){
                return sep3
            }
            if(number ==4 ){
                return sep4
            }
        }
    }
    render(){
        if(this.props.select == 'wind'){
            return(
                <div className="container" style={styles}>
                    <Img src={this.dynamic_img(3)} />
                </div>
            )
        }
        else if(this.props.select == 'fire') {
            return(
                <div className="container" style={styles}>
                    <Img src={this.dynamic_img(1)} />
                </div>
            )
        }
        else if(this.props.select == 'water') {
            return(
                <div className="container" style={styles}>
                    <Img src={this.dynamic_img(2)} />
                </div>
            )
        }
        else if(this.props.select == 'earth') {
            return(
                <div className="container" style={styles}>
                    <Img src={this.dynamic_img(4)} />
                </div>
            )
        }
        else{
            return null
        }
        
    }
}

export default Seperator