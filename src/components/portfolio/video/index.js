import React from "react"

/**
 * 
 * @param {*} param0 
 */
const PortfolioVideo = ({ element, closeVideoModal }) => {
  const { title, youtubeId} = element;
  const videoUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1`;
  
  return(
    <div class="portfolio-page__video">
      <iframe
        title={title}
        className="portfolio-page__video"
        src={videoUrl}
        frameborder="0" 
        allowfullscreen
      >
      </iframe>
    </div>
  )
}


export default PortfolioVideo
