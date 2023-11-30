const BlockItem = ({ name, descr }) => {
  return (
    <div className="solution__block">
      <h3 className="solution__block-title">{name}</h3>
      <p className="solution__block-descr">{descr}</p>
    </div>
  );
};

export default BlockItem;
