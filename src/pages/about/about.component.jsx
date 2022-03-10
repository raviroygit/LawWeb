import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT</h1>
        <Container className="about-container">
          <Col xs={12} md={12}>
            <h3 className="pt-3 text-center  pb-3">PROFESSIONAL SOLUTION LLP</h3>
            <p className="pt-3 text-center pb-3">It is a Limited Liability Company registered under the Companies Act . </p>
            <br />
            <p className="text-center">We are the team of Delhi based Professional experts to give solutions to your Legal issues by providing legal shelter to the owners of the factories/industries against the employees.</p>
            <p className="text-center">Professional Shield is a new Legal defence company established with an objective of providing any legal defence and solutions to its members and clients.</p>
            <p className=" text-center"> We aim at providing solutions to all your legal problems faced by the Employers while following their day to day routine.</p>
            <p className=" text-center"> It includes risks associated with workers employed, cases arising to its members under any Act.</p>
            <p className=" text-center"> Professional Shield covers all the Labour Commission cases, Civil Recoveries, Criminal cases, Cyber Law cases, Consumer forums and provides the best solution to all your legal conflicts.</p>
            <p className=" text-center">  We are experts  not only in the Civil and Criminal matters but also in the cases covered under the Consumer Protection Act, Industrial Dispute Act, Minimum Wages Act, Employment Act, Arbitration and Conciliation Act, Indian Medical Council Act, and Indian Contract Act.</p>
            <p className=" text-center"> Professional Shield provides unlimited consultation along with the legal solution and defence in all the Criminal Courts, Civil Courts, Consumer Forums, Tribunals, Authorities (both 1st and 2nd Appellate Authorities), Labour Courts, Arbitration, Conciliation, Mediation, SC-ST Commission, Lok Adalats, All District Courts and High Courts.</p>
            <br/>
            <strong className="pt-3 pb-3">WHY WE NEED PROFESSIONAL SOLUTIONS FOR THE FACTORIES ?</strong>
            <br/>
            <br/>
            <p className="text-center">We all are aware that all the Factory owners irrespective of the fact how small or big it is are scared of the legal dispute with its workers/employees during their employment period, as there are various Indian Laws set up by the Indian government in order to safeguard the interest of the workers/employees. Many cases of false charges/allegations have been witnessed by the employers and they have to incur heavy losses.</p>
            <p className="text-center">Professional Shield provides an effective shield to the members by protecting them in all the legal disputes that arose between employers and employees and no other disputes shall be included. We will uprise all the legal battles on your behalf without any fear and without wasting your precious time and energy.</p>
            <p className="text-center">Professional Shield is one of the best emerging companies, which work with full dedication for the best legal solution in order to ensure the welfare of  its members.</p>
            <p className="text-center">While enclosing the professional commitments towards its members, we would request you to explore the possibility of becoming a member of PROFESSIONAL SHIELD LLP.</p>
            <br /> <br />
            <Col className="d-flex justify-content-center flex-wrap">
              <div>
                <a href="#contact">
                  <Button className="m-2" variant="outline-primary">
                    Let's talk
                  </Button>
                </a>
              </div>
            </Col>
          </Col>
        </Container>
      </div>
    </div>
  );
};

export default About;
