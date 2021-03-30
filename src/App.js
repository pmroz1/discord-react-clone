import React from 'react';
import Serverlist from './components/serverlist/Serverlist';
import Channellist from './components/channellist/Channellist';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { configuration } from './configuration'

function App() {
  return (
    <div className="app-conatiner">
      <Serverlist
        title={configuration.Server.title}
        titleFontSize={configuration.Server.titleFontSize}
        serverlist={configuration.Server.servers}
        buttons={configuration.Server.bottomBar}
      />
      <Channellist
        title={configuration.Channel.title}
        arrowIcon={configuration.Channel.arrowIcon}
      />
    </div>
  );
}

export default App;