import React, { Component } from 'react';
import axios from 'axios'
import { Route, Switch } from 'react-router-dom';
import { Layout, Main } from './layout'
import { BBSIntro,BBSRouter } from './bbs'
import { AppRouter } from './apps'
import './App.css'
class App extends Component {
  state = {
    keyword: '',
    todoList:[{}],
    ingList:[{id:1,title:'22'}],
    endList:[{}],
    tempSaveList:[{}],
    bbsList: [{}]
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
    const {location, history} = this.props;
    const {todoList, ingList,endList,tempSaveList, bbsList} = this.state;

    return (
      <div>
        <Layout isMain={isMain} location={location} history ={history}>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/app">
              <AppRouter location={location} history ={history} ingList={ingList} todoList={todoList} endList={endList} tempSaveList={tempSaveList}/>
            </Route>
            <Route path="/bbs" component={BBSIntro}>
              <BBSRouter bbsList={bbsList}/>
            </Route>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;