import React from 'react'
import Card from '../Card/Card'
import { cards } from '../../utils/data'

const Cards = ({ onCardClick }) => {
  return (
    <main className="content">
        <section className="elements">
            {
                cards.map((card) => {
                return <Card
                 key={card._id}
                  name={card.name} 
                  link={card.link}
                onOpen={() => onCardClick(card)}/>
                })
            }
        </section>
      </main>
  )
}

export default Cards
