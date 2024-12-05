import React from 'react';
import { useNavigate } from 'react-router-dom'
import './FormPage.css'

const FormPage = () => {
  const navigate = useNavigate();

  const handleEmergencyClick = () => {
    navigate('/map');
  }
  
  return (
    <div className="form-container">
      <h2>Emergency Form</h2>
      <br />
      <form>
        <label>
          Type of Animal:
          <input type="text" name="type of animal" placeholder="Enter type of animal"/>
        </label>
        <br />

        <label>
          Size of Animal:
        </label>
        <select>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
        </select>
        <br />

        <label>
          Physical Description:
          <textarea name="description" placeholder=" Enter physical description"></textarea>
        </label>
        <br />

        <label>
          Behavior (aggressive, scared, calm, friendly, etc.):
          <input type="text" name="behavior" placeholder="Enter type of animal behavior"/>
        </label>
        <br />

        <label htmlFor="appear">Does the animal appear to be abandoned or lost?</label>
        <select>
            <option value="abandoned">Abandoned</option>
            <option value="lost">Lost</option>
        </select>
        <br />

        <label>
          Is the animal showing signs of distress (like limping, bleeding, etc.):
          <input type="text" name="distress" placeholder="If Yes, list the signs of distress"/>
        </label>
        <br />

        <label htmlFor="approach">Is the animal approachable?</label>
        <select>
            <option value="yes">Yes</option>
            <option value="no">No</option>
        </select>
        <br />

        <label htmlFor="danger">Is there any immediate danger to the animal?</label>
        <select>
            <option value="yes">Yes</option>
            <option value="no">No</option>
        </select>
        <br />
        <label htmlFor="picture">Upload a picture of the animal</label>
        <input type="file" name="url"/>
        <br />
        <br />
        <label>
          Name:
          <input type="text" name="name" placeholder="Enter your name"/>
        </label>
        <br />

        <label>
          Contact Information:
          <input type="text" name="contact" placeholder="Enter your phone number"/>
        </label>
        <br />

        <label>
          Emergency Details:
          <textarea name="details" placeholder=" Enter details"></textarea>
        </label>
        <br />

        
       <button type="submit" onClick={handleEmergencyClick}>Submit</button>
      </form>
    </div>
  );
};

export default FormPage;