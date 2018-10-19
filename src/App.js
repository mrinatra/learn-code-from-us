import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./Header"
import Profiles from "./Profiles"
import About from "./About"

class App extends Component {
  componentDidMount(){
        document.title = "Learn Code From Us"
      } 
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Profiles} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    )
  }
}

export default App
