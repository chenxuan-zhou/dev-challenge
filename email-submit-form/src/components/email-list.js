import React, { useEffect, useState } from 'react';
import EmailService from '../service/email'
import '../styles/email-list.css'

const EmailList = props => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    getEmails();
  }, []);

  const getEmails = () => {
    EmailService.getAll()
      .then(response => {
        setEmails(response.data.emails);
        console.log(emails);
      }).catch(e => {
        console.error(e);
      })
  }

  return (
    <div className="email-list">
      <div className="row">
        {emails.map((email) => {
          return (
            <div className="col-sm-3 pb-4">
              <div className="card">
                <div className="card-body">
                  <div className="email-link">
                    <a href={`mailto:${email}`}> {email} </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>

  );
}

export default EmailList;