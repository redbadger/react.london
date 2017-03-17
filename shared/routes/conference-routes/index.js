import React from 'react';
import { Route, Redirect } from 'react-router';

import ConferenceLayout from '../../components/ConferenceLayout';
import Conference from '../../components/Conference';
import TicketPage from '../../components/TicketPage';
import ConferencePartners from '../../components/ConferencePartners';
import ConferenceJobs from '../../components/ConferenceJobs';
import CodeOfConduct from '../../components/ConferenceCodeOfConduct';
import SpeakersPage from '../../components/SpeakersPage';
import ErrorPage404 from '../../components/ErrorPage404';
import SchedulePage from '../../components/SchedulePage';
import PostConference from '../../components/PostConferencePage';

export default function routes(state) {
  const Partners = () => <ConferencePartners {...state} />;
  const Jobs = () => <ConferenceJobs {...state} />;
  const Tickets = () => <TicketPage {...state} />;
  const Speakers = () => <SpeakersPage {...state} />;
  const Schedule = () => <SchedulePage {...state} />;
  const ConferencePage = () => <Conference {...state} />;
  const PostConferencePage = () => <PostConference {...state} />;
  const PostConferenceFinalPage = () => <PostConference {...state} finalStage />;

  return (
    <Route>
      <Route component={ConferenceLayout} >
        <Route path="/" component={ConferencePage} />
        <Route path="/post-conference" component={PostConferencePage} />
        <Route path="/post-conference-final" component={PostConferenceFinalPage} />
        <Route path="/partners" component={Partners} />
        <Route path="/tickets" component={Tickets} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/code-of-conduct" component={CodeOfConduct} />
        <Route path="/speakers" component={Speakers} />
        <Route path="/schedule" component={Schedule} />
        <Route path="*" component={ErrorPage404} />
      </Route>

      <Redirect path="/conference" to="/" />
    </Route>
  );
}
