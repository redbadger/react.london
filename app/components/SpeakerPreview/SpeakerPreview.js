import React, { Component } from 'react';

class SpeakerPreview extends Component {
  render() {
    const { title, name, blurb, picture } = this.props
    return (
      <section>
        <img src={picture} />
        <h4>{title}</h4>
        <h5>{name}</h5>
        <p>{blurb}</p>
      </section>
    )
  }
}

export default SpeakerPreview;
