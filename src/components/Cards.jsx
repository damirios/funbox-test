import Card from "./Card";

import { useState } from "react";

export default function Cards(props) {
    const [selectedCards, setSelectedCards] = useState([]);
	const [disabledCards, setDisabledCards] = useState(['2']);

    return (
        <div className="main__cards cards">
            <Card selected={selectedCards} disabled={disabledCards} setSelected={setSelectedCards}
            taste='с фуа-гра' subtitle={{'1': '10 порций', '2': 'мышь в подарок'}} mass='0,5' productID='1' />
            <Card selected={selectedCards} disabled={disabledCards} setSelected={setSelectedCards}
            taste='с рыбой' subtitle={{'1': '40 порций', '2': '2 мыши в подарок'}} mass='2' productID='2' />
            <Card selected={selectedCards} disabled={disabledCards} setSelected={setSelectedCards}
            taste='с курой' subtitle={{'1': '100 порций', '2': '5 мышей в подарок', '3': 'заказчик доволен'}} mass='5' productID='3' />
        </div>
    )
}