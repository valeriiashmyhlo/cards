import React from 'react';
import ViewClientCard from './ViewClientCard';

class ClientsListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  formatDate(date) {
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;

    return dd + '.' + mm + '.' + yy;
  }

  render() {
    const props = this.props
    const birthDate = this.formatDate(new Date(props.birthYear, props.birthMonth, props.birthDay)).toString()
    return (
      <tr className="table-text-right">
        <td>
          <a href='/#' onClick={this.toggle}>{props.name}</a>
        </td>
        <td>{props.gender}</td>
        <td>{props.phone}</td>
        <td>{props.email}</td>
        <td>{birthDate}</td>
        <td>{props.address}</td>
        <ViewClientCard
          {...this.props}
          isOpen={this.state.modal}
          toggle={this.toggle}
          birthDate={birthDate}
        />
      </tr>
    );
  }
}

export default ClientsListItem;
