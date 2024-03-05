import { FULL } from './constants';

export default ({ type = FULL, className, onClick }) => (
  <img
    src={type}
    alt='Heart icon'
    className={className}
    onClick={onClick}
    onMouseEnter={(event) => (event.target.src = FULL)}
    onMouseLeave={(event) => (event.target.src = type)}
  />
);
