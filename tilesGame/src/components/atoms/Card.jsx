import PropTypes from "prop-types";

function Card({card}) { 
  return (
    <div className="relative rounded-2xl overflow-hidden w-16 h-20 sm:w-24 sm:h-28 drop-shadow-cyanShadow transform transition-transform duration-300 hover:scale-105 hover:cursor-pointer">
      <img className="absolute rounded-2xl inset-0 w-full h-full object-cover" src={card.src} alt="card image" />
      <img className="absolute rounded-2xl inset-0 w-full h-full object-cover" src={'./images/cover.jpg'} alt="card cover" />
    </div>
  )
}

Card.propTypes = {
  card: PropTypes.shape({
    src: PropTypes.string.isRequired, 
  }).isRequired, 
};

export default Card;