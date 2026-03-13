import React from "react";

export default function Booklet({ book }) {
  return (
    <article className="card">
      <div className="card-media">
        <img src={book.img} alt={book.title} onError={(e)=>{e.target.style.opacity=0.4}} />
      </div>
      <div className="card-body">
        <h2>{book.title}</h2>
        <ul>
          {book.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        <p className="pages"><strong>Total Pages:</strong> {book.pages}</p>
        <div className="actions">
          <a href={book.pdfView} target="_blank" rel="noreferrer" className="btn"><i className="fas fa-eye"></i> View</a>
          <a href={book.pdfDownload} download className="btn outline"><i className="fas fa-download"></i> Download</a>
        </div>
      </div>
    </article>
  );
}
