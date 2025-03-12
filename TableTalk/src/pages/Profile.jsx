import React, { useState } from "react";
import "../elements/card.css";
import "./Profile.css";
import picture from "../assets/images/profile1.jpg";
import placeholder from "../assets/gameImages/placeholder.webp"

export default function Profile() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  );
  const [boardGames, setBoardGames] = useState([
    { name: "Catan", image: placeholder  },
    { name: "Ticket to Ride", image: placeholder  },
    { name: "Gloomhaven", image: placeholder },
    { name: "Carcassonne", image: placeholder  }
  ]);

  const addBoardGame = () => {
    const newGame = { name: "New Game", image: placeholder };
    setBoardGames([...boardGames, newGame]);
  };


  // Function to get snippet of description
  const getSnippet = (text, length = 100) => {
    return text.length > length ? text.substring(0, length) + "..." : text;
  };

  return (
    <div className="profile-container">
      {/* Sidebar */}
      <div className="profile-sidebar">
        <button 
          className={`tab-button ${activeTab === "overview" ? "active" : ""}`} 
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>

        <button 
          className={`tab-button ${activeTab === "boardgames" ? "active" : ""}`} 
          onClick={() => setActiveTab("boardgames")}
        >
          Board Games
        </button>

        <button 
          className={`tab-button ${activeTab === "settings" ? "active" : ""}`} 
          onClick={() => setActiveTab("settings")}
        >
          Settings
        </button>

        <button 
          className={`tab-button ${activeTab === "security" ? "active" : ""}`} 
          onClick={() => setActiveTab("security")}
        >
          Security
        </button>
      </div>

      {/* Profile Content */}
      <div className="profile-content card">
        {activeTab === "overview" && (
          <div className="tab-content">
            <h1>User Profile</h1>
            <div className="profile-info">
              <div className="profile-pic-section">
                <img src={picture} alt="Profile" className="profile-pic" />
                <button className="change-pic-btn">Change Profile Picture</button>
              </div>
              <div className="details">
                <div className="info-row">
                  <label>Username:</label>
                  <p>JohnDoe</p>
                </div>
                <div className="info-row">
                  <label>Email:</label>
                  <p>johndoe@example.com</p>
                </div>
                <div className="info-row">
                  <label>Password:</label>
                  <p>**********</p>
                </div>
                <div className="info-row description-row">
                  <label>Description:</label>
                  <p className="description-text">
                    {getSnippet(description)}
                  </p>
                  <button className="view-more-btn" onClick={() => setIsModalOpen(true)}>
                    View More
                  </button>
                </div>
              </div>
            </div>
            <button className="edit-profile-btn">Edit Profile</button>
          </div>
        )}

        {activeTab === "boardgames" && (
          <div className="tab-content">
            <h1>Board Games</h1>
            <div className="boardgames-grid">
              {boardGames.map((game, index) => (
                <div key={index} className="boardgame-card">
                  <img src={game.image} alt={game.name} className="boardgame-image" />
                  <p>{game.name}</p>
                </div>
              ))}
              <div className="boardgame-card add-card" onClick={addBoardGame}>
                <p>+ Add Game</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="tab-content">
            <h1>Settings</h1>
            <p>Customize your profile settings here.</p>
          </div>
        )}

        {activeTab === "security" && (
          <div className="tab-content">
            <h1>Security</h1>
            <p>Update your password and security settings here.</p>
          </div>
        )}
        
      </div>

      {/* Modal for Editing Description */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Edit Description</h2>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="modal-textarea"
            />
            <div className="modal-buttons">
              <button className="save-btn" onClick={() => setIsModalOpen(false)}>Save</button>
              <button className="cancel-btn" onClick={() => setIsModalOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
