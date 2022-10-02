import Topo from "./Topo";
import Perguntas from "./Perguntas";
import styled from "styled-components";
import Footer from "./Footer";



export default function App() {
    return (
        <>
            <Desktop>
                <Topo />
                <Perguntas />
            </Desktop>
            <Footer />
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