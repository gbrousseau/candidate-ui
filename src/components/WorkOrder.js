import React, { useEffect, useState } from 'react';

const iStyle = { margin: '50px 50px 0px 100px', width: 'auto', textAlign: 'left' };

const WorkOrder = (props) => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);

  async function fetchData() {
    await fetch('http://localhost:8080/api/workorders/' + props.match.params.id)
      .then(res => res.json())
      .then(
        (data) => {
          setData(data);
          setIsLoaded(true);
        },
        (error) => {
          setError(error);
        },
      );
  }

  useEffect(() => {
    fetchData();
  });


  if (error) {
    return <div style={iStyle}>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div style={iStyle}>Loading...</div>;
  } else {
    return (
      <div style={iStyle}>
        <div className="col-12 float-left">
          <h2>General</h2>
          <hr />
          <div className="col-4 float-left">
            <div className="min-vw-50 d-inline font-weight-bold">Id:</div>
            <div className="d-inline min-vw-50 p-5" data-testid="id">{data.id ? data.id : 'No data'}</div>
          </div>
          <div className="col-4 float-left">
            <div className="min-vw-50 d-inline font-weight-bold">Root id:</div>
            <div className="d-inline min-vw-50 p-5">{data.rootId ? data.rootId : 'No data'}</div>
          </div>
          <div className="col-4 float-left">
            <div className="min-vw-50 d-inline font-weight-bold">Number:</div>
            <div className="d-inline min-vw-50 p-5">{data.number ? data.number : 'No data'}</div>
          </div>
          <div className="col-4 float-left">
            <div className="min-vw-50 d-inline font-weight-bold">Title:</div>
            <div className="d-inline min-vw-50 p-5" data-testid="title">{data.title ? data.title : 'No data'}</div>
          </div>
          <div className="col-4 float-left">
            <div className="min-vw-50 d-inline font-weight-bold">Description:</div>
            <div className="d-inline min-vw-50 p-5"
                 data-testid="description">{data.description ? data.description : 'No data'}</div>
          </div>
          <div className="col-4 float-left">
            <div className="min-vw-50 d-inline font-weight-bold">Priority:</div>
            <div className="d-inline min-vw-50 p-5">{data.priority ? data.priority : 'No data'}</div>
          </div>
          <div className="col-4 float-left">
            <div className="min-vw-50 d-inline font-weight-bold">Status:</div>
            <div className="d-inline min-vw-50 p-5">{data.status ? data.status : 'No data'}</div>
          </div>
          <div className="col-4 float-left">
            <div className="min-vw-50 d-inline font-weight-bold">Category:</div>
            <div className="d-inline min-vw-50 p-5">{data.category ? data.category : 'No data'}</div>
          </div>
        </div>
        {data.schedule == null ?
          null
          : <div className="col-12 float-left">
            <h2 className="my-3">Schedule</h2>
            <hr />
            <div className="col-4 float-left">
              <div className="min-vw-50 d-inline font-weight-bold">Value:</div>
              <div className="d-inline min-vw-50 p-5">{data.schedule.value}</div>
            </div>
            <div className="col-4 float-left">
              <div className="min-vw-50 d-inline font-weight-bold">Interval:</div>
              <div className="d-inline min-vw-50 p-5">{data.schedule.interval}</div>
            </div>
            <div className="col-4 float-left">
              <div className="min-vw-50 d-inline font-weight-bold">Type:</div>
              <div className="d-inline min-vw-50 p-5">{data.schedule.type}</div>
            </div>
            <div className="col-4 float-left">
              <div className="min-vw-50 d-inline font-weight-bold">Days:</div>
              <div className="d-inline min-vw-50 p-5">{data.schedule.days}</div>
            </div>
            <div className="col-4 float-left">
              <div className="min-vw-50 d-inline font-weight-bold">Use last completed:</div>
              <div className="d-inline min-vw-50 p-5">{data.schedule.useLastCompleted}</div>
            </div>
            <div className="col-4 float-left" />
          </div>
        }
        {data.createdBy == null ?
          null
          : <div className="col-12 float-left">
            <h2 className="my-3">Created By</h2>
            <hr />
            <div className="col-4 float-left">
              <div className="min-vw-50 d-inline font-weight-bold">Id:</div>
              <div className="d-inline min-vw-50 p-5">{data.createdBy.id ? data.createdBy.id : 'No data'}</div>
            </div>
            <div className="col-4 float-left">
              <div className="min-vw-50 d-inline font-weight-bold">User name:</div>
              <div
                className="d-inline min-vw-50 p-5">{data.createdBy.username ? data.createdBy.username : 'No data'}</div>
            </div>
            <div className="col-4 float-left">
              <div className="min-vw-50 d-inline font-weight-bold">First name:</div>
              <div
                className="d-inline min-vw-50 p-5">{data.createdBy.firstName ? data.createdBy.firstName : 'No data'}</div>
            </div>
            <div className="col-4 float-left">
              <div className="min-vw-50 d-inline font-weight-bold">Last name:</div>
              <div
                className="d-inline min-vw-50 p-5">{data.createdBy.lastName ? data.createdBy.lastName : 'No data'}</div>
            </div>
          </div>
        }
        {data.location == null ?
          null
          : <div className="col-12 float-left">
            <h2 className="my-3">Location</h2>
            <hr />
            <div className="col-4 float-left">
              <div className="min-vw-50 d-inline font-weight-bold">Id:</div>
              <div className="d-inline min-vw-50 p-5">{data.location[0].id ? data.location[0].id : 'No data'}</div>
            </div>
            <div className="col-4 float-left">
              <div className="min-vw-50 d-inline font-weight-bold">Name:</div>
              <div
                className="d-inline min-vw-50 p-5">{data.location[0].name ? data.location[0].name : 'No data'}</div>
            </div>
            <div className="col-4 float-left">
              <div className="min-vw-50 d-inline font-weight-bold">Address:</div>
              <div
                className="d-inline min-vw-50 p-5">{data.location[0].address ? data.location[0].address : 'No data'}</div>
            </div>
          </div>
        }
      </div>
    );
  }
};

export default WorkOrder;