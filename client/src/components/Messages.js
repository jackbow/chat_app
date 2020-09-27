import React, { Component } from "react";
import { getUserIdx, gradientNames, colors } from '../utilities/gradients.js';
import '../styles/Messages.css';

class Messages extends Component {
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }
    handleScroll = (e) => {
        if (e.target.scrollTop === 0) {
            this.props.fetchMsgs()
        }
    }
    componentDidMount() {
        this.scrollToBottom();
    }
    componentDidUpdate() {
        this.scrollToBottom();
    }
    render() {
        const messages = this.props.messages;
        return (
            <ul className="Messages-list" onScroll={this.handleScroll} >
                { messages.map((m, i) => this.renderMessage(m, i)) }
                <div style={{ float: "left", clear: "both" }}
                    ref={(el) => { this.messagesEnd = el; }}>
                </div>
            </ul>
        );
    }
    renderMessage(message, i) {
        const {member, text, time} = message;
        const currentMember = this.props.currentMember;
        const messageFromMe = member.userID === currentMember.userID;
        const className = messageFromMe ?
            "Messages-message currentMember" : "Messages-message";
        const color = messageFromMe ?
            "grey" : colors[getUserIdx(member.name, colors.length)];
        return (
            <li className={className} key={i}>
                <span
                    className={"avatar " + gradientNames[getUserIdx(member.name, gradientNames.length)]}
                />
                <div className="Message-content">
                    <div className="username">
                    {member.name}
                    </div>
                    <div className="text" title={time} style={{ backgroundColor: color, cursor: "default" }}>{text}</div>
                </div>
            </li>
        );
    }
}

export default Messages;