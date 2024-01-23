import "./Rating.css";

function Rating({ count }) {
  const stars = Array(5).fill(null);

  return (
    <div className="rating-container">
      {stars.map((e, index) => (
        <img
          className="stars"
          key={index + 1}
          src={index + 1 <= count ? "/src/assets/star-full.svg" : "/src/assets/star-empty.svg"}
          alt={`Star ${index + 1}`}
        />
      ))}
    </div>
  );
}

export default Rating;

