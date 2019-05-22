import React from "react"
import { useTranslation } from 'react-i18next';

/**
 * Welcome Component
 * Displays welcome message in Home page
 */
const About = () => {

  const { t } = useTranslation();

  return(
      <div className="about-page">
        <p>{t('about.message.1')}</p>
        <p>{t('about.message.2')}</p>
      </div>
    )
}



export default About;