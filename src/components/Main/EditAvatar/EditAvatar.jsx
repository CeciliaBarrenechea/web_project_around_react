export default function EditProfile() {
  return (
    <form className="form popup__form" id="form-avatar">
                    
          <input
            type="url"
            name="avatar"
            id="input-avatar-link"
            className="form__item form__item_el_link"
            placeholder="Url de Avatar"
            required
          />
          <span className="form__item-error input-avatar-link-error"></span>
          <button className="form__button form__button_avatar" type="submit">
            Guardar
          </button>
        </form>
  )}