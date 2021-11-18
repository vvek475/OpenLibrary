import { Link } from "react-router-dom";
import PillList from "../Pilllist/pillList";

function BookDetail({authors,book_description,book_title,cover_url,tags}) {
  return (
    <div className="book-detail">
      <div className="container">
        <div className="book-detail__left">
          <img
            className="book-detail__img"
            alt={book_title}
            src={cover_url}
          />
        </div>
        <div className="book-detail__right">
          <h1 className="book-detail__title"><a href="www.google.com">{book_title}</a></h1>
          <div className="book-detail__author">Written by <a href="www.google.com">
          {authors.map((author, i) => [
              i > 0 && ", ",
              <Link to={`/author/${author.id}`} key={author.id}> {author.author_name} </Link>
            ])}
            </a></div>
            <hr className="rule" />
          <div className ="book-detail__description">
          <div className ="_3939a6 description _1rtTp9" data-e2e="description">{book_description}</div>
          <PillList tags={tags} />
          </div>


        </div>
      </div>
    </div>
  )
}

export default BookDetail;