import { useState } from "react";
import "./Carrousel.css";
import arrow from "../assets/arrow.svg";

function Carrousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPictures = pictures.length;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
  <div className="carrousel">
  {pictures.length > 1 ? (
    <>
      <p className="slide-number">{`${currentIndex + 1}/${totalPictures}`}</p>
      <img className="carrousel-picture" src={pictures[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <img className="carrousel-arrow carrousel-arrow-left" src={arrow} alt="arrow" onClick={goToPrevious} />
      <img className="carrousel-arrow carrousel-arrow-right" src={arrow} alt="arrow" onClick={goToNext} />
    </>
  ) : (
    <img className="carrousel-picture" src={pictures[currentIndex]} alt={`Image ${currentIndex + 1}`} />
  )}
</div>
  );
}

export default Carrousel;
