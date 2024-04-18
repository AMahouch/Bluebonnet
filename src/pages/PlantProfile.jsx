import React, { useState } from 'react';
import '../styles/plant-profile.css'; // Import the CSS file
import { warningList } from '../AppConfig'; // Adjust the path as needed


const PlantProfile = ({ plant, setScreen }) => {

  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() === '') return; // Prevent empty comments
    const updatedPlant = { ...plant };
    if (!updatedPlant.comment) updatedPlant.comment = []; // Ensure comment array exists
    updatedPlant.comment.push({ name: "Alex", comment: newComment }); // Add new comment
    setNewComment(''); // Clear the comment input after submission
  };

  const handleBackButtonClick = () => {
    setScreen('dashboard'); // Navigate back to the dashboard
  };

  if (!plant) {
    return <div>Loading...</div>;
  }

  const warning = plant.warning ? warningList.find(warning => warning.name === plant.warning) : null;

  return (
    <div className="plant-profile page">
      <div className = "back_button"  onClick={handleBackButtonClick}>
        <img src = {require(`../images/back_button.png`)} alt = "Back button"/>
      </div>
      <div>
        <img className="plant-image content-center" src={require(`../images/${plant.image}`)} alt={plant.name} />
      </div>

      <div className="plant-title align-center text-center">{plant.name}</div>

      <div className="planted-weeks text-center my-2">Planted {plant.weeksAgo} weeks ago.</div>
      {warning && ( // Check if the warning object exists
        <div className="warning">
          <h3>{warning.large_title}</h3>
          <p className="warning-description">{warning.description}</p>
        </div>
      )}
      <div className="description-section">
        <h3>Description</h3>
        <p>{plant.description}</p>
      </div>
      <div className="neighbor-comments">
        <h3>What neighbors in Arlington are saying</h3>
        {plant.comment && plant.comment.map((comment, index) => (
          <div className="comment" key={index}>
            <div className="icon">
              <img src={require(`../images/misty_icon.png`)} alt="User Icon" />
            </div>
            <div className="comment-details">
            <p><span className="commenter-name">{comment.name}</span></p>
            <p>{comment.comment}</p>
            </div>
          </div>
        ))}
        <div className="add-comment">
          <input
            type="text"
            placeholder="Alex says..."
            value={newComment}
            onChange={handleCommentChange}
          />
          <img className='submit_icon'
            src={require(`../images/submit_icon.png`)}
            alt="Submit"
            onClick={handleCommentSubmit}
            style={{ cursor: 'pointer' }} // Add cursor pointer style
          />
        </div>
      </div>
    </div>
  );
};

export { PlantProfile };
