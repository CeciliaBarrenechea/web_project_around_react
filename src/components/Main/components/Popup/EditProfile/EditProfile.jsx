import { useState, useContext } from 'react'; 
import { CurrentUserContext } from '../../../../../contexts/CurrentUserContext';
export default function EditProfile() {
  
  const {currentUser, handleUpdateUser} = useContext(CurrentUserContext); 
  const [name, setName] = useState(currentUser.name); 
  const [description, setDescription] = useState(currentUser.about); 

  const handleNameChange = (event) => {
    setName(event.target.value); 
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value); 
  };
  
 const handleSubmit = (event) => {
    event.preventDefault(); 

    handleUpdateUser({ name, about: description });
  };
  
  return (
    <form className="form popup__form" id="form-profile" onSubmit={handleSubmit}>
                   
          <input
            type="text"
            name="name"
            minLength="2"
            maxLength="40"
            id="input-name"
            className="form__item form__item_el_name"
            placeholder="Nombre"
            value={name}
            onChange={handleNameChange} 
            required
          />
          <span className="form__item-error input-name-error"></span>
          <input
            type="text"
            name="about"
            minLength="2"
            maxLength="200"
            id="input-about"
            className="form__item form__item_el_about"
            placeholder="Acerca de mi"
            value={description} 
          onChange={handleDescriptionChange}
            required
          />
          <span className="form__item-error input-about-error"></span>
          <button className="form__button" type="submit">Guardar</button>
        </form>
  )}