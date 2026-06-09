import React, { useState } from "react";
import Card from "../Card/Card";
import { api } from "../../utils/api";
import { useEffect, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Profile from "../Profile/Profile";
import Popup from "./Popup/Popup";
import NewCard from "./NewCard/NewCard";
import EditProfile from "./EditProfile/EditProfile";
import EditAvatar from "./EditAvatar/EditAvatar";
import ImagePopup from "../ImagePopup/ImagePopup";

const Main = (props) => {
  const { handleClosePopup, handleOpenPopup, cards, onCardLike, onCardDelete } = props;
  const {  popup } = useContext(CurrentUserContext);

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
    <main className="content">
      <Profile
        handleOpenPopup={handleOpenPopup}
        newCardPopup={newCardPopup}
        editAvatarPopup={editAvatarPopup}
        editProfilePopup={editProfilePopup}
      />
      <section className="elements">
        {cards.map((card) => {
          const isLiked = card.isLiked;
          return (
            <Card
              key={card._id}
              card={card}
              name={card.name}
              link={card.link}
              isLiked={isLiked}
              onCardDelete={onCardDelete}
              onCardLike={onCardLike}
              onOpen={() =>
                handleOpenPopup({
                  title: "",
                  isImage: true,
                  children: (
                    <ImagePopup card={card} onClose={handleClosePopup} />
                  ),
                })
              }
            />
          );
        })}
      </section>
      {popup && (
        <Popup
          onClose={handleClosePopup}
          title={popup.title}
          isImage={popup.isImage}
        >
          {popup.children}
        </Popup>
      )}
    </main>
  );
};

export default Main;
