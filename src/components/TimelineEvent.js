import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

// For wave 1 implement the TimelineEvent component function. It should take 3 props.

// person - the person making the post.
// status - the message being posted.
// timestamp - the date-time of the event.
// Test the component by rendering it with hardcoded data inside the App component. 
// TimelineEvent should use the existing Timestamp component to render the time & date of the event.

const TimelineEvent = (props) => {

    return (
      <section className="timeline-event">
        <h4 className="event-person">
          {props.person}
        </h4>
        <p className="event-status">
          {props.status}
        </p>
        <h5 className="event-time">
          <em><Timestamp time={props.timestamp} /></em>
        </h5>
      </section>
    );
  
}

export default TimelineEvent;