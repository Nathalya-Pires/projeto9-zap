import Questao from "./Questao";

export default function Flashcards({ deckPerguntas }) {
    return (
        <>
            {deckPerguntas.map((conj, index) => (
            <Questao conj={conj} key={index} index={index}/>
            ))}

        </>
    );
}



