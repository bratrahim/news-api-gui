import React from 'react';
import '../stylesheets/Card.scss';
import { getAbstractBackground } from '../helpers/backgrounds';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <div style={{ backgroundImage: `url(${this.props.article.urlToImage?this.props.article.urlToImage:getAbstractBackground(this.props.article.title)})` }} className="card-figure" />
        <div className="card-caption">
          <header>{this.props.article.title}</header>
          <p>
            {this.props.article.description}
          </p>
          <button onClick={()=>this.props.showModal(this.props.article)} className="button-read-more">Read more..</button>
        </div>
      </div>);
  }
}

export default Card;
