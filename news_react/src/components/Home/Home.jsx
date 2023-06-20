import React from 'react'
import './Home.styles.scss'


export const Home = (props) => {
  const imageURL = `https://www.nytimes.com/${props.data.multimedia[0]?.url}`
  return (
      <div className='card__container'>
        <div className="card">
          <img src={imageURL} alt={props.data.source} className="card__image" />
            <p className="card__source">{props.data.source}</p>
            <p className="card__snippet">{props.data.snippet}</p>
            <p className="card__lead">{props.data.lead_paragraph}</p>
        </div>
      </div>

    
  )
}
