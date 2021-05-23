import React, { useState } from 'react';
import EmailService from '../service/email'
import '../styles/email-submit-form.css'
import rabbit from '../assets/rabbit.jpg'

const EmailSubmitForm = props => {
  const [email, setEmail] = useState('');

  const [error, setError] = useState(false);
  let err_msg = 'Please enter a valid email address.';

  const [success, setSuccess] = useState(false);
  let success_msg = 'Thank you for subscribing!';

  const handleInputChange = event => {
    setEmail(event.target.value);
  };

  const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const saveEmail = () => {
    if (validateEmail(email)) {
      setError(false);
      setSuccess(true);
      EmailService.subscribe({ email: email });
      console.log(`valid email`);
    } else {
      setError(true);
      setSuccess(false);
      console.log(`invalid email: ${email}`);
    }
  }

  return (
    <div className="submit-form">
      
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="profile">
            <center>
              <img src={rabbit} alt="rabbit profile image"></img>
            </center>
          </div>
        </div>
        <div className="col"></div>
      </div>

      <div className="row">
        <center> A little drop of sunshine! </center>
      </div>
      <br></br>

      <div className="form-group">
        <input required
          type="email"
          className="form-control signup-box"
          id="inputEmail"
          placeholder="Enter email to hear more from me :)"
          value={email}
          onChange={handleInputChange}
        />

        <button onClick={saveEmail} className="submit-btn" type="submit">
          &#128238;
        </button>

        <div className="err-msg">
          <center>
            {error &&
              <div>
                {err_msg}
              </div>
            }
            {success &&
              <div>
                {success_msg}
              </div>
            }
          </center>
        </div>
      </div>

    </div>
  );

};

export default EmailSubmitForm;