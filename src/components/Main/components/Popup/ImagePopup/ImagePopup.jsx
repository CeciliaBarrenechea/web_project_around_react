import Popup from "../Popup.jsx";

export default function ImagePopup(props) {
  const { card, onClose } = props;

  return (
    <>
      <img
        className="popup__image popup__image-src"
        src={card?.link}
        alt={card?.name}
      />

      <p className="popup__caption">
        {card?.name}
      </p>
    </>
  );
}