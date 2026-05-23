import React from 'react'


const Card = ({name, link, onOpen}) => {
  const imageComponent = {
    name: name, 
    link: link
  }
  return (
    <div className="element">
        <button className="element__photo-trash"></button>
        <img className="element__photo" src={link} alt={name} onClick={onOpen} />
        <div className="element__info">
          <h2 className="element__photo-name">{name}</h2>
          <button className="element__photo-heart"></button>
        </div>
      </div>
  )
}

export default Card
