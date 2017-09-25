import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Modal, ModalBody } from 'reactstrap'
import AddNewForm from './AddNewForm'
import { saveCard } from '../reducers/card';

class AddNewClient extends Component {
  submit = (values) => {
    this.props.saveCard(values)
    console.log(values)
  }
  render() {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} size='lg'>
        <ModalBody>
          <AddNewForm onSubmit={this.submit} />
        </ModalBody>
      </Modal>
    )
  }
}

export default connect(
  null,
  {saveCard}
)(AddNewClient)
