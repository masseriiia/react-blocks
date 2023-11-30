import data from '../../data.json';
import BlockItem from './BlockItem';
import '../../scss/components/Solution.scss';

const Blocks = () => {
  return (
    <div className="solution__blocks">
      {data.map((item) => (
        <BlockItem key={item.id} name={item.name} descr={item.description} />
      ))}
    </div>
  );
};

export default Blocks;
