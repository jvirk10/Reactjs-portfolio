import React, {useState} from 'react';
import "./Contact.css"

import { validateEmail } from '../../../utils/helpers';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [Name, setName] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setName(inputValue);
    } 
  };


  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }


    setName('');


    setEmail('');
    alert(`Hello ${Name}`);
  };


return (
<div className="contact">
    <h1>Contact Me</h1>
  <form>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Name</label>
        <input type="name" class="form-control" name="name" value={Name} onChange={handleInputChange}/>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" value={email} onChange={handleInputChange}/>
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
  )}
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Message: </label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"/>
      </div>

      <button type="submit" class="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
  </form>

</div>
  );
}
