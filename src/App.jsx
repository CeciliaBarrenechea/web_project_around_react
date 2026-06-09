import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Main from "./components/Main/Main.jsx";
import Card from "./components/Card/Card.jsx";
import { useState, useEffect } from "react";
import NewCard from "./components/Main/NewCard/NewCard.jsx";
import Popup from "./components/Main/Popup/Popup.jsx";
import ImagePopup from "./components/ImagePopup/ImagePopup.jsx";
import { CurrentUserContext } from "./contexts/CurrentUserContext";
import { api } from "./utils/api.js";


function App() {
  const [popup, setPopup] = useState(null);
  const [currentUser, setCurrentUser] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await api.getUserInfo();
        setCurrentUser(data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
    const getCards = async () => {
      try {
        const data = await api.getInitialCards();
        setCards(data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
    getUser();
    getCards();
  }, []);

  async function handleCardLike(card) {
    const isLiked = card.isLiked;
    try {
      const newCard = isLiked
        ? await api.dislikeCard(card._id)
        : await api.likeCard(card._id);
      setCards((state) =>
        state.map((currentCard) =>
          currentCard._id === card._id ? newCard : currentCard,
        ),
      );
    } catch (error) {
      console.error("Error al procesar el like:", error);
    }
  }

  async function handleCardDelete(card) {
    await api.deleteCard(card._id);
    setCards((state) =>
      state.filter((currentCard) => currentCard._id !== card._id),
    );
  }

  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }

  function handleUpdateUser(data) {
    (async () => {
      await api.setUserInfo(data).then((newData) => {
        setCurrentUser(newData);
      });
    })();
    setPopup(null);
  }

  function handleUpdateAvatar(data) {
    (async () => {
      try {
        const newUserData = await api.setUserImage({ avatar: data.avatar });
        setCurrentUser(newUserData);
        setPopup(null);
      } catch (error) {
        console.error("Error al actualizar el avatar:", error);
      }
    })();
  }

async function handleAddPlaceSubmit(data) {
      try {
        const newCard = await api.addCard({
          title: data.title,
          link: data.link,
        });
        setCards((state)=>[newCard, ...state]);
        setPopup(null);
      } catch (error) {
        console.error("Error al añadir nueva tarjeta:", error);
      };
  }
  
  return (
    <CurrentUserContext.Provider
      value={{ currentUser, popup, handleUpdateUser, handleUpdateAvatar, handleAddPlaceSubmit }}
    >
      <div className="page">
        <Header />
        <Main
          handleOpenPopup={handleOpenPopup}
          handleClosePopup={handleClosePopup}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
