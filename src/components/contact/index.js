import React, { useState } from "react"
import { useTranslation } from 'react-i18next';

// Importing Notification Modal HOC
import withNotificationModal from '../modals/notificationModal/index.js'

// Importing the email service configuration params to be used here
import { formEmailSenderUrl, recipientCodeName } from '../../../configuration.js'

/**
 * Contact Component
 * Displays contact iromation and form to send a contact message
 */
const Contact = ({ openNotificationModal }) => {

  const { t } = useTranslation();

  /**
   * Keeps track of the form input fields
   * @type {object}
   */
  const [form, setFormFields] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    subject: '',
    message: ''
  });

  /**
   * Handle changes in input fields in the contact-form to update the form values
   * @param {event} event 
   */
  const handleInputChange = event => {
    event.persist();
    setFormFields(form => ({...form, [event.target.name]: event.target.value }));
  }

  /**
   * It will handle the display of an error message in the notification modal
   * if the request to the mail sender fails
   */
  const onFormEmailFailure = () => {
    const message = t('contact.notification.error');
    const className = 'contact-page__notification-modal--error';
    openNotificationModal(message, className);
  }

  /**
   * It will handle the display of a success message in the notification modal
   * if the request to the mail sender is successful
   */
  const onFormEmailSuccess = () => {
    const message = t('contact.notification.success');
    const className = 'contact-page__notification-modal--success';
    openNotificationModal(message, className);
  }

  const onSubmitContactForm = () => {
    const {
      firstName,
      lastName,
      emailAddress,
      subject,
      message: text
     } = form;

    const messageInfo = {
      recipientCodeName,
      firstName,
      lastName,
      emailAddress,
      subject,
      text
    };

    const config = {
       method: 'POST', 
       mode: 'cors', 
       headers: { "Content-Type": 'application/json' },
       body: JSON.stringify({ messageInfo })
      }

    fetch(formEmailSenderUrl, config)
      .then(res => res.json())
      .then(data => {
        if(data.message === "success") {
          onFormEmailSuccess();
        } else {
          onFormEmailFailure();
        }
      }).catch(err => {
        console.log(err);
        onFormEmailFailure()
      })
  }

  return(
      <div className="contact-page">
        <div className="contact-page__form">
          <div className="contact-page__form__element">
            <label> {t('contact.form.firstName')} </label>
            <input 
              type="text"
              name="firstName"
              onChange={handleInputChange}
            />
            <label className="contact-page__form__lastName"> {t('contact.form.lastName')} </label>
            <input 
              type="text"
              name="lastName"
              onChange={handleInputChange}
            />
          </div> 
          <div className="contact-page__form__element contact-page__form__email">
            <label> {t('contact.form.emailAddress')} </label>
            <input 
              type="email"
              name="emailAddress"
              onChange={handleInputChange}
            />
          </div>
          <div className="contact-page__form__element contact-page__form__subject">
            <label> {t('contact.form.subject')} </label>
            <input 
              type="text"
              name="subject"
              onChange={handleInputChange}
            />
          </div>
          <div className="contact-page__form__element contact-page__form__message">
            <label> {t('contact.form.message')} </label>
            <textarea 
              name="message"
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div 
            className="contact-page__form__submit"
            onClick={onSubmitContactForm}
          >
            {t('contact.form.submit')}
          </div>
        </div>
        <div className="contact-page__info">
          <div className="contact-page__info__element">
            <div className="contact-page__info__title">{t('contact.info.emailAndSkype')}</div>
            <div>carolinamartinez@gmail.com</div>
          </div>
          <div className="contact-page__info__element">
            <div className="contact-page__info__title">{t('contact.info.mobileAndWhatsapp')}</div>
            <div>+351 912416531</div>
          </div>
        </div>
      </div>
    )
}

export default withNotificationModal(Contact);