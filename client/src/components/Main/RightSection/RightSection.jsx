import React from "react";
import "./RightSection.scss";
import Contacts from "../../Contacts/Contacts";
import Jokes from "../../Jokes/Jokes";
import Radio from "../../Radio/Radio";
import Profile from "../../Profile/Profile"

function RightSection({theme, setTheme}) {
  return (
    <div className="right-section-container">
      <div className="profile-tabletView-wrapper"><Profile theme={theme} setTheme={setTheme}/></div>
      <Contacts theme={theme} setTheme={setTheme} />
      <div className="radio-tabletView-wrapper"><Radio theme={theme} setTheme={setTheme}/></div>
      
      <Jokes />
    </div>
  );
}

export default RightSection;
