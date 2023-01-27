import Cards from "./Cards";

export default function Content(props) {
    return (
        <main className="content">
            <h2 className="content__title">Ты сегодня покормил кота?</h2>
            <Cards />
        </main>
    );
}