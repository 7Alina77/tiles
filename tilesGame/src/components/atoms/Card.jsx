import PropTypes from "prop-types";

function Card({card, onCardClick}) { 
  return (
    <div
      onClick={() => onCardClick(card.id)}
      className="relative rounded-2xl overflow-hidden w-16 h-20 sm:w-24 sm:h-28 drop-shadow-cyanShadow transform transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
      style={{
        perspective: "1000px", // Enable 3D perspective
      }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500 ease-in-out"
        style={{
          transformStyle: "preserve-3d", // Preserve 3D space
          transform: card.isOpen ? "rotateY(180deg)" : "rotateY(0deg)", // Apply rotation to flip
        }}
      >
        {/* Back of the card (cover image initially visible) */}
        <img
          className="absolute inset-0 w-full h-full object-cover backface-hidden rounded-2xl"
          src="./images/cover.jpg"
          alt="card cover"
          style={{
            backfaceVisibility: "hidden", // Hide back when flipped
          }}
        />

        {/* Front of the card (card image visible after flip) */}
        <img
          className="absolute inset-0 w-full h-full object-cover backface-hidden rounded-2xl"
          src={card.src}
          alt="card image"
          style={{
            transform: "rotateY(180deg)", // Rotate the front side 180 degrees
            backfaceVisibility: "hidden", // Hide front when flipped
          }}
        />
      </div>
    </div>
  )
}

Card.propTypes = {
  card: PropTypes.shape({
    src: PropTypes.string.isRequired, 
    id: PropTypes.number.isRequired,
    isOpen: PropTypes.bool.isRequired,
  }).isRequired, 
  onCardClick: PropTypes.func.isRequired,
};

export default Card;