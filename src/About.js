import about from "./cleaning.jpg";
import "./About.css";

function About() {
    return ( 
    <div className="row">
        <div className="col">
            <div className="about p-5 text-center" id="#About">
            <h1 id="About">Enjoy Easy, Seamless Services</h1>
            <div className="p">
                <p className="mt-5">
                Family Owned and Operated, we are trustworthy and take pride in our work. Boca Fresh is committed to 
                providing every customer five star service at an affordable price. We will customize your cleaning plan 
                to meet your specific needs. You can schedule a weekly, bi-weekly, or monthly cleaning at your convenience.
                </p>
                <p>
                    We supply great rates with dependable services at your request. Leave yourself more time to do
                     things that you really want to do while enjoying a fresh space.
                    We are locally family owned and operated. We also use safe products. No hassle or commitment 
                    required. You will always have the same professional and consistent services with us. You can trust us with cleaning your home without any problems.
                </p>
            </div>
            </div>
        </div>
        <div className="col">
<img className="pic w-55 h-auto" src={about} alt="cleaning supplies" />
        </div>
    </div>
        )

};

export default About