import React from "react";
import { Card, Table } from "react-bootstrap";

import View from "./View";

const Rescard = (props) => {
  const { name, address, state_name, fee_type, district_name } = props.res;

  return (
    <React.Fragment>
      <Card className="mb-3 mt-5" bg="light" text="dark">
        <Card.Header>
          Center : <strong>{name}</strong>
          <br></br>
          <small>Address : {address}</small>
          <br></br>
          <small>District : {district_name}</small>
          <br></br>
          <small>State : {state_name}</small>
        </Card.Header>
        <Card.Body>
          {props.res.sessions &&
            props.res.sessions.map((data) => (
              <td>
                <View info={data} />
              </td>
            ))}
          <Card.Text>
            Fee ₹ : <strong>{fee_type}</strong>
          </Card.Text>
          <Table>
            <thead>
              <tr>
                <th>Vaccine</th>
                <th>Fee(in rupees)</th>
              </tr>
            </thead>
            <tbody>
              {props.res.vaccine_fees &&
                props.res.vaccine_fees.map((vacc) => (
                  <tr>
                    <td>{vacc.vaccine}</td>
                    <td>{vacc.fee}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <small>
            more info :{" "}
            <a href="https://selfregistration.cowin.gov.in/" target="_blank">
              Cowin
            </a>
          </small>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default Rescard;
