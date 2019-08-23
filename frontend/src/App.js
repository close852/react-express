import React, { Component } from 'react';
import axios from 'axios'
import { Layout } from './layout'
import './App.css'
class App extends Component {
  state = {
    keyword: ''
  }

  setKeyword = (keyword) => {
    console.log('keyword : ' + JSON.stringify(keyword.data));
    this.setState({
      keyword: JSON.stringify(keyword.data)
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
      <Layout>
        {keyword}
      </Layout>
    );
  }
}

export default App;