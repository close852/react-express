import React, { Component } from 'react';
import axios from 'axios'
class App extends Component {
  state = {
    keyword: ''
  }

  setKeyword = (keyword) => {
    console.log('keyword : ' + keyword);
    this.setState({
      keyword: keyword
    })
  }

  componentDidMount() {
    //[DATA INIT]
    //1. keyword
    axios.get('/api/hello')
      .then(res => {
        this.setKeyword(res.data)
      })
  }

  render() {
    const { keyword } = this.state;
    return (
      <div>
        App {keyword}
      </div>
    );
  }
}

export default App;