import React, { Component } from 'react';
import io from 'socket.io-client';
import Peer from 'peerjs';
import Input from './Input.js';
import Messages from './Messages.js';
import Overlay from './Overlay.js';
import './App.css';

const randId = () => {
  let r = ''
  for (let index = 0; index < 3; index++) {
    r += Math.random().toString(36).substr(2);
  }
  return (r)
}
const id_ = randId()

const socket = io()
let peerSet = new Set()
const p2p = new Peer(id_, {
  host: 'http://localhost',
  // host: 'https://chat.jack.town',
  port: 9000,
  // port: 443,
  path: '/peer',
  secure: false
})

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
    p2p.on('connection', conn => {
      this.estConn(conn)
      console.log('peer connected')
    });
    socket.emit('peerID', p2p.id)
    socket.on('peerID', peerID => {
      this.estConn(p2p.connect(peerID))
      console.log('connected to peer')
    })
  }
  estConn = (conn) => {
    conn.on('open', () => {
      conn.on('data', msg => {
        this.setState({
          ...this.state.messages,
          msg,
        });
      });
    });
    conn.on('close', () => {
      peerSet.delete(conn)
    });
    peerSet.add(conn);
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
    for (const conn of peerSet) {
      conn.send(msg)
    }
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
  render() {
    return (
      // <div>
        <div className={"bg-gradient h-screen chat-container"}>
          <Overlay setName={this.setName} />
        <div className={ "shadow-lg bg-white chat-window chat-window-area object-center flex-col overflow-auto " + 
                          this.state.overlay_classes }>
            <Messages
              className="bg-white px-8 gridarea-chat-msgs round-top py-8 h-full shadow-lg mx-auto object-center flex-col"
              messages={this.state.messages}
              currentMember={this.state.member}
            />
            <Input submit={this.sendMessage} inputText="Message" buttonText="Send" focus={this.state.member.name.length > 0}
              buttonStyle="round-lower-right" inputStyle="round-lower-left" formStyle="gridarea-chat-input" />
          </div>
        </div>
    );
  }
}

export default App;
