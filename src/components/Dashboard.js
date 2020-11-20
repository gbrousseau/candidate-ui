import React, { Component } from 'react';
import Moment from 'moment';
import { Link } from 'react-router-dom';

const Style = {margin: "50px 50px 0px 100px",width:"auto",textAlign:"left"};
const linkStyle = {color: "#ff3b30"}

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      data: {},
      columns: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/workorders")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result.data.workOrders,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, data, columns } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div style={Style}>
          <table className="table table-striped">
            <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Location</th>
              <th scope="col">Created</th>
              <th scope="col">Updated</th>
              <th scope="col">Priority</th>
              <th scope="col">Status</th>
            </tr>
            </thead>
            <tbody>
            {data.map(value =>
              <tr>
                <th><Link to={"/workorder/" + value.id} style={linkStyle}>{value.id}</Link></th>
                <th>{value.title}</th>
                <td>{value.location[0].name}</td>
                <td>{Moment(value.updatedAt).format("MMMM Do YYYY, h:mm:ss a")}</td>
                <td>{Moment(value.createdAt).format("MMMM Do YYYY, h:mm:ss a")}</td>
                <td>{value.priority}</td>
                <td>{value.status}</td>
              </tr>
          )}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default Dashboard;