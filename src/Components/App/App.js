import React from 'react'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {Navbar } from '../Navbar'
import {NewsSection} from '../NewsSection'

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css'

function App(){

    return(
        <div className="app">
            <Navbar/>
            <NewsSection/>
        </div>
    )
}

export {App}