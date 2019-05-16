import React, { useState } from "react"
import { useTranslation } from 'react-i18next';

/**
 * Contact Component
 * Displays contact iromation and form to send a contact message
 */
const Contact = () => {

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

  const handleInputChange = (event) => {
    event.persist();
    setFormFields(form => ({...form, [event.target.name]: event.target.value }));
  }

  const onSubmit = () => {
    // Will submit the form
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
            onClick={onSubmit}
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



export default Contact;