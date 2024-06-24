import React from "react";
import "../Dshboard/Dashboard.css";
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import TicketTable from "../../Components/TicketTable/TicketTable";
import dummydata from "../../Assets/dummydata/dummydata.json";
import PageBreadcrum from "../../Components/BreadcrumFolder/PageBreadcrum";
import { Link } from "react-router-dom";

const Dashboard = () => {
  console.log(dummydata);
  return (
    <Container>
      <Row >
        <Col>
          <PageBreadcrum page="Dashboard"/>
        </Col>
      </Row>
      <Row className="row">
        <Col className="col">
          <Link to="/addnewticket"><Button className="btn-dash"> Add new Ticket</Button></Link>
        </Col>
      </Row>
      <Row>
        <Col className="col">
          <div>Total Tickets: 50</div>
          <div>Pending Tickets: 5</div>
        </Col>
      </Row>

      <Row>
        <Col className="col">Recently added tickets</Col>
      </Row>
      <hr />

      <Row>
        <Col className="col">
          <TicketTable tickets={dummydata} />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
