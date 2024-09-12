import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import reviews from "./data";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const prevPerson = () => {
    if (index === 0) {
      setIndex(reviews.length - 1);
      return;
    }
    setIndex((prevIndex) => {
      let newIndex = prevIndex - 1;
      return newIndex;
    });
  };
  const nextPerson = () => {
    if (index === reviews.length - 1) {
      setIndex(0);
      return;
    }
    setIndex((prevIndex) => {
      let newIndex = prevIndex + 1;
      return newIndex;
    });
  };

  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    if (randomIndex === index) {
      randomIndex = Math.floor(Math.random() * reviews.length);
    }
    setIndex(randomIndex);
  };
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button type="button" className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button type="button" className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          random review
        </button>
      </article>
    </main>
  );
};
export default App;
