import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import ReactPaginate from 'react-paginate';
import { fetchCards } from '../reducers/card'
import ClientsListItem from './ClientsListItem';

class ClientsList extends Component {
  componentDidMount() {
    this.props.fetchCards({page: this.props.page, limit: this.props.limit, name: this.props.name})
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.page !== nextProps.page ||
      this.props.limit !== nextProps.limit ||
      this.props.name !== nextProps.name) {
      this.props.fetchCards({
        page: nextProps.page,
        limit: nextProps.limit,
        name: nextProps.name
      })
    console.log(nextProps)
    }
  }
  render() {
    return (
      <div>
        <Table responsive striped>
          <thead>
            <tr>
              <th>Name<span className="arrow choosen">▾</span></th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Date of birth</th>
              <th>Adress</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cards.map(clientsListItem => <ClientsListItem key={clientsListItem.id} {...clientsListItem} />)}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default connect(
  null,
  {fetchCards}
)(ClientsList)
