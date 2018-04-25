import React from 'react';
import '../stylesheets/Navigation.css';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<nav>
      <div id="nav-links-widescreen">
        <div className="nav-item"><a onClick={() => this.props.switchTopic('business')}>Business</a></div>
        <div className="nav-item"><a onClick={() => this.props.switchTopic('general')}>General</a></div>
        <div className="nav-item"><a onClick={() => this.props.switchTopic('science')}>Science</a></div>
        <div className="nav-item"><a onClick={() => this.props.switchTopic('technology')}>Technology</a></div>
      </div>
    </nav>);
  }
}

export default Navigation;
