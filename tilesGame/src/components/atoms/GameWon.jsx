import PropTypes from 'prop-types';

function GameWon({laps}) {
  return (
    <div className="mb-10 md:flex md:items-center md:justify-center md:h-screen">
      <h2 className="text-2xl text-cyan-600 font-semibold drop-shadow-cyanShadow">
        Wow! You did it in {laps} laps!
      </h2>
    </div>
  )
}

GameWon.propTypes = {
  laps: PropTypes.number.isRequired, 
};

export default GameWon;