import { useRef, useContext } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

export default function EditProfile() {
const {handleUpdateAvatar} = useContext(CurrentUserContext);
const avatarRef = useRef();
function handleSubmit(e){
  e.preventDefault();
  handleUpdateAvatar({
    avatar: avatarRef.current.value,
  });
}

  return (
    <form className="form popup__form" id="form-avatar" onSubmit={handleSubmit}>
                    
          <input
            type="url"
            name="avatar"
            id="input-avatar-link"
            className="form__item form__item_el_link"
            placeholder="Url de Avatar"
            ref={avatarRef}
            required
          />
          <span className="form__item-error input-avatar-link-error"></span>
          <button className="form__button form__button_avatar" type="submit">
            Guardar
          </button>
        </form>
  )}