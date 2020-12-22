import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';

function App() {

  console.log(timelineData);

  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">{timelineData.person}'s social media feed</h1>
      </header>
      <main className="App-main">
        {/* <TimelineEvent person="me" status="Hello, World!" timestamp="2018-05-18T22:19:40Z" /> */}
        <Timeline events={timelineData.events} />
      </main>
    </div>
  );
}

export default App;
