import React from "react";
import { Container } from "react-bootstrap";

export default function MyFooter({ brandTitle }) {
  return (
    <Container fluid className="py-4 bg-light mt-3">
      <Container className="d-flex justify-content-between" as="footer">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            {brandTitle}
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">
            © 2024 Company, Inc
          </span>
        </div>
      </Container>
    </Container>
  );
}
