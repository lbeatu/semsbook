import React from "react";

const profileItem = () => {
  return (
    <div className="profile-card">
      <img src="https://media.giphy.com/media/xT0xeD1Bw0oyCjr8Z2/giphy.gif"></img>
      <div className="profile-content">
        <p>Semanur Küçük</p>
        <div className="contact-card">
          <a
            className="fab fa-instagram"
            href="https://www.instagram.com/semanurkucuk/?hl=tr"
            target="_blank"
          ></a>
          <a
            className="fab fa-tumblr-square"
            href="https://vsco.co/smnrkck/gallery"
            target="_blank"
          ></a>
          <a
            className="fab fa-instagram-square"
            href="https://www.instagram.com/semsbook/"
            target="_blank"
          ></a>
        </div>
      </div>
    </div>
  );
};

export default profileItem;
