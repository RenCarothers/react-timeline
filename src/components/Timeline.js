import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

// For wave 2, you will implement the Timeline component. The Timeline component will take one prop, 
// events, an array of JavaScript objects. 
// The render function will use the array to render a set of TimelineEvent components.

// Then read in the /src/data/timeline.json file into an array of objects in /src/App.js. 
// In the render function of the App component, render a TimeLine component using the array of objects as the events prop.

const Timeline = (props) => {

  const timeEvents = props.events.map((event, i) => {
    return (
      <ul>
        <li key={i}> 
        {/* is this key placed right? How would I access a specific timeline key? */}
          <TimelineEvent
            person={event.person}
            status={event.status}
            timestamp={event.timeStamp} // why is this Stamp here but stamp in timelineEvents?
          />
        </li>
      </ul>
    );
  });

  return (
    <section className="timeline">
        {timeEvents}
    </section>
  );
}

export default Timeline;