import FormGroup from "react-bootstrap/FormGroup";
import Button from "react-bootstrap/Button";

function ContactForm (){
    return (
      <>
      <h1 id="Contact" className="mt-5 text-center">Contact</h1>
        <div>
          <form  className="text center w-75" action="https://formsubmit.co/p.rosario684@gmail.com" method="POST">
            <FormGroup controlId="formBasicEmail">
              <input
                type="email"
                name="email"
                className="text-primary"
                placeholder="Enter email"
              />
            </FormGroup>
<FormGroup controlId="formBasicName">
              <input
                type="text"
                name="name"
                className="text-primary"
                placeholder="Name"
              />
            </FormGroup>
<FormGroup controlId="formBasicSubject">
              <input
                type="text"
                name="subject"
                className="text-primary"
                placeholder="Subject"
              />
            </FormGroup>
<FormGroup controlId="formBasicMessage">
              <input
                type="textarea"
                name="message"
                className="text-primary"
              />
            </FormGroup>
<Button variant="primary" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </>
    )
  };

export default ContactForm;
