import React from 'react';
import Serverlist from './components/serverlist/Serverlist';
import Channellist from './components/channellist/Channellist';
import TopBar from './components/topBar/TopBar';
import Chat from './components/chat/Chat';
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
        textChannelTitle={configuration.Channel.channels[0].name}
        textChannelList={configuration.Channel.channels[0].subChannels}
        voiceChannelTitle={configuration.Channel.channels[1].name}
        voiceChannelList={configuration.Channel.channels[1].subChannels}
        arrowIcon={configuration.Channel.arrowIcon}
        type={configuration.Channel.channels[0].type}
        type2={configuration.Channel.channels[1].type}
        voiceIcon={configuration.Channel.channels[1].icon}
      />

      <div className="chat-conatiner">
        <TopBar
          text={configuration.TopBar.text}
          userIcon={configuration.TopBar.userIcon}
          pinIcon={configuration.TopBar.pinIcon}
          bellIcon={configuration.TopBar.bellIcon}
          bellIconOff={configuration.TopBar.bellIconOff}
          helpIcon={configuration.TopBar.helpIcon}
          searchIcon={configuration.TopBar.searchIcon}
        />
        <Chat />
      </div>

    </div>
  );
}

export default App;