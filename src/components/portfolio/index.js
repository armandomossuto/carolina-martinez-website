import React, { Component } from "react"
import PortfolioVideo from "./video";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [
        this.generatePortfolioElement('Boda Perez-Castilla Martinez', 'p_HV8e5VwLA'),
        this.generatePortfolioElement('H20', '-Cxzy89DTlU'),
        this.generatePortfolioElement('Ladies Night', 'f-lvW8bmdrU'),
        this.generatePortfolioElement('Cuentos Tío Pepe 2018', 'TZAXKyNU_bw'),
        this.generatePortfolioElement('Dr. Ibiza "Cálida Noche"', '4BpMqyZHOwQ'),
        this.generatePortfolioElement('Muestra Cuentos Tío Pepe', '0df_ADevFew'),
        this.generatePortfolioElement('Itinerante Amarillo', 'PIHYMBzO1oQ')
      ],
      videoModal: {
        isModalOpen: false,
        element: null
      }
    }

    this.generatePortfolioElement = this.generatePortfolioElement.bind(this);
    this.openVideoModal = this.openVideoModal.bind(this);
    this.closeVideoModal = this.closeVideoModal.bind(this);
  }

  /**
   * Generate Obects element of the portfolio
   * @param {string} title - title of the video 
   * @param {string} youtubeId  -  youtube Id of the video
   */
  generatePortfolioElement(title, youtubeId) {
    return {
      title,
      youtubeId,
      thumbnail: `https://img.youtube.com/vi/${youtubeId}/0.jpg`
    }
  }

  /**
   * Opens the modal with youtube iframe of the video selected by the user
   * @param {string} youtubeId - youtube Id of the video to reproduce in the iframe modal
   */
  openVideoModal(element) {
    document.body.style.overflow = "hidden";
    this.setState({videoModal: { isModalOpen: true,  element }});
  }

  /**
   * Closes the modal with youtube iframe used to reproduce an element
   */
  closeVideoModal() {
    document.body.style.overflow = "auto";
    this.setState({ videoModal: { isModalOpen: false,  element: null }});
  }

  render() {
    const { elements, videoModal } = this.state;
    return(
      <div className="portfolio-page">
        {elements.map(element =>
            <div className="portfolio-page__element" onClick={() => this.openVideoModal(element)}>
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
              closeVideoModal={this.closeVideoModal}
            />
          : null
        }
      </div>
    )
  }
}



export default Portfolio;