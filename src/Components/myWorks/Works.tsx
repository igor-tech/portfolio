import React from 'react';
import style from './Works.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import {Work} from './work/Work';

export const Works = () => {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h3 className={style.title}>My works</h3>
                <div className={style.works}>
                    <Work title={'APP JS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, quos?'} img={'https://photogora.ru/img/product/big/5637/1473685279329965637.jpg'}/>
                    <Work title={'React application'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, quos?'} img={'https://photogora.ru/img/product/big/5637/1473685279329965637.jpg'}/>
                </div>
            </div>
        </div>
    );
};

