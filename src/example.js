import React, {Component} from 'react';

export class Example extends Component {
  constructor(props) {
    super(props)
    this.state = { username: '' }
  }

  render() {
    return <h1>Hello,</h1>;
  }
}
