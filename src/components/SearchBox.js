import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import debounce from '../helpers/debounce';
import '../stylesheets/SearchBox.css';
import Query from '../model/Query';
import { getTopicBackground } from '../helpers/backgrounds';



class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: false,
      currentTopic: this.props.topic,
      nextTopic: null,
      region: 'us',
      query: '',
    };
    this.slide = this.slide.bind(this);

    this.handleInput = this.handleInput.bind(this);
      this.changeSearch = this.changeSearch.bind(this);
      this.changeSearch = debounce(this.changeSearch,300);
  }


  componentDidMount() {
    this.props.processQuery(new Query(this.state.query, this.state.region, this.state.currentTopic));
  }

  componentWillReceiveProps(newProps) {
    this.slide(newProps.topic);
  }

  slide(topic) {
    const self = this;
    if (topic === this.state.currentTopic) { return; }
    this.setState({ nextTopic: topic, slide: true });
    setTimeout(() => {
      self.setState({ currentTopic: this.state.nextTopic, nextTopic: null, slide: false });
    }, 200);
  }

  changeSearch(query)
  {
      this.props.processQuery(query);
  }
  handleInput(event) {
    this.setState({ query: event.target.value });
    this.changeSearch(new Query(event.target.value, this.state.region, this.state.currentTopic));
  }
  render() {
    return (
      <div id="search-section" style={{ backgroundImage: `url(${getTopicBackground(this.state.currentTopic)})` }}>
        {this.state.slide ?
          <div style={{ left: 0, backgroundImage: `url(${getTopicBackground(this.state.nextTopic)})` }} className="slider" />
                    :
          <div className="slider calm" style={{ backgroundColor: 'transparent' }} />
                }

        <div className="background-filter" />
        <div id="landing_message">
          <h1>Find out what is happening</h1>
          <h2>Access all leading news sites through the box below </h2>
        </div>

        <input onChange={this.handleInput} id="search-input" type="text" placeholder="Situation in Syria" />

        <div id="languages" />
      </div>);
  }
}

SearchBox.propTypes = { topic: PropTypes.string };
SearchBox.defaultProps = { topic: 'business' };
SearchBox.propTypes = { processQuery: PropTypes.func.isRequired };

export default SearchBox;
