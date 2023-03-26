import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function AppContact() {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact us</h2>
          <div className="subtitle">get connected with us</div>
        </div>
        <Form className="contact-form">
          <Row>     
            <Col sm={4}>
              <Form.Control type="text" placeholder="Enter your full name" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="email" placeholder="Enter your email address" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="tel" placeholder="Enter your contact number" required />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
                <Form.Control as="textarea" placeholder="Enter your message" required />
            </Col>
          </Row>
          <div className="btn-holder">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
      <div className="google-map">
      <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435615.6216419549!2d73.92113564072723!3d31.462389718564204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918fde40e954753%3A0xb8ea639d79127a78!2sLahore%20City%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1679739109772!5m2!1sen!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <Container fluid>
        <div className="contact-info">
            <ul>
                <li>
                    <i className="fas fa-envelope"></i>
                    hello@domain.com
                </li>
                <li>
                    <i className="fas fa-phone"></i>
                    000-000-0000
                </li>
                <li>
                    <i className="fas fa-map-marker-alt"></i>
                    Lahore, Pakistan
                </li>
            </ul>
        </div>
      </Container>
    </section>
  );
}
