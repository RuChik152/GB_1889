import React, { FC } from 'react';
import style from './question.module.scss';

interface QuestionProps {
    author: string,
    quest: () => void,
    change: () => void
}

export const Question: FC<QuestionProps> = ( { author, change, quest }) => {
    return (
        <div className={style.modal}>
          <div className={style.modal__item}>
            <p className={style.modal__text}>
              Привет, прежде чем приступить к работе, укажи свое имя
            </p>
            <input
                id="input_test_id"
                type="text"
                value={author}
                onChange={change}
                className={style.modal__name}
                placeholder="Ваше Имя"
            />
            <button
                className={style.modal__btn}
                onClick={quest}
                data-testid="quest-data-test"
            >
              Отправить
            </button>
          </div>
        </div>
    );

}
