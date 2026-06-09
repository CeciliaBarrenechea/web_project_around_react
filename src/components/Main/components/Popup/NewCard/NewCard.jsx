import { useContext, useState } from "react";
import { CurrentUserContext } from "../../../../../contexts/CurrentUserContext";

export default function NewCard() {

  const { handleAddPlaceSubmit } = useContext(CurrentUserContext);

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("prueba")

    handleAddPlaceSubmit({ title, link });
    setTitle("");
    setLink("");
  };
  return (
    <form className="form popup__form" id="form-cards" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        minLength="2"
        maxLength="30"
        id="input-card-title"
        className="form__item form__item_el_title"
        placeholder="Título"
        value={title}
        onChange={handleTitleChange}
        required
      />
      <span className="form__item-error input-card-title-error"></span>
      <input
        type="url"
        name="link"
        id="input-card-link"
        className="form__item form__item_el_link"
        placeholder="Url del lugar"
        value={link}
        onChange={handleLinkChange}
        required
      />
      <span className="form__item-error input-card-link-error"></span>
      <button className="form__button" type="submit" >
        Guardar
      </button>
    </form>
  );
}
