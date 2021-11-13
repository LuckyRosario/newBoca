import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";
import "./Contact.css";

function ContactForm (){
    return (
      <>
      <hr/>
      <h1 id="Contact" className="mt-5 text-center mb-3">Contact</h1>
      <h4 className="text-center">Send us a message and get a reply within an hour!</h4>
    
        <div className="form" >
          <form className="text-center" action="https://formsubmit.co/p.rosario684@gmail.com" method="POST">
          
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter Email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Name</Form.Label>
      <Form.Control type="name" placeholder="Name" />
    </Form.Group>
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control placeholder="Where are you located"/>
    </Form.Group>

    <Form.Group  as={Col} controlId="formGridState">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" placeholder="Text Area" rows={5} />
  
    </Form.Group>
  </Row>

  <Button className="rounded-pill mb-5 " variant="light" type="submit">
    Submit
  </Button>

          </form>
        </div>
      </>
    )
  };

export default ContactForm;
