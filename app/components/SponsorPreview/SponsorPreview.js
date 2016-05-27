import React, { Component } from 'react';

class SpeakerPreview extends Component {
  render() {
    const { name, url, picture } = this.props;
    return (
      <section>
        <img src={picture} />
        <h4>{name}</h4>
        <p>{url}</p>
      </section>
    )
  }
}

export default SpeakerPreview;
