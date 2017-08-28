import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Covers from './components/covers'
import EmiratesContent from './components/emirates_content'

import './style.css'

class App extends Component{
    
        render() {
    
            return (
                <div>
                    <Covers cover="emirates-cover" title1="偏執追夢" title2="讓她們從傳統中解放"/>
                    <EmiratesContent />
                </div>
            )
    
        }
    }
    
ReactDOM.render(<App/>, document.getElementById('app'))