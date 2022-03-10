import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact-form.styles.css";

const ContactForm = () => {
    return (
        <div id="contact">
            <h1 className="pt-3 text-center font-details-b pb-3 text-white"> CONTACT ME</h1>
            <Jumbotron className="contact-jumbotron">
                <br />
                <div className="m-2">
                    <h3 className="text-center" style={{ color: "white" }}>Office Address:</h3>
                    <p className="text-center" style={{ color: "white" }}>
                        1271 12th floor aggarwal millennium tower 2,
                        <br />
                        Netaji subhash place new delhi (110034).
                    </p>
                    <br />
                    <br />
                </div>
                <Row>

                    <Col className="d-flex justify-content-center flex-wrap">
                        <div className="m-2">
                            <a href="mailto:professionalshieldllp@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-danger" title="professionalshieldllp@gmail.com">
                                    <i className="fas fa-envelope-square"></i> Email Me
                                </Button>
                            </a>
                        </div>
                        <div className="m-2 text-center">
                            <a href="tel:01146604368" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-primary" title="professionalshieldllp@gmail.com">
                                    Call 01146604368
                                </Button>
                            </a>
                        </div>

                    </Col>
                </Row>
            </Jumbotron>
        </div>
    );
};

export default ContactForm;