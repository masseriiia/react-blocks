import React from 'react';
import style from "./BlockItem.module.scss"

const BlockItem = ({ name, descr }) => {
    return (
        <div className={style.block}>
            <h3 className={style.title}>{name}</h3>
            <p className={style.descr}>{descr}</p>
        </div>
    );
};

export default BlockItem;
