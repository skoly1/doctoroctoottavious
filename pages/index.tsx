import React, { useState } from "react";
import { Hero, Homebar } from "../components";
import { Row, Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <>
      <Homebar />
      <Container>
        <Hero />
      </Container>

      {/* <ul>
        <li>
          <Link href="/new">New</Link>
        </li>
        <li>
          <Link href={{ pathname: "/new/[new]", query: { new: "123" } }}>
            New ID
          </Link>
        </li>
        <button onClick={pushHandler}>Push</button>
      </ul> */}
    </>
  );
};

export default HomePage;
