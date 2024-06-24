import React, { useEffect, useState } from "react";
import "./Ticket.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import PageBreadcrum from "../../Components/BreadcrumFolder/PageBreadcrum";
import dummydata from "../../Assets/dummydata/dummydata.json";
import MessageHistory from "../../Components/MessageHistory/MessageHistory";
import ChatBox from "../../Components/ChatBox/ChatBox";
import { useParams } from "react-router-dom";
import { array } from "prop-types";

const Ticket = () => {
  //const onTicket = dummydata[0];

  const params = useParams();

  const [message, setMessage] = useState("");
  const [ticket, setTicket] = useState("");
//this will populate the the ticket landing page
  useEffect(() => {
    for (let i = 0; i < array.length; i++) {
      if (dummydata[i].id == params.id) {
        setTicket(dummydata[i]);
      }
      continue;
    }
  },[message,params.id]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully");
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrum page="Ticket" />
        </Col>
      </Row>
      <Row className="info-row">
        <Col className="infos">
          <div>{params.id}</div>
          <div className="intro">
            Subject: <span>{ticket.subjects}</span>
          </div>
          <div className="intro">
            Date: <span>{ticket.addedOn}</span>
          </div>
          <div className="intro">
            Status: <span>{ticket.status}</span>
          </div>
        </Col>

        <Col className="tick">
          <Button>Close Ticket</Button>
        </Col>
      </Row>
      <Row className="msg-row">
        <Col>
          <MessageHistory msg={ticket.history} />
        </Col>
      </Row>
      <Row className="chatbox">
        <div className="chatbox-inner">
          <span>Message:</span>
          <ChatBox
            msg={message}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </Row>
    </Container>
  );
};

export default Ticket;
