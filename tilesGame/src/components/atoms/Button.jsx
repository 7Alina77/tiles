import PropTypes from 'prop-types';

function Button({randomizeCards, setCards, setLaps}) {

  const handleClick = () => {
    setCards(randomizeCards());
    setLaps(0);
  }

  return (
    <button 
      onClick={handleClick} 
      style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
      className="transition duration-300 hover:scale-105 text-sm py-2 px-4 bg-cyan-600 mb-4 sm:py-4 sm:px-8 text-cyan-100 rounded-2xl font-bold sm:text-base inline-flex items-center hover:bg-cyan-800 focus:ring focus:ring-cyan-500 drop-shadow-cyanShadow">
      Start new game!
    </button>
  )
};

Button.propTypes = {
  randomizeCards: PropTypes.func.isRequired,
  setLaps: PropTypes.func.isRequired,
  setCards: PropTypes.func.isRequired,
};

export default Button;