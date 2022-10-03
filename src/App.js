import Topo from "./Topo";
import Flashcards from "./Flashcards";
import styled from "styled-components";
import Footer from "./Footer";
import deckPerguntas from "./deckPerguntas"


export default function App() {

    const [contador, setContador] = useState(0);
    const tamamnhoDeck = deckPerguntas.length;

    return (
        <>
            <Desktop>
                <Topo />
                <Flashcards deckPerguntas={deckPerguntas} contador={contador} setContador={setContador}/>
            </Desktop>
            <Footer contador={contador} tamanhoDeck={tamanhoDeck}/>
        </>
    )
}




const Desktop = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`
