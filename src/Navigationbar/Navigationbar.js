import React, { useState, useRef } from "react";
import { Container, Navbar } from "react-bootstrap";
import { BsQuestionCircle } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const Navigationbar = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <React.Fragment>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="success"
        fixed="top"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">COVID Vaccine Centers info</Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>

          <OverlayTrigger
            trigger="click"
            key="left"
            placement="left"
            overlay={
              <Popover>
                <Popover.Title as="h4">Info...!</Popover.Title>
                <Popover.Content>
                  Enter 6 digit<strong> pin code</strong> & click on search to
                  get details about vaccination centers & availability in your
                  area.
                </Popover.Content>
                <Popover.Title as="h4">
                  <small>
                    more info :{" "}
                    <a href="https://www.cowin.gov.in/home" target="_blank">
                      cowin.gov.in
                    </a>
                  </small>
                </Popover.Title>
              </Popover>
            }
          >
            <Button
              variant="secondary"
              style={{ background: "none", borderRadius: "50%" }}
            >
              <BsQuestionCircle />
            </Button>
          </OverlayTrigger>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default Navigationbar;
