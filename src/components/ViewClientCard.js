import React from 'react';
import { Modal, ModalBody, Table } from 'reactstrap';

export default({ isOpen, toggle, ...item }) => (
  <Modal isOpen={isOpen} toggle={toggle} size='lg'>
    <ModalBody>
      <Table responsive striped>
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              {item.name}
              <span className='view-gender'>{item.gender}</span>
            </td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{item.phone}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{item.email}</td>
          </tr>
          <tr>
            <td>Birth date</td>
            <td>{item.birthDate}</td>
          </tr>
          <tr>
            <td>Home address</td>
            <td>{item.address}</td>
          </tr>
        </tbody>
      </Table>
    </ModalBody>
  </Modal>
);
