import React from 'react'
import image from './trees.jpg'
import './Contact.css'

const Contact = () => {
  return (
    <>
      <section className="section0">
          <div className="about">
              <img src={image} alt="trees" className="contact-image" />
              <div className="contact-overlay"></div>

              <div className="contact-text">
                  <h1>Contact</h1>
              </div>

              <br />
              <br />

              <h2>Customer Service</h2>
              <p2 style={{ color: 'darkslategrey' }}>Monday - Friday: 9:00 AM - 6:00 PM</p2>
              <p2 style={{ color: 'darkslategrey' }}>Saturday - Sunday: Closed</p2>

              <br />
              <br />

              <h2>Contact Information</h2>
              <p2 style={{ color: 'darkslategrey' }}>Email: support@animalrescue.com </p2>
              <p2 style={{ color: 'darkslategrey' }}>Phone: +1 (123) 456-7890</p2>
              <p2 style={{ color: 'darkslategrey' }}>Address: 1234 Animal Street, Rescue City, USA</p2>

              <br />
              <br />

              <h2>Location</h2>
              <div className = 'google-maps'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.570953364658!2d-111.99806499999998!3d33.64107060000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b7177aeb1acb9%3A0x2a5c3fda270531f!2sParadise%20Valley%20High%20School!5e1!3m2!1sen!2sus!4v1732126357400!5m2!1sen!2sus" width="600" height="450" style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              

          </div>
      </section>

      <section className="section4">
        <div className = "form1">
          <br />
          <h2 className="Form">Contact Form</h2>

          <form>
            <label1>
              Name:
              <input type="text" name="name" placeholder="Enter your name"/>
            </label1>

            <br />

            <label1>
              Email:
              <input type="text" name="email" placeholder="Enter your email"/>
            </label1>

            <br />

            <label1>
              Type of Inquiry:
            </label1>
            <select>
                <option value="inquiry">General Inquiry</option>
                <option value="report">Report an Issue</option>
                <option value="donation">Donation</option>
                <option value="volunteer">Volunteer</option>
            </select>
            
            <br />

            <label1>
              Message Field:
              <textarea name="message" placeholder=" Enter message "></textarea>
            </label1>

            <button className="button1" type="submit">Submit</button>
          </form>

        </div>

      </section>

      <section className="section3">
      <div className = "end1">
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

export default Contact

