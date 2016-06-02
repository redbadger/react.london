import React, { Component } from 'react';

class About extends Component {
  render() {
    const { text } = this.props
    return (
      <section className="About">
        <h1>{text.about ? text.about.title : null}</h1>
        <div dangerouslySetInnerHTML={ text.about ? { __html: text.about.summary } : null } />
      </section>
    )
  }
}

export default About;
