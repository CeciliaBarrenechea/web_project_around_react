import React, { useState } from "react";
import ProfileButton from "../../assets/images/edit_button_img.svg";
import NewCard from "../Main/NewCard/NewCard";
import Popup from "../Main/Popup/Popup";
import EditProfile from "../Main/EditProfile/EditProfile";
import EditAvatar from "../Main/EditAvatar/EditAvatar";

const Profile = (props) => {
  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };
  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };

  return (
    <div className="profile">
      <div className="profile__left">
        <div className="profile__circular-avatar">
          <button
            type="button"
            className="profile__avatar_button"
            onClick={() => {
              console.log("click");
              props.handleOpenPopup(editAvatarPopup);
            }}
          >
            &#x270E;
          </button>
          <img
            className="profile__avatar"
            src="https://imgproxy.domestika.org/unsafe/w:820/plain/src://content-items/004/599/793/ezgif.com-crop_%283%29-original.gif?1589758880"
            alt="foto de perfíl"
          />
        </div>
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name"></h1>
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
          <p className="profile__paragraph"></p>
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
