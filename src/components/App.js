import React, { Component } from 'react';
import Navigation from './Navigation';
import '../stylesheets/App.css';
import SearchBox from './SearchBox';
import Footer from './Footer';
import Feed from './Feed';
import Query from '../model/Query';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentTopic: 'business',
      query: {},
    };
    this.switchTopic = this.switchTopic.bind(this);
    this.processQuery = this.processQuery.bind(this);
  }

  componentWillMount() {

  }
  switchTopic(topic) {
    this.setState({ currentTopic: topic });
    const query = this.state.query;
    query.category = topic;
    this.setState({ query });
  }
  processQuery(query) {
    if (query instanceof Query) {
      this.setState({ query });
      console.log(query);
    }
  }
  render() {
    return (
      <div className="App">
        <Navigation switchTopic={this.switchTopic} />
        <SearchBox processQuery={this.processQuery} topic={this.state.currentTopic} />
        <Feed query={this.state.query} />
        <Footer />
      </div>
    );
  }
}


export default App;
