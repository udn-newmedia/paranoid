import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer>
                <span className="footer-link footer-right-board"><a href="http://www.udngroup.com/" target="_blank">聯合報系</a></span>
                <span className="footer-link footer-right-board"><a href="https://www.facebook.com/udnplus" target="_blank">粉絲團</a></span>
                <span className="footer-link footer-right-board"><a href="http://udndata.com/udnauthority.html" target="_blank">新聞授權</a></span>
                <span className="footer-link"><a href="http://www.udngroup.com/information/privacy" target="_blank">隱私權聲明</a></span>
            </footer>
        )
    }
}

export default Footer