import { useState } from "react";
import "./Carrousel.css";
import arrow from "../assets/arrow.svg";

function Carrousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

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
      <img src={pictures[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <img src={arrow} alt="arrow" onClick={goToPrevious}/>
      <img src={arrow} alt="arrow" onClick={goToNext}/>
    </div>
  );
}

export default Carrousel;
