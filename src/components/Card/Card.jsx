import React from 'react'


const Card = ({name, link, onOpen, isLiked, onCardLike, card, onCardDelete}) => {
  const cardLikeButtonClassName = `element__photo-heart ${isLiked ? 'element__photo-heart_active' : ''}`;
  const imageComponent = {
    name: name, 
    link: link
  }

function handleLikeClick() {
  onCardLike(card)}

function handleDeleteClick() {
  onCardDelete(card)
}

  return (
    <div className="element">
        <button className="element__photo-trash" onClick={handleDeleteClick}></button>
        <img className="element__photo" src={link} alt={name} onClick={onOpen} />
        <div className="element__info">
          <h2 className="element__photo-name">{name}</h2>
          <button className={cardLikeButtonClassName}
          onClick={handleLikeClick}></button>
        </div>
      </div>
  )
}

export default Card
