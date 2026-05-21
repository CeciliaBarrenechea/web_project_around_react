import Popup from "../Popup/Popup";

export default function ImagePopup(props) {
  const { card, onClose } = props;

  return (
    <Popup onClose={onClose}>
      <img
        className="popup__image"
        src={card?.link}
        alt={card?.name}
      />

      <p className="popup__caption">
        {card?.name}
      </p>
    </Popup>
  );
}