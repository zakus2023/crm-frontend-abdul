import React, { useEffect, useState } from "react";
import "./TicketList.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import PageBreadcrum from "../../Components/BreadcrumFolder/PageBreadcrum";
import SearchTicketFrm from "../../Components/SearchTicketForm/SearchTicketFrm";
import TicketTable from "../../Components/TicketTable/TicketTable";
import dummydata from "../../Assets/dummydata/dummydata.json";

const TicketList = () => {
  const [data, setData] = useState(dummydata); //data is what i will pass as a props inside the tickets table

  const [filteredTickets, setFiltererdTickets] = useState(""); // this will be the search string

  const handleChange = (e) => {
    setFiltererdTickets(e.target.value);
  };
  // This function handles search Ticket whenever the page is loaded

  useEffect(() => {
    //Searching with any columns
    const displayedTickets = dummydata.filter((row) =>
      Object.values(row).some((value) =>
        value.toString().toLowerCase().includes(filteredTickets.toLowerCase())
      )
    );

    //Searching with one column
    // const displayedTickets = dummydata.filter((row) =>
    //     row.subjects.toLowerCase().includes(filteredTickets.toLowerCase())
    //   );

    setData(displayedTickets);
  }, [filteredTickets]);

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrum page="Ticket List" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button>Add New Ticket</Button>
        </Col>
        <Col>
          <SearchTicketFrm handleChange={handleChange} str={filteredTickets} />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable tickets={data} />
        </Col>
      </Row>
    </Container>
  );
};

export default TicketList;
