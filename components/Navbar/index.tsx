import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Link from "next/link";
import style from "./Navbar.module.scss";
import cx from "classnames";
import { FaHandHoldingMedical } from "react-icons/fa";

function Homebar() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Link href="/">
            <FaHandHoldingMedical size={32} color={"#08c9ff"} />
          </Link>
          <Row className={cx("align-items-center")}>
            <Col>
              <Link className={cx(style.navbar)} href="/">
                Find Doctors
              </Link>
            </Col>
            <Col>
              <Button variant="outline-info" className={cx(style.btn)}>
                Login/Signup
              </Button>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}

export default Homebar;
