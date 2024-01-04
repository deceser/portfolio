import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { meta } from "src/utils/meta";
import { skillsFront, skillsBack } from "src/utils/fakeData/skills";
import { dataAbout } from "src/utils/fakeData/about";
import { services } from "src/utils/fakeData/services";

import "./index.css";

const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataAbout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataAbout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="4">
            {skillsFront.map((data) => (
              <div key={data.name}>
                <h3 className="progress-title">{data.name}</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{
                      width: `${data.value}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </Col>

          <Col lg="3">
            {skillsBack.map((data) => (
              <div key={data.name}>
                <h3 className="progress-title">{data.name}</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{
                      width: `${data.value}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Services</h3>
          </Col>
          <Col lg="7">
            {services.map((data) => (
              <div className="service_ py-4" key={data.title}>
                <h5 className="service__title">{data.title}</h5>
                <p className="service_desc">{data.description}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

export default About;
