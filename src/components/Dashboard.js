import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';


class Dasboard extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { data, columns, pagination } = this.props;

    if (data !== null) {
      return (
        <div style={eStyle}>
          <ReactTable data={data} columns={columns} showPagination={pagination} minRows={0} className={"-striped react-table"}/>
        </div>
      );
    } else {
      return (
        <div style={eStyle}>
          <ReactTable data={data} columns={columns} showPagination={pagination} minRows={0} />
        </div>
      );
    }
  }
}

export default Dashboard;