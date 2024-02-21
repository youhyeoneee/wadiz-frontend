import React from "react";
import MyNavbar from "~/components/MyNavbar/MyNavbar";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <MyNavbar brandTitle="wadiz" />
      <Container className="min-vh-100">
        <Outlet />
      </Container>
    </>
  );
}
