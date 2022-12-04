import React from 'react';

const Book = ({ img, title, author }) => {
  const clickHandler = () => {
    console.log(title);
  };

  const clickHandlerComplex = (author) => {
    console.log(author);
  };

  return (
    <article className="book">
      <img src={img} alt="" onMouseOver={(e) => console.log(e.target)} />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button className="button" type="button" onClick={clickHandler}>
        Click
      </button>
      <button
        className="button"
        type="button"
        onClick={() => clickHandlerComplex(author)}
      >
        Click Callback
      </button>
    </article>
  );
};

export default Book;
