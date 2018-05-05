import React from 'react';
import '../stylesheets/Footer.scss';

export default function Footer() {
  return (<div id="footer">
    <h5>Article fetching is powered by <a href="https://newsapi.org/" >News API</a></h5>
    <h5>Entity extraction <a href="https://dandelion.eu/" >Dandelion API</a></h5>
    <h5>Twitter search <a href="https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets" >Twitter Standard Search API</a></h5>
  </div>);
}
