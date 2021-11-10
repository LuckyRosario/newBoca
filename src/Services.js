import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./Services.css";

function Services() {
return (
    <div className="container m-5">
    <h1 id="Services" className="mt-5 text-center">Services</h1>
<Tab.Container className="mt-5" id="left-tabs-example" defaultActiveKey="first"  transition={true}>
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link id="text" eventKey="first">Apartment and Condo Cleaning</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link id="text" eventKey="second">Home and Residential Cleaning</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link id="text" eventKey="third">Small Office Cleaning</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link id="text" eventKey="fourth">Green Cleaning</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
         <p> Starting price is $60 for a one bedroom one bath apartment. Minimum work includes cleaning surfaces in kitchen and bathroom. Wiping the outside of appliances (inside for a deep clean). Dust, mop, and sweep. Laundry at your request for a deep clean, you can add more services as well.
         </p>
         
        </Tab.Pane>
        <Tab.Pane eventKey="second">
         <p>Includes everything from apartment cleaning. Together, we will devise a cleaning plan to fit your needs. You tell us what you need us to do specifically and how often and we oblige. Add on services include laundry, inside of appliances, and organization.</p>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
         <p> Enjoy a fresh space to work in every week with our cleaning services. We will only schedule visits for non-working hours.
             </p>
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
         <p> We only use top quality products that contain no harmful chemicals in order to keep you safe.
             </p>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
</div>
)};

export default Services;