import React, { useContext, useState } from "react";
import "./Dropdown.scss";
import DropdownItem from "./DropdownItem";
import rightArrowDark from "../../../assets/img/rightDark.png";
import leftArrowDark from "../../../assets/img/leftDark.png";
import Radio from "../../Radio/Radio";
import Contacts from "../../Contacts/Contacts";
import myPorfileIconLight from "../../../assets/img/myProfileLight.png";
import myPorfileIconDark from "../../../assets/img/myProfileDark.png";
import editPorfileIconLight from "../../../assets/img/editProfileLight.png";
import editPorfileIconDark from "../../../assets/img/editProfileDark.png";
import radioIconLight from "../../../assets/img/radioLight.png";
import radioIconDark from "../../../assets/img/radioDark.png";
import conntactsIconLight from "../../../assets/img/contactsLight.png";
import conntactsIconDark from "../../../assets/img/contactsDark.png";
import communitiesIconLight from "../../../assets/img/communitiesLight.png";
import communitiesIconDark from "../../../assets/img/communitiesDark.png";
import jokesIconLight from "../../../assets/img/jokingLight.png";
import jokesIconDark from "../../../assets/img/joking.png";
import logOutIcon from "../../../assets/img/logout.png";
import darkMode from "../../../assets/img/darkImg.png";
import lightMode from "../../../assets/img/lightmodeorange.png";
import { AuthContext } from "../../../context/authContext";
import { useNavigate } from "react-router-dom";
import EditProfile from "../../Profile/EditProfile/EditProfile"
import {CSSTransition} from "react-transition-group";

function Dropdown({
  theme,
  setTheme,
  openDropdown,
  setOpenDropdown,
  handleLogout,
  openModal,
  closeModal,
  open,
  setOpen,
}) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isRadio, setIsRadio] = useState(false);

  const [activeMenu, setActiveMenu] = useState("main");

  console.log(theme);
  const handleClick = () => {
    navigate(`/profile/${user._id}`);
  };

  return (
    <div className="dropdown-container box-shadow border backgroundInner ">
      {!isRadio ? (
    

  
        <ul className="dropdown-wrapper ">
       
          <DropdownItem
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
            img={theme === "dark" ? lightMode : darkMode}
            text={"Change Theme"}
          />

          <DropdownItem
            onClick={handleClick}
            img={theme === "dark" ? myPorfileIconLight : myPorfileIconDark}
            text={"My Profile"}
          />
          <DropdownItem
            onClick={openModal}
            img={theme === "dark" ? editPorfileIconLight : editPorfileIconDark}
            text={"Edit Profile"}
          />


          <DropdownItem
            img={theme === "dark" ? radioIconLight : radioIconDark}
            text={"Radio"}
            onClick={() => setIsRadio(!isRadio)}
            goToMenu="radio"
          />
          <DropdownItem
            img={theme === "dark" ? conntactsIconLight : conntactsIconDark}
            text={"Contacts"}
          />
          <DropdownItem
            img={theme === "dark" ? communitiesIconLight : communitiesIconDark}
            text={"Communities"}
          />
          <DropdownItem
            img={theme === "dark" ? jokesIconLight : jokesIconDark}
            text={"Jokes"}
          />
          <DropdownItem
            onClick={handleLogout}
            img={logOutIcon}
            text={"Log Out"}
          />
         
        </ul>) : <Radio/>}
       

      
    </div>
          
  );
}

export default Dropdown;
