import { useState } from "react";
import styled from "styled-components"
import iconePlay from "./assets/img/seta_play.png"
import setaVirar from "./assets/img/seta_virar.png"


export default function Questao({ conj, index }) {
    
    const [categoria, setCategoria] = useState(conj.categoria);

        if (categoria === "inicial") {
            return (
                <Questoes>
                    <p>Pergunta {index + 1} </p>
                    <img src={iconePlay} alt="Icone de Play" onClick={() => setCategoria("mostraPergunta")}/>
                </Questoes>
            );
        }

        if (categoria === "mostraPergunta") {
            return (
                <QuestaoAberta>
                    <p>{conj.pergunta}</p>
                    <img src={setaVirar} alt="Icone de Play" onClick={() => setCategoria("mostraResposta")}/>
                </QuestaoAberta>
            );
        }

        if (categoria === "mostraResposta") {
            return (
                <QuestaoAberta>
                    <p>{conj.resposta}</p>
                </QuestaoAberta>
            );
        }
    }



const Questoes = styled.div`
  width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
  }
`

const QuestaoAberta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
  position: absolute;
  bottom: 10px;
  right: 10px;
  }

`