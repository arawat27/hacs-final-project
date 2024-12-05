import React from 'react'
import image from './grass.jpg'
import './About.css'

const About = () => {
  return (
    <>
      <section className="section1">
          <div className="about">
              <img src={image} alt="grass" className="about-image" />
              <div className="about-overlay"></div>

              <div className="about-text">
                  <h1>About Us</h1>
              </div>

              <br />
              <br />
              <h2>WHO WE ARE</h2>
              <p style={{ color: 'darkslategrey' }}>We are a passionate team dedicated to creating a supportive network for animal rescuers, veterinarians, wildlife rehabilitation centers, and compassionate individuals. Our mission is to streamline communication and collaboration within the animal rescue community, making it easier to provide timely and effective care for animals in need.</p>

              <br />
              <br />
              <br />
              <h2>WHAT WE DO</h2>
              <p style={{ color: 'darkslategrey' }}>Our platform serves as a hub for connecting those who share a common goal: rescuing, rehabilitating, and protecting animals. We empower users to:</p>

              <br />
              <br />
              <br />
              <h2>WHY WE STARTED</h2>
              <p style={{ color: 'darkslategrey' }}>The need for a centralized platform to bring together various aspects of animal rescue inspired us to create this initiative. By bridging gaps between rescuers, experts, and resources, we aim to save more lives and foster a supportive community.</p>

              <br />
              <br />
              <br />
              <h2>OUR VISION</h2>
              <p style={{ color: 'darkslategrey' }}>We envision a world where every animal in need receives timely care and protection. Through technology and teamwork, we strive to create a compassionate, well-connected community dedicated to animal welfare.</p>

              <br />
              <br />
          </div>
      </section>
      
      <section className="section2">
          <div className = "meet-team">
              <h2>Meet the Team</h2>
              <p style={{ color: 'black' }}>Behind the platform is a dedicated group of animal lovers, tech enthusiasts, and rescue advocates. Together, we work to create solutions for a better future for animals.</p>
              
              <br />
              <br />

              <h3 style={{ color: 'green' }} >Aarohi Rawat</h3>
              <p style={{color: 'darkslategrey'}}>Creator</p>

              <br />
              <br />

              <h3 style={{ color: 'green' }}>Ethan Nguyen</h3>
              <p style={{ color: 'darkslategrey' }}>Creator</p>

              <br />
              <br />
          </div>
      </section>

      <section className="section3">
        <div className = "end">
            <br />
          <div className='footer-link-wrapper'>
           <div className='footer-link-items'>
            <h4 style={{ color: 'darkseagreen' }}>Connect With Us</h4>
            <p1 style={{ color: 'white' }}>Follow us on social media to stay updated on the latest rescue stories, initiatives, and tips:</p1>
           

            <br />

            <ul>
              <li style={{ listStylePosition: 'inside' }}>Facebook</li>
              <li style={{ listStylePosition: 'inside' }}>Twitter</li>
              <li style={{ listStylePosition: 'inside' }}>Instagram</li>
              <li style={{ listStylePosition: 'inside' }}>YouTube</li>
            </ul>
           </div>

            <br />
            <br />
          
           <div className='footer-link-items'>
            <h4 style={{ color: 'darkseagreen' }}>Legal & Policies</h4>

            <ul>
              <li style={{ listStylePosition: 'inside' }}>Terms of Use</li>
              <li style={{ listStylePosition: 'inside' }}>Privacy Policy</li>
              <li style={{ listStylePosition: 'inside' }}>Cookie Policy</li>
              <li style={{ listStylePosition: 'inside' }}>State Disclosures</li>
            </ul>

           </div>

           <div className='footer-link-items'>
              <h4 style={{ color: 'darkseagreen' }}>Support Our Mission</h4>
              <p1 style={{ color: 'white' }}>Animal Rescue Networking is a nonprofit organization dedicated to improving the lives of animals and fostering a compassionate community. Your support helps us connect rescuers, experts, and resources to make a lasting impact.</p1>
           </div>

          </div>


            <br />
            <br />
            <br />

            <p1 style={{ color: 'white' }}>© 2024 Animal Rescue Networking. All rights reserved. Compassionate Care, Every Step of the Way™ is a trademark of Animal Rescue Networking.</p1>



        </div>
      </section>
    </>
  )
}

export default About;

  