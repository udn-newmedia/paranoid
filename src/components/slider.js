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
        this.test3 = this.test3.bind(this)
        this.active = 0
        this.slideSpeed = 3000
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
        setTimeout(this.test, this.slideSpeed)
    }
    test() {        
        this.setState({
            itemClass1 : classNames({
                'item': true,
                'active': (this.active == 0),
                'next': (this.active == 2),
            }),
            itemClass2 : classNames({
                'item': true,
                'active': (this.active == 1),
                'next': (this.active == 0),
            }),
            itemClass3 : classNames({
                'item': true,
                'active': (this.active == 2),
                'next': (this.active == 1),
            })
        })
        setTimeout(this.test2, 100)
    }
    test2() {
        this.setState({
            itemClass1 : classNames({
                'item': true,
                'active': (this.active == 0),
                'next': (this.active == 2),
                'left': (this.active == 0 || this.active == 2)
            }),
            itemClass2 : classNames({
                'item': true,
                'active': (this.active == 1),
                'next': (this.active == 0),
                'left': (this.active == 0 || this.active == 1)
            }),
            itemClass3 : classNames({
                'item': true,
                'active': (this.active == 2),
                'next': (this.active == 1),
                'left': (this.active == 1 || this.active == 2)
            })
        })
        setTimeout(this.test3, 600)
    }
    test3() {
        this.active = (this.active + 1) % 3
        this.setState({
            itemClass1 : classNames({
                'item': true,
                'active': (this.active == 0),
            }),
            itemClass2 : classNames({
                'item': true,
                'active': (this.active == 1),
            }),
            itemClass3 : classNames({
                'item': true,
                'active': (this.active == 2),
            })
        })
        setTimeout(this.test, this.slideSpeed)
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