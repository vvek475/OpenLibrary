import { Link } from "react-router-dom";

function Card({...card}) {
  console.log(card.image)
  return (
    <div className="card">
      <Link to={`/detail/${card.id}`} href="#" className="card__title">{card.title}</Link>
      <img
        className="card__img"
        alt="book cover"
        src={ card.image }
      />
      <div className="card__description">
      { card.description }
      </div>
      <a className="card__author" href={card.authorURL}>{card.authorName}</a>
    </div>
  )
}

export default Card;