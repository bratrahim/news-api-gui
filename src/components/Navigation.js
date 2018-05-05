import React from 'react';
import ScrollLock from 'react-scrolllock';
import '../stylesheets/Navigation.scss';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  componentDidMount() {
    const self = this;
    window.addEventListener('resize', () => { self.setState({ menu: false }); });
  }
  toggleMenu() {
    this.setState({ menu: !this.state.menu });
  }
  render() {
    return (<nav>
      <div id="nav-links-widescreen">
        <div className="nav-item"><a onClick={() => this.props.switchTopic('business')}>Business</a></div>
        <div className="nav-item"><a onClick={() => this.props.switchTopic('general')}>General</a></div>
        <div className="nav-item"><a onClick={() => this.props.switchTopic('science')}>Science</a></div>
        <div className="nav-item"><a onClick={() => this.props.switchTopic('technology')}>Technology</a></div>
      </div>
      <button onClick={this.toggleMenu} className={this.state.menu ? 'hamburger hamburger--spin is-active' : 'hamburger hamburger--spin '} type="button">
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>
      {this.state.menu ? <ScrollLock /> : null}
      <div id="nav-links-mobile" className={this.state.menu ? 'is-active' : ''}>
        <div className="nav-items">
          <h3 id="mobile-nav-heading">Topics</h3>
          <div className="nav-item"><a onClick={() => { this.toggleMenu(); this.props.switchTopic('business'); }}>Business</a></div>
          <div className="nav-item"><a onClick={() => { this.toggleMenu(); this.props.switchTopic('general'); }}>General</a></div>
          <div className="nav-item"><a onClick={() => { this.toggleMenu(); this.props.switchTopic('science'); }}>Science</a></div>
          <div className="nav-item"><a onClick={() => { this.toggleMenu(); this.props.switchTopic('technology'); }}>Technology</a></div>
        </div>

      </div>
            </nav>);
  }
}

export default Navigation;
