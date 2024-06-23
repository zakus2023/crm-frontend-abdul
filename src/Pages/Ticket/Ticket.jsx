import React, { useState } from "react";
import "./Ticket.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import PageBreadcrum from "../../Components/BreadcrumFolder/PageBreadcrum";
import dummydata from "../../Assets/dummydata/dummydata.json";
import MessageHistory from "../../Components/MessageHistory/MessageHistory";
import ChatBox from "../../Components/ChatBox/ChatBox";

const Ticket = () => {
  const onTicket = dummydata[0];

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e)=>{
    e.preventDefault()
    alert("Form submitted successfully")
  }

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrum page="Ticket" />
        </Col>
      </Row>
      <Row className="info-row">
        <Col className="infos">
          <div className="intro">
            Subject: <span>{onTicket.subjects}</span>
          </div>
          <div className="intro">
            Date: <span>{onTicket.addedOn}</span>
          </div>
          <div className="intro">
            Status: <span>{onTicket.status}</span>
          </div>
        </Col>

        <Col className="tick">
          <Button>Close Ticket</Button>
        </Col>
      </Row>
      <Row className="msg-row">
        <Col>
          <MessageHistory msg={onTicket.history} />
        </Col>
      </Row>
      <Row className="chatbox">
        <div className="chatbox-inner">
          <span>Message:</span>
          <ChatBox msg={message} handleChange={handleChange} handleSubmit={handleSubmit}/>
        </div>
      </Row>
    </Container>
  );
};

export default Ticket;
