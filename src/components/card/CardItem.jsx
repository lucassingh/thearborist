import React from 'react'
import './card.scss'

const CardItem = ({title, text}) => {
    return (
        <div className='container-card'>
            <h5>{title}</h5>
            <span>{text}</span>
        </div>
    )
}

export default CardItem