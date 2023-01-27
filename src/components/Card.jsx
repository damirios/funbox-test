import cat from '../assets/images/cat.png';

import { useState } from 'react';

export default function Card(props) {
    const {taste, subtitle, mass, selected, disabled, setSelected, productID} = props;
    const paragraphs = Object.values(subtitle);
    const [mouseOver, setMouseOver] = useState(false); // отключаем эту функцию. Отвечает за изменение tagline при выборе карточки и дальнейшем событии mouseOver
    const [tagline, setTagline] = useState(<p>Сказочное заморское яство</p>);

    function handleMouseLeave() {
        if (mouseOver) {
            setTagline(<p className='mouse-out'>Котэ не одобряет?</p>);
        }
    }

    function handleClick(e) {
        const card = e.target.closest('.card');

        if ( !disabled.includes(card.dataset.id) ) { // если эта карточка не отключена
            if ( selected.includes(card.dataset.id) ) { // если карточка есть среди выбранных - убираем
                const newSelected = selected.filter(el => el !== card.dataset.id);
                setSelected(newSelected);
                setTagline(<p>Сказочное заморское яство</p>);
                setMouseOver(false);
            } else { // если карточки нет среди выбранных - добавляем
                setSelected([...selected, card.dataset.id]);
                setMouseOver(true); // включаем функцию mouseOver
            }
        }
    }


    let fullClassName = "cards__card card";
    let bottomParagraph = <p>Чего сидишь? Порадуй котэ, <span onClick={handleClick}>купи</span></p>;
    
    let isDisabled = disabled.includes(productID);
    let isSelected = selected.includes(productID);
    if (isDisabled) {
        fullClassName += " disabled";
        bottomParagraph = <p>Печалька, {taste} закончился.</p>
    }
    if (isSelected) {
        fullClassName += " selected";
        if (taste === 'с фуа-гра') {
            bottomParagraph = <p>Печень утки разварная с артишоками</p>;
        } else if (taste === 'с рыбой') {
            bottomParagraph = <p>Головы щучьи с чесноком да свежайшая сёмгушка.</p>;
        } else if (taste === 'с курой') {
            bottomParagraph = <p>Филе из цыплят с трюфелями в бульоне.</p>;
        }
    }


    return (
        <div className={fullClassName} onMouseLeave={handleMouseLeave} data-id={productID}>
            <div className="card__container">
                <div onClick={handleClick} className="card__block">
                    <div className="card__tagline">{tagline}</div>
                    <div className="card__title">Нямушка</div>
                    <div className="card__taste">{taste}</div>
                    <div className="card__subtitle">
                        {paragraphs.map((para, index) => {
                            return (
                                <p key={index} className='card__subtitle-paragraph'>{para}</p>
                            );
                        })}
                    </div>
                    <div className="card__image">
                        <img src={cat} alt="cat" />
                    </div>
                    <div className="card__label">
                        <p>{mass}</p>
                        <p>кг</p>
                    </div>
                </div>
                <div className="card__bottom-text">
                    {bottomParagraph}
                </div>
            </div>
        </div>
    );
}