import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import "./index.css"

import Blog from './containers/Blog/Blog'

class App extends Component {
	render() {
		return (  
			// <BrowserRouter basename="/my-app">
			<BrowserRouter>
				<div className="App" style={{ height: 900}}>
					<Blog />
				</div>
			</BrowserRouter>
		)
	}
}

export default App
