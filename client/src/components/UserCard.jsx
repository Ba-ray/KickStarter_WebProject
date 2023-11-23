import React, { useState } from "react";
import "../styles/UserCard.css"; // Import your CSS file
import profilepic from "../images/businessman.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faPlusCircle,
  faMailBulk,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const UserCard = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
const { username, location, aboutMe} = props.data;
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="cardContainer">
      <main className="profile-card">
        <div>
          <img className="profile-pic" src={profilepic} alt="Profile" />
        </div>
        <div className="details">
          <h1 className="name">{username}</h1>
          <div className="location">
            <FontAwesomeIcon icon={faLocation} />
            <span>Beirut, Lebanon</span> {/*change later to location if needed*/}
          </div>
          <p className="description">{aboutMe}</p>
          <div className="socialDiv">
            <a href="#github">
              <FontAwesomeIcon icon={faWhatsapp} className="socials github" />
            </a>
            <a href="#linkdin">
              <FontAwesomeIcon icon={faLinkedin} className="socials linkdin" />
            </a>
            <a href="#insta">
              <FontAwesomeIcon
                icon={faMailBulk}
                className="socials instagram"
              />
            </a>
            <a href="/profile">
              <FontAwesomeIcon icon={faUser} className="socials profile" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserCard;
