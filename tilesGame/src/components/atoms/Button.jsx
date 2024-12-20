import PropTypes from 'prop-types';

function Button({randomizeCards, setLaps}) {

  const handleClick = () => {
    randomizeCards();
    setLaps(0);
  }

  return (
    <button onClick={handleClick} className="bg-cyan-600 py-4 px-8 text-cyan-100 rounded-2xl font-bold text-base inline-flex items-center hover:bg-cyan-800 focus:ring focus:ring-cyan-500 transition drop-shadow-cyanShadow">
      Start new game!
    </button>
  )
};

Button.propTypes = {
  randomizeCards: PropTypes.func.isRequired,
  setLaps: PropTypes.func.isRequired,
};

export default Button;