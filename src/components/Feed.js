import React from 'react';
import request from 'request';
import '../stylesheets/Feed.scss';
import Card from './Card';
import Query from '../model/Query';

function retrieveArticles(query, region, category, page, component, newQuery) {
  component.setState({ loading: true });
  const options = {
    method: 'GET',
    url: 'https://cryptic-meadow-51342.herokuapp.com/api/articles',
    qs: {
      query, region, category, page: page.toString(),
    },
    headers:
            {
              'postman-token': '4b52a1ee-b693-47af-49b6-99185d51b069',
              'cache-control': 'no-cache',
            },
  };

  request(options, (error, response, body) => {
    if (error) {
      component.setState({ loading: false, lostConnection: true });
      throw new Error(error);
    }

    body = JSON.parse(body);
    body = JSON.parse(body);
    component.pagesLoaded += 1;
    let articles;
    if (newQuery) { articles = body.articles; } else articles = component.state.articles.concat(body.articles);
    component.setState({ articles, loading: false });
  });
}


class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      initialState: true,
      loading: false,
      lostConnection: false,
    };
    this.pagesLoaded = 0;
  }

  componentDidMount() {
    const self = this;
    window.onscroll = function (ev) {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        console.log('bottom');
        console.log(self.props.query);
        retrieveArticles(self.props.query.query, self.props.query.region, self.props.query.category, self.pagesLoaded + 1, self, false);
      }
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({ query: newProps.query });
    this.pagesLoaded = 0;
    retrieveArticles(newProps.query.query, newProps.query.query.region, newProps.query.category, this.pagesLoaded + 1, this, true);
  }

  render() {
    return (
      <div className="feed container">
        {this.state.articles.length === 0 ? emptyFeedMessage() : null}
        {
                    this.state.articles.length > 0 ?
                        this.state.articles.map((article, i) => (<Card
                          title={article.title}
                          description={article.description}
                          urlToImage={article.urlToImage}
                        />)) : null
                }
        <div id="infinity-scroll-trigger">
          {
                        this.state.lostConnection ? lostConnection() : null
                    }
          {
            this.state.loading ?
              <img src={require('../../public/loading-animation.svg')} />
                : null
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
