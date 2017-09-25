import React from 'react';
import { Link } from 'react-router'
import { InputGroup, InputGroupAddon, Input } from 'reactstrap'

export default class Example extends React.Component {
  render() {
    const {page, limit, name, cards} = this.props

    return (
      <div>
        <input type="text" placeholder="Enter name" onChange={(e) => this.handleNameChange(e.target.value)} />
      </div>
    );
  }
}
