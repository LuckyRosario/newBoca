import one from "./slide1.jpg";
import two from "./slide2.jpg";
import three from "./slide3.jpg";
import Carousel from 'react-bootstrap/Carousel';
import NavLink from "react-bootstrap/NavLink";
import "./Home.css"

function Home() {
return ( 
<Carousel variant="dark" fade>
  <Carousel.Item interval={1000}>
    <img
      className="d-block h-auto w-100"
      src={one}
      alt="First slide"
    />
    <Carousel.Caption className="text">
      <h1 id="Home">Welcome to Boca Fresh Cleaning
      </h1>
      <h4>Tell us what your needs are and we will fullfill them! At your service. We are always on time and on point. Satisfaction guaranteed.
      </h4>
      <button class="button rounded-pill mt-5">	<NavLink className="NavLink text" style={{textDecoration: "none", color: "black"}} href="#Contact">
								Contact
							</NavLink></button>
              {/* <a style={{textDecoration: "none", color: "black"}} href="#Contact"> Get A Quote</a> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block h-auto w-100"
      src={two}
      alt="Second slide"
    />

    <Carousel.Caption className="text">
      <h1>Stay Fresh</h1>
      <h4>The days are getting shorter, everything is opening, and you just want to enjoy your time off with friends and family not cleaning. Let us keep you fresh while you relax. Just call and set an appointment its that simple!</h4>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block h-auto w-100"
      src={three}
      alt="Third slide"
    />

    <Carousel.Caption className="text">
      <h1>Best Rates</h1>
      <h4>Family owned and operated we are affordable and take pride in our work. We do not use harsh chemicals and we keep it safe for your children and pets!</h4>
      <button class="button rounded-pill mt-5" href="#Contact">Get A Quote</button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
)
}

export default Home;