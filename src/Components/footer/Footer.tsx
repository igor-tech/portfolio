import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../../common/styles/Container.module.css'

const Footer = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div className={style.name}>Иван Иванов</div>
                <div className={style.social}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={style.info}>2023 Все права защищены</div>
            </div>
        </div>
    );
};

export default Footer;
