export default function EditProfile() {
  return (
    <form class="form popup__form" id="form-avatar">
          <img
            class="popup__close"
            src="./images/x.svg"
            alt="botón de cerrado"
            id="popup-close-card"
          />
          <h2 class="form__title form__title_avatar">Cambiar foto de perfil</h2>
          <input
            type="url"
            name="avatar"
            id="input-avatar-link"
            class="form__item form__item_el_link"
            placeholder="Url de Avatar"
            required
          />
          <span class="form__item-error input-avatar-link-error"></span>
          <button class="form__button form__button_avatar" type="submit">
            Guardar
          </button>
        </form>
  )}