import React, { useEffect, useState } from "react";
import "./Ticket.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import PageBreadcrum from "../../Components/BreadcrumFolder/PageBreadcrum";
import dummydata from "../../Assets/dummydata/dummydata.json";
import MessageHistory from "../../Components/MessageHistory/MessageHistory";
import ChatBox from "../../Components/ChatBox/ChatBox";
import { useParams } from "react-router-dom";

const Ticket = () => {
  const params = useParams();
  const ticketId = params.tId;

  const [message, setMessage] = useState("");
  const [ticket, setTicket] = useState("");

  console.log(dummydata);

  useEffect(() => {
    for (let i = 0; i < dummydata.length; i++) {
      if (dummydata[i].id == ticketId) {
        setTicket(dummydata[i]);
      }
    }
  }, [ticketId]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            message={message}
          />
        </div>
      </Row>
    </Container>
  );
};

export default Ticket;
