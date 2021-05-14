import React from "react";
import { Table } from "react-bootstrap";

const View = ({ info }) => {
  return (
    <React.Fragment>
      <small>
        Date : <strong>{info.date}</strong>
      </small>
      <br></br>
      <small>
        Age Limit : <strong>{info.min_age_limit}+</strong>
      </small>
      <br></br>
      <small>
        Availability : <strong>{info.available_capacity}</strong>
      </small>
      <br></br>

      <Table className="mt-3" responsive striped bordered hover>
        <thead>
          <tr>
            <td colSpan="4">Slots information</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            {info.slots &&
              info.slots.map((slot) => <td className="mr-5">{slot}</td>)}
          </tr>
        </tbody>
      </Table>
    </React.Fragment>
  );
};

export default View;
