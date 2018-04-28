import React, { Component } from 'react';
import PerfectScrollbar from 'perfect-scrollbar';
import {Scrollbars} from 'react-custom-scrollbars';

import Navigation from './Navigation';
import '../stylesheets/App.css';
import SearchBox from './SearchBox';
import Footer from './Footer';
import Feed from './Feed';
import Modal from './Modal';
import Query from '../model/Query';
import {enableBodyScroll, disableBodyScroll} from "body-scroll-lock";
import {retrieveArticles} from "../helpers/http-requests";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentTopic: 'business',
      query: {},
      modal: false,
        articles:[],
        feedLoading:false,
        noMoreResults:false,
        article:{}
    };

      this.pagesLoaded = 0;

    this.switchTopic = this.switchTopic.bind(this);
    this.processQuery = this.processQuery.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount()
  {
    const self = this;
      self.setState({ feedLoading:true});
      window.onscroll = function (ev) {
          if (!self.state.noMoreResults) {

              if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                  waiting(self);
              }
          }
      };
  }

  switchTopic(topic) {
    this.setState({ currentTopic: topic });
    const query = this.state.query;
    query.category = topic;
    this.pagesLoaded=1;
    this.processQuery(query);
  }

  processQuery(query) {
    const self = this;
    if (query instanceof Query) {
     self.setState({ query , feedLoading:true,noMoreResults:false});
        self.pagesLoaded= 1;
        retrieveArticles(query, self.pagesLoaded, (newArticles) => {
            console.log(newArticles);
            console.log(self.pagesLoaded);
            self.setState({ articles: newArticles, feedLoading:false});

        });
      console.log(query);
    }
  }

  showModal(article) {
    this.setState({ modal: true,article });
   // disableBodyScroll();
  }

  hideModal() {
    this.setState({ modal: false });
   // enableBodyScroll();
  }

  render() {

    return (

            <div className="App" id="app">

                <Navigation switchTopic={this.switchTopic} />
                <SearchBox processQuery={this.processQuery} topic={this.state.currentTopic} />
                <Feed loading={this.state.feedLoading} query={this.state.query} articles={this.state.articles} showModal={this.showModal} />
                <Footer />
                <Modal article={this.state.article} hideModal={this.hideModal} show={this.state.modal} />

            </div>


    );
  }
}

function waiting(self) {
    setTimeout(() => {
        console.log('0.1');
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {

            console.log('bottom');
            const articles = self.state.articles;

            if (self.state.noMoreResults === false) {
                self.setState({ feedLoading: true });
                retrieveArticles(self.state.query, self.pagesLoaded + 1, (newArticles) => {
                  console.log(newArticles);
                  console.log(self.pagesLoaded + 1);
                    if (newArticles.length > 0) {
                        self.setState({ feedLoading: false, articles: articles.concat(newArticles), noMoreResults: !newArticles.length });
                        self.pagesLoaded += 1;
                    } else {
                        self.setState({ feedLoading: false, noMoreResults: !newArticles.length });
                    }
                });
            }
        }
    }, 200);
}

export default App;
