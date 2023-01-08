import React from 'react';
import style from './Work.module.css'


export const Work = (props: any) => {
    return (
        <div className={style.work}>
            <div className={style.workImg}>
                <img className={style.icon} src={props.img} alt="Картинка"/>
                <button className={style.button}><span>Смотреть</span></button>
            </div>
            <div className={style.information}>
                <h3 className={style.title}>{props.title}</h3>
                <div className={style.description}>{props.description}</div>
            </div>
        </div>
    );
};

