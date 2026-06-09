import React, { useState, useContext } from "react";
import ProfileButton from "../../assets/images/edit_button_img.svg";
import NewCard from "../Main/NewCard/NewCard";
import Popup from "../Main/Popup/Popup";
import EditProfile from "../Main/EditProfile/EditProfile";
import EditAvatar from "../Main/EditAvatar/EditAvatar";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Profile = (props) => {
  const {currentUser} = useContext(CurrentUserContext);
  const {handleOpenPopup, newCardPopup, editAvatarPopup, editProfilePopup} = props;


  return (
    <div className="profile">
      <div className="profile__left">
        <div className="profile__circular-avatar">
          <button
            type="button"
            className="profile__avatar_button"
            onClick={() => {
              console.log("click");
              handleOpenPopup(editAvatarPopup);
            }}
          >
            &#x270E;
          </button>
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt="foto de perfíl"
          />
        </div>
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name">{currentUser.name}</h1>
            <img
              className="profile__button"
              src={ProfileButton}
              alt="Botón para editar"
              onClick={() => {
                console.log("click");
                props.handleOpenPopup(editProfilePopup);
              }}
            />
          </div>
          <p className="profile__paragraph">{currentUser.about}</p>
        </div>
      </div>
      <div className="profile__right">
        <button
          aria-label="Add card"
          className="profile__add-button"
          type="button"
          onClick={() => props.handleOpenPopup(newCardPopup)}
        ></button>
      </div>
    </div>
  );
};

export default Profile;
