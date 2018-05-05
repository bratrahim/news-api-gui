import React from 'react';
import '../stylesheets/Feed.scss';
import Card from './Card';
import Loading from './Loading';
import Query from '../model/Query';
import { retrieveArticles, getAbstractBackground } from '../helpers/http-requests';


class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      noResults: false,
      lostConnection: false,
      noMoreResults: false,
    };
    this.pagesLoaded = 0;
  }

  componentDidMount() {
    const self = this;
  }

  componentWillReceiveProps(newProps) {
  }

  render() {
    return (
      <div className="feed container">
        {this.state.noResults ? emptyFeedMessage() : null
           }
        {
                    this.props.articles.length > 0 ?
                        this.props.articles.map((article, i) => (<Card
                          article={article}
                          showModal={this.props.showModal}
                        />)) : null
                }
        <div id="infinity-scroll-gap">
          {
            this.props.loading ?
              <Loading />
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
