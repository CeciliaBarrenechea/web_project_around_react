import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Cards from "./components/Cards/Cards.jsx";
import Card from "./components/Card/Card.jsx";
import { useState } from "react";
import NewCard from "./components/Main/NewCard/NewCard.jsx";
import Popup from "./components/Main/Popup/Popup.jsx";
import ImagePopup from "./components/ImagePopup/ImagePopup.jsx";

function App() {
  const [popup, setPopup] = useState(null);

  function handleOpenPopup(popup) {
    console.log("aqui");
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <>
      <div className="page">
        {popup && (
          <Popup onClose={handleClosePopup} title={popup.title} isImage={popup.isImage}>
            {popup.children}
          </Popup>
        )}
        <Header />
        <Profile
          handleOpenPopup={(newPopup) => {
            handleOpenPopup(newPopup);
          }}
        />
        <Cards
          onCardClick={(card) => {
            handleOpenPopup({
              title: "",
              isImage: true,
              children: <ImagePopup card={card} onClose={handleClosePopup} />,
            });
          }}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
