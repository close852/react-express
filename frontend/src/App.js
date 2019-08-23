import React, { Component } from 'react';
import axios from 'axios'
import { Route, Switch } from 'react-router-dom';
import { Layout, Main } from './layout'
import { BBSIntro } from './bbs'
import { AppIntro } from './apps'
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
    const isMain = this.props.location.pathname === "/";

    return (
      <div>
        <Layout isMain={isMain}>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/bbs" component={BBSIntro} />
            <Route path="/app" component={AppIntro} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;