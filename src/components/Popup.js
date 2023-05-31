import React from 'react';
import './PopupStyles.css'
const Popup = ({ onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <h2>Pop-up Content</h2>
        <p>This is the content of the pop-up.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;