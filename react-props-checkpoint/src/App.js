import React from 'react';
import './App.css';
import Profile from './profile/Profile.jsx'

function App() {

const profiles = {fullName:"Laldji Mohamed",bio:"Best developper at Github", profession:"Hacker", image:"https://tusacentral.net/joomla/images/stories/varie/renders_anonymous_mask.jpg"}


  return (
    <div className="app">
    <Profile fullName={profiles.fullName} bio={profiles.bio} profession={profiles.profession}>
    {profiles.image}
    </Profile>
    </div>
  );
}

export default App;
