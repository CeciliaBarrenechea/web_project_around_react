export default function Popup(props) {
  const { onClose, title, isImage, children } = props;
  return (
    <div className="popup popup__opened">
      <div className={`popup__content ${isImage?"popup__content_image":""}`}>
        <button
          aria-label="Close modal"
          className="popup__close"
          type="button"
          onClick={onClose}
        />
        <h3 className="popup__title">{title}</h3>
        {children}
      </div>
    </div>
  );
}
