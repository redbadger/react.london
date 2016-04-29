import React, {Component} from 'react';
import style from './Editor.css';

class Editor extends Component {
  constructor(props) {
    super(props);
  };

  handleChange = (event) => {
    const { updateText } = this.props;

    updateText({
      key: event.target.name,
      value: event.target.value,
    });
  };

  render() {
    return (
      <aside className="Editor">
        <h3>About section</h3>
        <label for="aboutTitle">Title</label>
        <input
          name="aboutTitle"
          value = {this.props.aboutTitle}
          onChange = {this.handleChange}
        />

        <label for="aboutSummary">Summary</label>
        <textarea
          name="aboutSummary"
          value = {this.props.aboutSummary}
          onChange = {this.handleChange}
        />

        <h3>Upcoming Meetup</h3>

        <label for="upcomingMeetupName">Name</label>
        <input
          name="upcomingMeetupName"
          value={this.props.upcomingMeetupName}
          onChange={this.handleChange}
        />

        <label for="upcomingMeetupDetails">Details</label>
        <input
          name="upcomingMeetupDetails"
          value={this.props.upcomingMeetupDetails}
          onChange={this.handleChange}
        />

        <label for="upcomingMeetupWhen">When</label>
        <input
          name="upcomingMeetupWhen"
          value={this.props.upcomingMeetupWhen}
          onChange={this.handleChange}
        />

        <label for="upcomingMeetupWhere">Where</label>
        <input
          name="upcomingMeetupWhere"
          value={this.props.upcomingMeetupWhere}
          onChange={this.handleChange}
        />

        <label for="upcomingMeetupWhereLink">WhereLink</label>
        <input
          name="upcomingMeetupWhereLink"
          value={this.props.upcomingMeetupWhereLink}
          onChange={this.handleChange}
        />

        <label for="upcomingMeetupCtaText">CtaText</label>
        <input
          name="upcomingMeetupCtaText"
          value={this.props.upcomingMeetupCtaText}
          onChange={this.handleChange}
        />

        <label for="upcomingMeetupCtaLink">CtaLink</label>
        <input
          name="upcomingMeetupCtaLink"
          value={this.props.upcomingMeetupCtaLink}
          onChange={this.handleChange}
        />

        <label for="upcomingMeetupStreamingText">StreamingText</label>
        <input
          name="upcomingMeetupStreamingText"
          value={this.props.upcomingMeetupStreamingText}
          onChange={this.handleChange}
        />

        <label for="upcomingMeetupStreamingLink">StreamingLink</label>
        <input
          name="upcomingMeetupStreamingLink"
          value={this.props.upcomingMeetupStreamingLink}
          onChange={this.handleChange}
        />

    </aside>
    );
  }
}

export default Editor;
