import PropTypes from 'prop-types';
import style from './Button.module.scss';

const Button = ({ children }) => {
  return <button className={style.button}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
