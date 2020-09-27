import React, { Component } from 'react';

class Input extends Component {
  state = {
    text: ""
  }
  onChange(e) {
    this.setState({ text: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    if (this.state.text.length > 0) {
        this.setState({ text: "" });
        this.props.submit(this.state.text);
    }
  }
  render() {
    return (
        <form className={this.props.formStyle + " input-form display-flex"} onSubmit={e => this.onSubmit(e)}>
            <input
            onChange={e => this.onChange(e)}
            value={this.state.text}
            type="text"
            placeholder={this.props.inputText}
            autoFocus={this.props.focus}
                className={this.props.inputStyle + " appearance-none block w-full bg-grey-lighter text-grey-darker " +
                            " border border-grey-lighterpy-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"}
            />
            <button className={this.props.buttonStyle + " commentForm bg-blue hover:bg-blue-light send-btn text-white " +
                                "font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue focus:outline-none"}>
            {this.props.buttonText}
            </button>
        </form>
    );
  }
}

export default Input;