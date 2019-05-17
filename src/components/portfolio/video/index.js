import React from "react"
import { useTranslation } from 'react-i18next';

/**
 * 
 * @param {*} param0 
 */
const PortfolioVideo = ({ element, closeVideoModal }) => {
  const { t } = useTranslation();
  const { title, youtubeId} = element;
  const videoUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1`;
  
  return(
    <div className="portfolio-page__video" onClick={closeVideoModal}>
      <div className="portfolio-page__video__modal">
        <div 
          className="portfolio-page__video__close-button" 
          onClick={closeVideoModal}
        >
          {t('portfolio.closeVideo')}
        </div>
        <iframe
          title={title}
          className="portfolio-page__video__frame"
          src={videoUrl}
          frameBorder="0" 
          allowFullScreen
        >
        </iframe>
      </div>
    </div>
  )
}


export default PortfolioVideo
