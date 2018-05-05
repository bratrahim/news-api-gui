import React from 'react';
import '../stylesheets/Card.scss';
import { getAbstractBackground, getWhiteTextBackground } from '../helpers/backgrounds';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        {this.props.article.urlToImage ? <div onClick={() => this.props.showModal(this.props.article)} style={{ backgroundImage: `url(${this.props.article.urlToImage ? this.props.article.urlToImage : getAbstractBackground(this.props.article.title)})` }} className="card-figure" /> : null}
        <div className="card-caption">
          <div>
            <a target="_blank" style={{ backgroundColor: `${getWhiteTextBackground(this.props.article.source.name)}` }} href={this.props.article.url} className="button-topic">{this.props.article.source.name}</a>
          </div>
          <header>{this.props.article.title}</header>

          <div className="caption-bottom">
            <button onClick={() => this.props.showModal(this.props.article)} className="button-read-more">Read more..</button>
          </div>
        </div>
      </div>);
  }
}

export default Card;
