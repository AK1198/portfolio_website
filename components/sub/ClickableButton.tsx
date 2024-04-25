import React from 'react';
import '../../app/App.css'; // Import CSS file for styling

interface ButtonProps {
  imageUrl: string;
  linkUrl: string;
}

const ClickableButton: React.FC<ButtonProps> = ({ imageUrl, linkUrl }) => {
  const handleClick = () => {
    // Navigate to the link URL when the button is clicked
    window.location.href = linkUrl;
  };

  return (
    <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="clickable-button">
    <img src={imageUrl} alt="Button Image" className="button-image" />
  </a>
  );
};

export default ClickableButton;
