import React, { useState } from "react"
import PortfolioVideo from "./video";
import { useTranslation } from 'react-i18next';

/**
 * Potfolio Component
 * Displays in a grid with max 3 elements per line every item of the Porfolio
 * It is easy to add or remove elements using elements from the state in combination
 * with generatePorfolioElement function
 */
const Portfolio = () => {

  const { t } = useTranslation();

  /**
   * Generate Obects element of the portfolio
   * @param {string} title - title of the video 
   * @param {string} youtubeId  -  youtube Id of the video
   */
  const generatePortfolioElement = (title, youtubeId) => {
    return {
      title,
      youtubeId,
      thumbnail: `https://img.youtube.com/vi/${youtubeId}/0.jpg`
    }
  }
  
  /**
   * List of portfolio video elements. They should include a title and a youtube Id
   * @type {array}
   */
  const [elements] = useState([
    generatePortfolioElement(t('portfolio.element.wedding'), 'p_HV8e5VwLA'),
    generatePortfolioElement('H20', '-Cxzy89DTlU'),
    generatePortfolioElement('Ladies Night', 'f-lvW8bmdrU'),
    generatePortfolioElement('Cuentos Tío Pepe 2018', 'TZAXKyNU_bw'),
    generatePortfolioElement('Dr. Ibiza "Cálida Noche"', '4BpMqyZHOwQ'),
    generatePortfolioElement('Muestra Cuentos Tío Pepe', '0df_ADevFew'),
    generatePortfolioElement('Itinerante Amarillo', 'PIHYMBzO1oQ')
  ]);

  /**
   * Keeps track of the Video Modal (PortfolioVideo component) state
   * @type {object}
   */
  const [videoModal, setVideoModal] = useState({
    isModalOpen: false,
    element: null
  });

  /**
   * Opens the modal with youtube iframe of the video selected by the user
   * @param {object} element - parameters of the video to be reproduced in the modal
   */
  const openVideoModal = element => {
    document.body.style.overflow = "hidden";
    setVideoModal({ isModalOpen: true,  element });
  }

  /**
   * Closes the modal with youtube iframe used to reproduce an element
   */
  const closeVideoModal = () => {
    document.body.style.overflow = "auto";
    setVideoModal({ isModalOpen: false,  element: null });
  }

  return(
      <div className="portfolio-page">
        {elements.map(element =>
            <div 
              className="portfolio-page__element" 
              onClick={() => openVideoModal(element)}
              key={element.title}
            >
              <img
                className="portfolio-page__element__thumbnail" 
                src={element.thumbnail}
                alt={element.title}
              />
              <h4 className="portfolio-page__element__title">
                {element.title}
              </h4> 
            </div>
        )}
        {videoModal.isModalOpen
          ? <PortfolioVideo 
              element={videoModal.element}
              closeVideoModal={closeVideoModal}
            />
          : null
        }
      </div>
    )
}



export default Portfolio;