import React from "react"
import { useTranslation } from 'react-i18next';

/**
 * Welcome Component
 * Displays welcome message in Home page
 */
const Welcome = () => {

  const { t } = useTranslation();

  return(
      <div className="welcome-page">
        <p>{t('welcome.message.1')}</p>
        <p>{t('welcome.message.2')}</p>
        <p>{t('welcome.message.3')}</p>
      </div>
    )
}



export default Welcome;