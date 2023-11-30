import PropTypes from 'prop-types';

const BlockItem = ({ name, descr }) => {
  return (
    <div className="solution__block">
      <h3 className="solution__block-title">{name}</h3>
      <p className="solution__block-descr">{descr}</p>
    </div>
  );
};

BlockItem.propTypes = {
  name: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired,
};

export default BlockItem;
