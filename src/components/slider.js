import React, { Component } from 'react'
import classNames from 'classnames'

import hou_slide1 from 'assets/hou_slide1.jpg'
import hou_slide2 from 'assets/hou_slide2.jpg'
import hou_slide3 from 'assets/hou_slide3.jpg'

class Slider extends Component {

    constructor(props) {
        super(props)
        this.state = {active: 0}
        this.test = this.test.bind(this)
        this.test2 = this.test2.bind(this)
        this.state.itemClass1 = classNames({
            'item': true,
            'active': true
        })
        this.state.itemClass2 = classNames({
            'item': true,
        })
        this.state.itemClass3 = classNames({
            'item': true,
        })
    }
    componentDidMount() {
        // setInterval(this.test, 3000)
        setTimeout(this.test, 3000)
    }
    test() {
        console.log(5)
        this.setState({
            itemClass2 : classNames({
                'item': true,
                'next': true,
                
            })
        })
        setTimeout(this.test2, 100)
    }
    test2() {
        this.setState({
            itemClass1 : classNames({
                'item': true,
                'active': true,
                'left': true
            }),
            itemClass2 : classNames({
                'item': true,
                'active': true,
                'next': true,
                'left': true
            })
        })
    }
    render() {
        return (
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className={this.state.itemClass1}>
                        <img src={hou_slide1} />
                    </div>
                    <div className={this.state.itemClass2}>
                        <img src={hou_slide2} />
                    </div>
                    <div className={this.state.itemClass3}>
                        <img src={hou_slide3} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Slider