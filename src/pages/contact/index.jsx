import React from "react";
import * as emailjs from "emailjs-com";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Alert } from "react-bootstrap";

import { meta } from "src/utils/meta";
import { contactConfig } from "src/api/contactConfig";

import "./index.css";

const Contact = () => {
  const alertRef = React.useRef(null);
  const [formData, setFormdata] = React.useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormdata({ loading: true });

    const { email, name, message } = formData;
    const { YOUR_EMAIL, YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_USER_ID, YOUR_UPWORK } =
      contactConfig;

    const templateParams = {
      from_name: email,
      user_name: name,
      to_name: YOUR_EMAIL,
      message: message,
    };

    try {
      const result = await emailjs.send(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        templateParams,
        YOUR_USER_ID,
      );
      console.log(result.text);
      setFormdata({
        loading: false,
        alertmessage: "SUCCESS! Thank you for your message",
        variant: "success",
        show: true,
      });
    } catch (error) {
      console.log(error.text);
      setFormdata({
        alertmessage: `Failed to send! ${error.text}`,
        variant: "danger",
        show: true,
      });
      alertRef.current?.scrollIntoView();
    }
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <Alert
              variant={formData.variant}
              className={`rounded-0 co_alert ${formData.show ? "d-block" : "d-none"}`}
              onClose={() => setFormdata({ show: false })}
              dismissible
            >
              <p className="my-0">{formData.alertmessage}</p>
            </Alert>
          </Col>
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>
                <a href={`${contactConfig.YOUR_UPWORK}`}>Upwork - click me</a>
              </strong>
              <br />
              <br />
              {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                <strong>
                  <a href={contactConfig.YOUR_FONE}>Telegram - click me</a>
                </strong>
              ) : (
                ""
              )}
            </address>
            <p>{contactConfig.description}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form onSubmit={handleSubmit} className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name || ""}
                    type="text"
                    required
                    onChange={handleChange}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    type="email"
                    value={formData.email || ""}
                    required
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit">
                    {formData.loading ? "Sending..." : "Send"}
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
      <div className={formData.loading ? "loading-bar" : "d-none"}></div>
    </HelmetProvider>
  );
};

export default Contact;
