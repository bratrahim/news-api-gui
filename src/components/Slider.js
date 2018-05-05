import React from 'react';
import '../stylesheets/Slider.scss';

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const posts = new Array(this.props.data);
    console.log(posts.join(' '));
    return (<div id="tweet-slider" dangerouslySetInnerHTML={{ __html: posts.length ? posts.join(' ') : '' }} />);
  }
}
