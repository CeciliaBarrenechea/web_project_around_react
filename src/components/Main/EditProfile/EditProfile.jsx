export default function EditProfile() {
  return (
    <form className="form popup__form" id="form-profile">
                   
          <input
            type="text"
            name="name"
            minlength="2"
            maxlength="40"
            id="input-name"
            className="form__item form__item_el_name"
            placeholder="Nombre"
            required
          />
          <span className="form__item-error input-name-error"></span>
          <input
            type="text"
            name="about"
            minlength="2"
            maxlength="200"
            id="input-about"
            className="form__item form__item_el_about"
            placeholder="Acerca de mi"
            required
          />
          <span className="form__item-error input-about-error"></span>
          <button className="form__button" type="submit">Guardar</button>
        </form>
  )}