import React from 'react';
import style from './remotelyWork.module.css'
import styleContainer from '../../common/styles/Container.module.css'

export const RemotelyWork = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`} >
                <h2 className={style.title}>Рассматриваю варианты удаленной работы</h2>
                <button className={style.button}><span>Нанять меня</span></button>
            </div>
        </div>
    );
};


