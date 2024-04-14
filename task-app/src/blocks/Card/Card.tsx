import React from 'react'
import { cn } from '@bem-react/classname'
import "./Card.css"

interface ICard  {
    img: string,
    description: string
}


const Card = ({img, description} : ICard) => {
    const cnCard = cn("Card")
  return (
        <div className={cnCard()}>
            <img  className={cnCard("Img")} src={img} />
            <p className={cnCard("Description")}>{description}</p>
        </div>
  )
}

export default Card