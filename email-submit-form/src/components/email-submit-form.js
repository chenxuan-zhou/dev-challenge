import React, { useState } from "react";
import EmailService from "../service/email"

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
      EmailService.subscribe({email:email});
      console.log(`valid email`);
    } else {
      setError(true);
      setSuccess(false);
      console.log(`invalid email: ${email}`);
    }
  }

  return (
    <div className="submit-form">
      <div>
        <div className="form-group">
          <input required
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="Enter email to hear more from me!"
            value={email}
            onChange={handleInputChange}
          />
        </div>

        <button onClick={saveEmail} className="btn btn-primary">
          Subscribe
        </button>
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
      </div>
    </div>
  );
  
};

export default EmailSubmitForm;