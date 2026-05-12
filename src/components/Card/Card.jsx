import React from 'react'


const Card = ({name, link}) => {
  return (
    <div className="element">
        <button className="element__photo-trash"></button>
        <img className="element__photo" src={link} alt={name} />
        <div className="element__info">
          <h2 className="element__photo-name">{name}</h2>
          <button className="element__photo-heart"></button>
        </div>
      </div>
  )
}

export default Card