import React, { Component } from 'react'
import Img from 'react-image'
import aries from 'assets/aries.png'
import taurus from 'assets/taurus.png'
import gemini from 'assets/gemini.png'
import cancer from 'assets/cancer.png'
import leo from 'assets/leo.png'
import virgo from 'assets/virgo.png'
import libra from 'assets/libra.png'
import scorpio from 'assets/scorpio.png'
import sagittarius from 'assets/sagittarius.png'
import capricorn from 'assets/capricorn.png'
import aquarius from 'assets/aquarius.png'
import pisces from 'assets/pisces.png'


class Cover extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id="cover">
                <div className="star-button-contain row">
                    <div className="col-md-2">
                        <Img src={aries} />
                        <div className="star-text">牡羊座</div>
                    </div>
                    <div className="col-md-2">
                        <Img src={taurus} />
                        <div className="star-text">金牛座</div>
                    </div>
                    <div className="col-md-2">
                        <Img src={gemini} />
                        <div className="star-text">雙子座</div>
                    </div>
                    <div className="col-md-2">
                        <Img src={cancer} />
                        <div className="star-text">巨蟹座</div>
                    </div>
                    <div className="col-md-2">
                        <Img src={leo} />
                        <div className="star-text">獅子座</div>
                    </div>
                    <div className="col-md-2">
                        <Img src={virgo} />
                        <div className="star-text">處女座</div>
                    </div>
                    <div className="col-md-2">
                        <Img src={libra} />
                        <div className="star-text">天秤座</div>
                    </div>
                    <div className="col-md-2">
                        <Img src={scorpio} />
                        <div className="star-text">天蠍座</div>
                    </div>
                    <div className="col-md-2">
                        <Img src={sagittarius} />
                        <div className="star-text">射手座</div>
                    </div>
                    <div className="col-md-2">
                        <Img src={capricorn} />
                        <div className="star-text">摩羯座</div>
                    </div>
                    <div className="col-md-2">
                        <Img src={aquarius} />
                        <div className="star-text">水瓶座</div>
                    </div>
                    <div className="col-md-2">
                        <Img src={pisces} />
                        <div className="star-text">雙魚座</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cover