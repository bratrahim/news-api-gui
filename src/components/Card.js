import React from 'react';
import '../stylesheets/Card.scss';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <div style={{ backgroundImage: `url(${this.props.urlToImage})` }} className="card-figure" />
        <div className="card-caption">
          <header>{this.props.title}</header>
          <p>
            {this.props.description}
          </p>
          <button className="button-read-more">Read more..</button>
        </div>
      </div>);
  }
}

export default Card;
