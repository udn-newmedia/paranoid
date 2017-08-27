import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Cover from './components/cover'

import './style.css'

class App extends Component{

    render() {

        return (
            <Cover />
        )

    }
}

ReactDOM.render(<App/>, document.getElementById('app'))