import React, { useState } from "react";
import "./AddNewTicket.css";
import NewTicketForm from "../../Components/NewTicketForm/NewTicketForm";
import { Col, Row, Container } from "react-bootstrap";
import PageBreadcrum from "../../Components/BreadcrumFolder/PageBreadcrum";

const AddNewTicket = () => {
  const [frmData, setFrmData] = useState({
    subject: "",
    addedOn: "",
    detail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target; 
    setFrmData({
      ...frmData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", frmData)
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrum page="Add New Ticket" />
        </Col>
      </Row>
      <div>
        <NewTicketForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          frmdata={frmData}
        />
      </div>
    </Container>
  );
};

export default AddNewTicket;
