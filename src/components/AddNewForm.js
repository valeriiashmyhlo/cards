import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { Form, FormGroup, Label, Button, Row, Col } from 'reactstrap';
import { updateCurrent, saveCard } from '../reducers/card';

class AddNewForm extends Component {
  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Label for="clientName" sm={4}>Full Name</Label>
          <Col sm={8}>
            <Field
              id="clientName"
              name="name"
              component="input"
              type="text"
              placeholder="Enter your full name"
              className="form-control"
            />
          </Col>
        </FormGroup>

        <Row>
          <Col sm={4}>
            <FormGroup>
              <Label for="female">Female</Label>
              <Field
                id="female"
                value="female"
                name="sex"
                component="input"
                type="radio"
                className="input-radio form-check-input input-radio"
              />{' '}
            </FormGroup>
          </Col>

          <Col sm={4}>
            <FormGroup>
              <Label for="male">Male</Label>
              <Field
                id="male"
                value="male"
                name="sex"
                component="input"
                type="radio"
                className="input-radio form-check-input input-radio"
              />{' '}
            </FormGroup>
          </Col>
        </Row>

        <FormGroup row>
          <Label for="phone" sm={4}>Phone Number</Label>
          <Col sm={8}>
            <Field
              id="phone"
              name="phome"
              component="input"
              type="number"
              placeholder="Enter your phone number"
              className="form-control"
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="email" sm={4}>Email</Label>
          <Col sm={8}>
            <Field
              id="email"
              name="email"
              component="input"
              type="text"
              placeholder="Enter your email"
              className="form-control"
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="date" sm={4}>Date of Birth</Label>
          <Col sm={8}>
            <Field
              id="date"
              name="date"
              component="input"
              type="date"
              className="form-control"
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="address" sm={4}>Home address</Label>
          <Col sm={8}>
            <Field
              id="address"
              name="address"
              component="input"
              type="text"
              placeholder="Enter your home address"
              className="form-control"
            />
          </Col>
        </FormGroup>
        <div className='text-center'>
          <Button type='submit'>Submit</Button>
        </div>
      </Form>
    )
  }
}

AddNewForm = reduxForm({
  form: 'contact'
})(AddNewForm)

export default connect (
  (state) => ({currentCard: state.currentCard}),
  {updateCurrent, saveCard}
)(AddNewForm)
