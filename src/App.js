import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import _ from 'lodash';
import { Container, Button, InputGroup, Input } from 'reactstrap';
import ClientsList from './components/ClientsList';
import Pagination from './components/Pagination';
import AddNewClient from './components/AddNewClient';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  handleNameChange = _.debounce((name) => {
    hashHistory.push(`/?name=${name}`)
  }, 500)
  render() {
    const page = this.props.location.query.page || 1
    const limit = this.props.location.query.limit || 10
    const name = this.props.location.query.name || ''
    return (
      <div className="App">
        <Container>
          <InputGroup className="mt-4">
            <Input type="text" placeholder="Enter name" onChange={(e) => this.handleNameChange(e.target.value)} />
          </InputGroup>
          <ClientsList
            page={page}
            limit={limit}
            name={name}
            cards={this.props.cards}
          />
          <Button outline color="secondary" onClick={this.toggle}>Add New Client</Button>
          <Pagination
            page={page}
            limit={limit}
            name={name}
            cards={this.props.cards}
          />
        </Container>
        <AddNewClient
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({cards: state.app.cards}),
)(App)
