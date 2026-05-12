export default function EditProfile() {
  return (
    <form class="form popup__form" id="form-profile">
          <img
            class="popup__close"
            src="./images/x.svg"
            alt="botón de cerrado"
            id="popup-close-profile"
          />
          <h2 class="form__title">Editar perfil</h2>
          <input
            type="text"
            name="name"
            minlength="2"
            maxlength="40"
            id="input-name"
            class="form__item form__item_el_name"
            placeholder="Nombre"
            required
          />
          <span class="form__item-error input-name-error"></span>
          <input
            type="text"
            name="about"
            minlength="2"
            maxlength="200"
            id="input-about"
            class="form__item form__item_el_about"
            placeholder="Acerca de mi"
            required
          />
          <span class="form__item-error input-about-error"></span>
          <button class="form__button" type="submit">Guardar</button>
        </form>
  )}