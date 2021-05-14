import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigationbar from "./Navigationbar/Navigationbar";
import { Col, Container, Form, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "react-bootstrap/Button";
import Moment from "moment";
import Rescard from "./Rescard/Rescard";
import Alert from "react-bootstrap/Alert";

function App() {
  const [value, setValue] = useState(" ");
  const [startDate, setStartDate] = useState(new Date());
  const [pincode, setPincode] = useState("");
  const [response, setResponse] = useState([{}]);
  const [validated, setValidated] = useState(false);

  const formatDate = Moment(startDate).format("DD-MM-YYYY");

  useEffect(() => {
    async function fetchData() {
      const fetchRes = await fetch(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${formatDate}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer 123123123",
          },
        }
      )
        .then((fetchRes) => fetchRes.json())
        .then((data) => {
          console.log(data);
          setResponse(data.centers);
        })
        .catch((data) => console.log(data.error));
    }
    fetchData();
  }, [pincode]);

  //pin input change Handler

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  //validation hnadler
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (value.length !== 6) {
      alert("please enter valid Pincode 😃");
    } else {
      setPincode(value);
      setValidated(true);
    }
  };

  return (
    <div className="">
      <Navigationbar />
      <div className="mt-3 pt-5">
        <marquee behavior="scroll" direction="left">
          <strong>Note</strong> : "Most of the places were not updated with
          adequate information..."{" "}
        </marquee>
      </div>

      <Container>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mt-5 pt-4 d-flex flex-wrap" lg="true">
            <Col className="mb-3" sm={12}>
              <Form.Group
                controlId="exampleForm.ControlInput1"
                onChange={changeHandler}
              >
                <Form.Label>Enter Pincode:</Form.Label>

                <Form.Control
                  type="number"
                  placeholder="enter pin code"
                  required
                  maxLength={6}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide pincode.{" "}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col sm={12} className="">
              <Form.Group md="6">
                <Form.Label>Select Date:</Form.Label>
                <br></br>

                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="dd/MM/yyyy"
                  minDate={new Date()}
                  withPortal
                />
              </Form.Group>
            </Col>
            <Col>
              <Button
                type="submit"
                className="mt-3 m-auto w-100"
                variant="primary"
              >
                Search
              </Button>
            </Col>
          </Row>
          <section style={{ marginTop: "1rem" }}>
            <small>Developed by ~</small>
            <a
              href="https://www.instagram.com/bal.ganesh/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              BalaGanesh
            </a>
          </section>
        </Form>

        {response &&
          response.map((data, index) =>
            data.name ? <Rescard res={data} /> : null
          )}

        <div className="" style={{ marginTop: "3.5rem" }}>
          <Alert variant="danger">
            <h5>Disclaimer:</h5>
            <p>
              {" "}
              All information shown as per the data provide by Govt. of India
            </p>
            Api Source :{" "}
            <Alert.Link href="https://apisetu.gov.in/" target="_blank">
              ApiSetu
            </Alert.Link>
          </Alert>
        </div>
      </Container>
    </div>
  );
}

export default App;
