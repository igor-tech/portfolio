import React from 'react';
import style from './Contact.module.css'
import styleContainer from '../../common/styles/Container.module.css'

export const Contact = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`} >
                <h3 className={style.title}>Контакты</h3>
                    <form  className={style.form}>
                        <div className={style.formName}>
                            <input type="text" name="name" id="name" required placeholder={'name'}/>
                        </div>
                        <div className={style.formEmail}>
                            <input type="email" name="email" id="email" required placeholder={'email'}/>
                        </div>
                        <div>
                            <textarea className={style.formTextArea} placeholder={'your text'}/>
                        </div>
                    </form>
                <button className={style.button}><span>Нанять меня</span></button>
            </div>
        </div>
    );
};


