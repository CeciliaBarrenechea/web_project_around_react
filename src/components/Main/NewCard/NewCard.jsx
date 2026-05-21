export default function NewCard() {
  return (
    <form className="form popup__form" id="form-cards">
         
          <input
            type="text"
            name="title"
            minLength="2"
            maxLength="30"
            id="input-card-title"
            className="form__item form__item_el_title"
            placeholder="Título"
            required
          />
          <span className="form__item-error input-card-title-error"></span>
          <input
            type="url"
            name="link"
            id="input-card-link"
            className="form__item form__item_el_link"
            placeholder="Url del lugar"
            required
          />
          <span className="form__item-error input-card-link-error"></span>
          <button className="form__button" type="submit">Guardar</button>
        </form>
  )}