import data from '../../data.json'
import BlockItem from "./BlockItem";
import style from "./Blocks.module.scss"

const Blocks = () => {
    return (
        <div className={style.blocks}>
            {data.map((item) => (
              <BlockItem key={item.id} name={item.name} descr={item.description} />
            ))}
        </div>
    );
};

export default Blocks;