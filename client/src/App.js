import React, { Component } from 'react';
import './App.css';
import Home from "./Components/Home/home.jsx";
import Register from "./Components/Register/register.jsx";
import Access from "./Components/Access/access.jsx";
import Link from "./Components/Link/link.jsx";
import Deny from "./Components/Deny/deny.jsx";
// import axios from 'axios'

class App extends Component {
  state = {
    response: {}
  };
  
  // componentDidMount() {
  //   axios.get('/api/v1/say-something').then((res) => {
  //     const response = res.data;
  //     this.setState({response});
  //   });
  // }

  render() {
    return (
      <div className="App">
        <Home />
        {/* <Register /> */}
        {/* <Access /> */}
        {/* <Link/> */}
        {/* <Deny /> */}
      </div>
    );
  }
}

export default App;