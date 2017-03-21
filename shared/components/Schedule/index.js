import React from 'react';

import ScheduleItem from '../ScheduleItem';

/* eslint-disable */
const mainEventData = {
  name: 'React London 2017',
  date: 'Tuesday, 28th March 2017',
  schedule: [
    {
      time: '8:30 - 9:30',
      title: 'Registration',
      description: 'Breakfast and registration',
      details: [],
    },
    {
      time: '9:30 - 9:40',
      title: 'Welcome',
      description: 'Conference welcome',
      details: [],
    },
    {
      time: '9:40 - 11:10',
      title: 'Morning Talks',
      description: '',
      details: [
        {
          time: '9:40 - 10:20',
          title: 'Javascript code formatting',
          description: 'JavaScript developers are spending soooo much time formatting their code and even more in back and forth in code review fixing small nits. It turns out that machines are really good at doing these kind of tasks. Christopher will walk us through the technical and people challenges of bringing a JavaScript code formatter to reality.',
          speaker: {
            name: 'Christopher Chedeau',
            id: 'vjeux',
            company: 'Facebook',
          },
        },
        {
          time: '10:20 - 11:10',
            title: 'Logux, a new approach to client-server communication',
            description: 'Combining ideas from both Redux and CRDT, Logux is a new tool which replaces AJAX with real-time data in applications, synchronising action logs between the client and server while also providing an offline mode. This approach could significantly simplify application code and bring plug&play support for live updates and offline editing.',
            speaker: {
              name: 'Andrey Sitnik',
              id: 'ai',
              company: 'Evil Martians',
            },
        }
      ],
    },
    {
      time: '11:10 - 11:30',
      title: 'Break',
      description: 'Refreshment break',
      details: [],
    },
    {
      time: '11:30 - 12:15',
      title: 'Morning Talks Continued',
      description: '',
      details: [
        {
          time: '11:30 - 12:15',
          title: 'What\'s in a language?',
          description: 'What\'s in a language? How can it help us express our intent better? Based on his last talk, Cheng will explore some concrete, daily patterns in our codebase that Reason elegantly solves through a few simple yet rich concepts.',
          speaker: {
            name: 'Cheng Lou',
            id: 'chenglou',
            company: 'Facebook',
          },
        }
      ],
    },
    {
      time: '12:15 - 13:20',
      title: 'Lightning Talks',
      description: '4 inspiring talks at lightning speed',
      details: [
        {
          title: 'Snapshot testing',
          description: 'Facebook introduced snapshot testing in Jest last year and it has already picked up a huge interest. Why is snapshot testing so popular? How and when should you use it? Can you use it even if you’re not using Jest? Anna will explain all this and more in only 10 minutes',
          speaker: {
            name: 'Anna Doubkova',
            id: 'lithin',
            company: 'Red Badger',
          },
        },
        {
          title: 'Realtime Webpack - Pushing on-demand bundling to the limits',
          description: 'Bundling JavaScript nowadays is trivial. But what if you need to do it 10,000 times a day to thousands of users, with sourcemaps, served directly to the browser in under 2 seconds? Oliver will show us how they did this at Qubit',
          speaker: {
            name: 'Oliver Woodings',
            id: 'oliverwoodings',
            company: 'Qubit',
          },
        },
        {
          title: 'Offline for the greater good',
          description: 'This year, half of world’s population will be connected to the internet; most of them in the developing world, on mobile, over poor network. For them offline support is not a luxury: it is basic accessibility. Jani will walk us through how to architect React Native and progressive React web apps for the offline era.',
          speaker: {
            name: 'Jani Eväkallio',
            id: 'jevakallio',
            company: 'Formidable Labs',
          },
        },
        {
          title: 'Next.js in production',
          description: 'Next.js has generated a lot of hype in the short time that it’s been out (rightly so). It’s unveiling coincided with an initiative to rebuild Deliveroo\'s web application as a standalone app. Jasdeep will share his experiences using it so far, including some of the benefits & trade-offs.',
          speaker: {
            name: 'Jasdeep Lalli',
            id: 'jazlalli',
            company: 'Deliveroo',
          },
        },
      ],
    },
    {
      time: '13:20 - 14:20',
      title: 'Lunch',
      description: 'Street food lunch catered by Leith\'s',
      details: [],
    },
    {
      time: '14:20 - 15:50',
      title: 'Afternoon Talks',
      description: '',
      details: [
        {
          time: '14:20 - 15:05',
          title: 'The road to <💅> styled-components: CSS in component-based systems',
          description: 'There\'s been a revolution; welcome the Component Age! Now what about styles? Max sat down with Glen Maddern (CSS modules) to think about how styles fit into our post-revolution world. They took the best of CSS and the web to create a fantastic new way to style component-based systems.',
          speaker: {
            name: 'Max Stoiber',
            id: 'mxstbr',
            company: 'Thinkmill',
          },
        },
        {
          time: '15:05 - 15:50',
          title: 'A tiny Fiber renderer',
          description: 'React is capable of rendering to more environments than the browser. React is really two separate pieces: core and renderers. ReactDOM, ReactNative, ReactVR are but a few renderers in existence. With the Fiber reconciler rewrite comes an official renderer API. Dustan will look at a number of renderers that already exist and implement a React renderer of his own!',
          speaker: {
            name: 'Dustan Kasten',
            id: 'iamdustan',
            company: '',
          },
        },
      ],
    },
    {
      time: '15:50 - 16:10',
      title: 'Break',
      description: 'Refreshment break',
      details: [],
    },
    {
      time: '16:10 - 17:10',
      title: 'Panel discussion',
      description: 'Panel discussion with some of the talented people from the Facebook team',
      details: [
        {
          listElement: true,
          speaker: {
            name: 'Christopher Chedeau',
            id: 'vjeux',
            company: 'Facebook',
          },
        },
        {
          listElement: true,
          speaker: {
            name: 'Dan Abramov',
            id: 'gaearon',
            company: 'Facebook',
          },
        },
        {
          listElement: true,
          speaker: {
            name: 'Lee Byron',
            id: 'leebyron',
            company: 'Facebook',
          },
        },
        {
          listElement: true,
          speaker: {
            name: 'Ben Alpert',
            id: 'spicyj',
            company: 'Facebook',
          },
        },
      ],
    },
    {
      time: '17:10 - 17:50',
      title: 'Afternoon Talks Continued',
      description: '',
      details: [
        {
          time: '17:10 - 17:50',
          title: 'Weapons grade React',
          description: 'Ken will explore the application of React and React Native to hardware projects, and the lessons learned while building a remotely controlled robotic crossbow.',
          speaker: {
            name: 'Ken Wheeler',
            id: 'kenwheeler',
            company: 'Formidable Labs',
          },
        },
      ],
    },
    {
      time: '17:50 - 18:00',
      title: 'Closing',
      description: 'Closing remarks',
      details: [],
    },
    {
      time: '18:00 - 21:00',
      title: 'Drinks',
      description: 'Stick around for some drinks, more fantastic food from Leith\'s and great conversation with the community',
      details: [],
    },
  ],
};

/* eslint-enable */
const Schedule = () => {
  return (
    <div className="Schedule block">
      <div className="content">
        <h2 className="Schedule__name">
          {mainEventData.name}
        </h2>
        <h2 className="Schedule__date">{mainEventData.date}</h2>
        <ol className="Schedule__list">
          {mainEventData.schedule.map((scheduleItem, index) => (
            <li key={index}>
              <ScheduleItem item={scheduleItem} />
            </li>
          ))}
        </ol>
        <p className="Schedule__info">Schedule subject to change.</p>
      </div>
    </div>
  );
};

export default Schedule;
