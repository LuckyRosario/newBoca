import book from "./book.jpg";
import clean from "./clean.png";
import relax from "./relax.png";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup';
// import "./How.css"

function How() {
   return ( 
<CardGroup className="rounded mb-5 gap-3">
  <Card className="pb-5">
    <Card.Img className="rounded border-0 w-100 h-auto mt-1" variant="top"  src={book} />
    <Card.Body>
      <Card.Title>Book</Card.Title>
      <Card.Text>
        Inform us of your needs, and your home. Get a quote and pick a day and time.
      </Card.Text>
    </Card.Body>
  
  </Card>
  <Card>
    <Card.Img className="rounded border-0 w-100 h-auto p-0" variant="top" src={clean} />
    <Card.Body>
      <Card.Title>Clean</Card.Title>
      <Card.Text>
       We arrive with our own cleaning supplies to keep you fresh and clean. Also, satisfaction is guaranteed.
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img className="rounded border-0 w-100 h-auto p-0" variant="top" src={relax} />
    <Card.Body>
      <Card.Title>Relax</Card.Title>
      <Card.Text>
        You get to come home to a clean, shiny home and relax! Enjoy!
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>)
}

export default How;