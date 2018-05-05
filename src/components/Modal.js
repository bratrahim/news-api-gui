import React from 'react';
import Slider from './Slider';
import Loading from './Loading';
import { Scrollbars } from 'react-custom-scrollbars';
import '../stylesheets/Modal.scss';
import ScrollLock from 'react-scrolllock';
import Cross from '../../public/cross.svg';
import moment from 'moment';
import request from 'request';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state =
            {
              show: this.props.show,
              twitterPosts: [],
              loadingTweets: true,
              tweetKeyword: '',
            };
  }

  componentDidMount() {

  }

  componentWillReceiveProps(newProps) {
    this.refs.scrollbars.scrollToTop();
    const self = this;
    self.setState({ twitterPosts: [], loadingTweets: true });
    const options = {
      method: 'GET',
      url: 'https://cryptic-meadow-51342.herokuapp.com/api/twitter_posts',
      qs: { term: newProps.article.description },
      headers:
                { 'cache-control': 'no-cache' },
    };
    if (newProps.show) {
      request(options, (error, response, body) => {
        if (error) throw new Error(error);
        console.log(body);
        if (JSON.parse(body).error || !Array(JSON.parse(body).result).length) {
          self.setState({ loadingTweets: false, tweetKeyword: '' });
          return;
        }
        console.log(JSON.parse(body));
        self.setState({ twitterPosts: JSON.parse(body).result });
        self.setState({ loadingTweets: false, tweetKeyword: JSON.parse(body).keyword });
        twttr.widgets.load(document.getElementById('modal'));
      });
    }
    this.setState({ show: newProps.show });
  }

  render() {
    return (
      <div>
        <div id="modal" className={this.state.show ? 'active' : null}>
          <div onClick={this.props.hideModal} id="close-icon" dangerouslySetInnerHTML={{ __html: Cross }} />
          <Scrollbars ref="scrollbars">
            <div id="content">
              {this.props.article.urlToImage ? <div
                className="modal-image"
                style={{ backgroundImage: `url(${this.props.article.urlToImage})` }}
              /> : null}
              <div className="modal-article">
                <h1 className="article-heading">{this.props.article.title}</h1>
                {this.props.article.author ? <h2 className="author-heading">Prepared by: <span
                  className="author"
                >{this.props.article.author}
                                                                                         </span>
                                             </h2> : null}
                {this.props.article.publishedAt ?
                  <h3 className="timestamp-heading">{moment(this.props.article.publishedAt).fromNow()}</h3> : null}
                <p>{this.props.article.description}</p>
                <a className="article-link" target="_blank" href={this.props.article.url}>Read the
                                    article
                </a>
                {this.state.loadingTweets ? <Loading /> : this.state.tweetKeyword ?
                  <div><h3 className="centered">What people say about <span
                    className="main-color"
                  >{this.state.tweetKeyword}
                                                                      </span>
                       </h3><Slider
                    data={this.state.twitterPosts}
                  />
                  </div> :
                  <h3 className="centered"><span className="main-color">No tweets were found</span>
                  </h3>}

              </div>


            </div>
          </Scrollbars>
        </div>
        {this.state.show ? <ScrollLock /> : null}

        <div id="mask" className={this.state.show ? 'active' : null} onClick={this.props.hideModal} />
      </div>);
  }
}
