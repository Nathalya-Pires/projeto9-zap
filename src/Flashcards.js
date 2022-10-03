import Questao from "./Questao";

export default function Flashcards({ deckPerguntas, contador, setContador }) {
    return (
        <>
            {deckPerguntas.map((conj, index) => (
            <Questao conj={conj} key={index} index={index} contador={contador} setContador={setContador}/>
            ))}

        </>
    );
}
