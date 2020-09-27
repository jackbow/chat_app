import React, { Component } from 'react';
import io from 'socket.io-client';
import Input from './components/Input.js';
import Messages from './components/Messages.js';
import Overlay from './components/Overlay.js';
import './styles/App.css';

const socket = io('https://chatwebapp.me:9000')

const randId = () => {
  let r = ''
  for (let index = 0; index < 3; index++) {
    r += Math.random().toString(36).substr(2);
  }
  return (r)
}
const id_ = randId()

class App extends Component {
  state = {
    last_fetch: (new Date()).getTime(),
    overlay_classes: "blur block-under",
    messages: [],
    member: {
      name: "",
      userID: id_,
    }
  }
  constructor(props) {
    super(props);
    socket.connect();
    socket.on('id', id => {
      this.setState({
        member: {
          ...this.state.member,
          userID: id,
        }
      })
    })
    socket.on('msg', msg => {
      this.setState({
        messages: [
          ...this.state.messages,
          msg,
        ]
      })
    })
    socket.on('msgs', msgs => {
      this.setState({
        messages: [
          ...msgs,
          ...this.state.messages,
        ]
      })
    })
    socket.emit('fetch', -1)
  }
  sendMessage = (text) => {
    const msg = {
      time: (new Date().toLocaleTimeString() + ", " + (new Date().getMonth() + 1).toString() + "/" +
            new Date().getDate().toString() + "/" + new Date().getFullYear().toString()),
      idx: this.state.messages.length === 0 ? 0 : this.state.messages[this.state.messages.length - 1].idx + 1,
      text: text,
      member: this.state.member,
    }
    this.setState({
      messages: [
        ...this.state.messages,
        msg,
      ]
    })
    socket.emit('msg', msg)
  }
  setName = (name) => {
    this.setState({
      overlay_classes: "",
      member: {
        ...this.state.member,
        name: name,
      }
    })
  }
  fetchMsgs = () => {
    const time = (new Date()).getTime()
    if (this.state.last_fetch < (time - 1500) && this.state.messages[0].idx !== 0) {
      socket.emit('fetch', this.state.messages[0].idx)
      this.setState({
        last_fetch: time,
      })
    }
  }
  render() {
    return (
        <div className={"bg-gradient h-screen chat-container"}>
          <Overlay setName={this.setName} />
          <div className={ "shadow-lg bg-white chat-window chat-window-area object-center flex-col overflow-auto " + 
                          this.state.overlay_classes }>
            <Messages
              className="bg-white px-8 gridarea-chat-msgs round-top py-8 h-full shadow-lg mx-auto object-center flex-col"
              messages={this.state.messages}
              currentMember={this.state.member}
              fetchMsgs={this.fetchMsgs}
            />
            <Input submit={this.sendMessage} inputText="Message" buttonText="Send" focus={this.state.member.name.length > 0}
              buttonStyle="round-lower-right" inputStyle="round-lower-left" formStyle="gridarea-chat-input" />
          </div>
        </div>
    );
  }
}

export default App;
