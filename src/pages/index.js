
import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';

class IndexPage extends React.Component {
  render() {
    return (
      <div style={{
        'text-align' : 'center'
      }}>
        <p> Welcome to freeCodeCamp Events. </p>
      </div>
    )
  }
}

export default IndexPage;
