import PropTypes from 'prop-types';

function Laps({laps}) {
  return (
    <h2 className='text-2xl text-cyan-600 font-semibold my-4 drop-shadow-cyanShadow'>Laps: {laps}</h2>
  )
}

Laps.propTypes = {
  laps: PropTypes.number.isRequired, // Validate laps as a required number
};

export default Laps;