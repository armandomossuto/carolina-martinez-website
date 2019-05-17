import React, { useState } from "react"

/**
 * HOC for adding Notification Modal to a specific Component
 * @param {component} WrappedComponent
 */
const withNotificationModal = WrappedComponent => ({ ...props }) => {
  /**
   * For handling a notification modal in this component
   * @type {object}
   */
  const [notificationModal, setNotificationModal] = useState({
    showModal: false,
    message: '',
    className: ''
  });

  /**
   * Updates notification modal states to trigger it top open
   * @param {string} message - message to be displayed in the modal 
   * @param {string} className - className of the modal
   */
  const openNotificationModal = (message, className) => {
    setNotificationModal({
      message,
      className,
      showModal: true, 
    })
  }
  
  /**
   * Closes the notification modal and cleans its state
   */
  const closeNotificationModal = () => {
    setNotificationModal({
      message: '',
      className: '',
      showModal: false, 
    })
  }

  const { showModal, message, className} = notificationModal;

  return(
    <div className="modal-wrapper" onClick={closeNotificationModal}>
      {showModal 
        ? (
            <div className={`notification-modal ${className}`}>
              <span 
                className="notification-modal__message"
              >
                {message}
              </span>
              <button 
                onClick={closeNotificationModal}
                className="notification-modal__confirmation-button"
              >
                OK
              </button>
            </div>
          ) 
        : null
      }

      <WrappedComponent 
        openNotificationModal={openNotificationModal}
        { ...props }
      />
    </div>
  )
;}

export default withNotificationModal;