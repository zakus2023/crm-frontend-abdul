import React from "react";
import "../TicketTable/TicketTable.css";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const TicketTable = ({ tickets }) => {
  console.log(tickets);
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Subjects</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      <tbody>
        {tickets.length ? (
          tickets.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              
                <Link to={`/ticket/${row.id}`} className="lnk">
                  <td>{row.subjects}</td>
                </Link>
              
              <td>{row.status}</td>
              <td>{row.addedOn}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              No tickets to display
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default TicketTable;
