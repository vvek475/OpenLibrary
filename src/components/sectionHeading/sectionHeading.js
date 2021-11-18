function SectionHeading({book_title}) {
  return (
    <div className="section-heading-block">
      <div className="section-heading-block__container container">
        <h3 className="section-heading">{book_title?book_title:'Setion Heading Here'}</h3>
      </div>
    </div>
  )
}

export default SectionHeading;