import React from 'react';
import '../stylesheets/Feed.scss';
import Card from './Card';
import Query from '../model/Query';
import { retrieveArticles, getAbstractBackground } from '../helpers/http-requests';


class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      noResults: false,
      loading: false,
      lostConnection: false,
      noMoreResults: false,
    };
    this.pagesLoaded = 0;
  }

  componentDidMount() {
    const self = this;

    window.onscroll = function (ev) {
      if (!self.state.noResults) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
          console.log('bottom');
          const articles = self.state.articles;
          self.setState({ loading: true });
          retrieveArticles(self.props.query, self.pagesLoaded + 1, (newArticles) => {
            self.setState({ loading: false, articles: articles.concat(newArticles), noMoreResults: !newArticles.length });
            self.pagesLoaded += 1;
          });
        }
      }
    };
  }

  componentWillReceiveProps(newProps) {
    this.pagesLoaded = 0;
    const self = this;
    self.setState({ noMoreResults: false, loading: true });
    retrieveArticles(newProps.query, 1, (newArticles) => {
      self.setState({ loading: false, articles: newArticles, noResults: !newArticles.length });
      self.pagesLoaded = 1;
    });
  }

  render() {
    return (
      <div className="feed container">
        {this.state.noResults ? emptyFeedMessage() : null
           }
        {
                    this.state.articles.length > 0 ?
                        this.state.articles.map((article, i) => (<Card
                          article={article}
                          showModal={this.props.showModal}
                        />)) : null
                }
        <div id="infinity-scroll-gap">
          {
            this.state.loading ?
              <img id="loading-svg" src={require('../../public/loading-animation.svg')} />
                : null
          }
          {
                this.state.noMoreResults ? <h1>end,Return</h1> : null
            }
        </div>
      </div>);
  }
}

function initialMessage() {
  return (<div id="feed-waiting"><img src={require('../../public/newspaper.png')} />
    <h2>Scroll back and enter a term into the input box</h2>
  </div>);
}

function emptyFeedMessage() {
  return (<div id="feed-waiting"><img src={require('../../public/newspaper.png')} />
    <h2>Empty feed message</h2>
          </div>);
}

function lostConnection() {
  return (<div>
    <h2>Lost Connection</h2>
          </div>);
}


export default Feed;
