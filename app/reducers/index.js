import {EditorState} from 'draft-js';

const getInitialState = () => ({
  editorState: EditorState.createEmpty(),
  aboutTitle: 'London React User Group',
  aboutSummary: 'This group was established by Red Badger, a software company at Old Street.\nReact is already having a huge impact on the way we think about Web UI development at Red Badger and this is an opportunity to learn why and share your own experiences. \nWe meet once a month, usually on the 3rd Wednesday of each month \nWe generally have 2 or 3 speakers and loads of questions, pizzas and beer.\nWe are a sociable group and very welcoming to newcomers. Follow us on Twitter @Londonreact and join the conversation on Slack here\nSee you soon!',
  upcomingMeetupName: 'June React User Group',
  upcomingMeetupDetails: 'TICKET INFO WILL FOLLOW \n\nJoin us for an evening of great conversation around React.js- \n\n6:30- Doors open for pizza and beers \n\n7:00- Intro from Stu \n\n7:10- 2 or 3 speakers each with 20 minutes to talk followed by Q&A\n\n8:30/ 9:00- Everyone is welcome to stay for another drink Our speakers for the evening are....\n\nMore details will follow shortly\n\nWe will live stream and record the event- we will post a link here prior to the event.',
  upcomingMeetupWhen: 'Tuesday, June 28, 2016',
  upcomingMeetupWhere: 'Facebook, 10 Brock Street, Regents Place, London',
  upcomingMeetupWhereLink: 'https://maps.google.com/maps?f=q&hl=en&q=10+Brock+Street%2C+Regents+Place%2C+London%2C+gb',
  upcomingMeetupCtaText: 'For full details please see',
  upcomingMeetupCtaLink: 'http://www.meetup.com/London-React-User-Group/events/230114076/',
  upcomingMeetupStreamingText: 'Check out the live stream',
  upcomingMeetupStreamingLink: 'https://www.youtube.com/channel/UCHlIVrJki1BxwKe7NtFYZRg',
});

const initialValues = (state = getInitialState(), action) => {
  switch (action.type) {
    case 'UPDATE_TEXT':
      const newState = { ...state };
      newState[action.key] = action.value;
      return newState;
    default:
      return state;
  }
};

export default initialValues;
