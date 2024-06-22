import React from "react";
import { Breadcrumb } from "react-bootstrap";
import '../BreadcrumFolder/PageBreadcrum.css'

const PageBreadcrum = ({ page }) => {
  return (
    <Breadcrumb className="bcrumb">
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item active>{page}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default PageBreadcrum;
