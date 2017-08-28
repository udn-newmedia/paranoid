import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Cover from './components/cover'
import Sepretor from './components/seperator'
import StarContent from './components/star_content'
import StarLink from './components/star_link'
import Relate from './components/relate'
import FBComment from './components/fb_comment'
import LogoBlock from './components/logo_block'
import Footer from './components/footer'

import './style.css'

class App extends Component{

    render() {

        return (
            <div>
                <Cover cover="star-cover" />
                <Sepretor />
                <StarContent />
                <StarLink />
                <Relate />
                <FBComment />
                <LogoBlock />
                <Footer />
            </div>
        )

    }
}

ReactDOM.render(<App/>, document.getElementById('app'))