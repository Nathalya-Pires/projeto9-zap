import { useState } from "react";
import styled from "styled-components"
import iconePlay from "./assets/img/seta_play.png"
import setaVirar from "./assets/img/seta_virar.png"


export default function Questao({ conj, index , contador, setContador}) {
    
    const [categoria, setCategoria] = useState(conj.categoria);
    const [icone, setIcone] = useState("");
    const [cor, setCor] = useState("");

        if (categoria === "inicial") {
            return (
                <QuestaoFechada>
                    <p>Pergunta {index + 1} </p>
                    <img src={iconePlay} alt="Icone de Play" onClick={() => setCategoria("mostraPergunta")}/>
                </QuestaoFechada>
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
                <RespostaQuestao>
                    <p>{conj.resposta}</p>
			  <div>
                    	<Botao cor="#FF3030" onClick={() => (setStatus("questaoRespondida"), setCor("#FF3030"), setContador(contador + 1), setIcone(iconeErrado))}>Não lembrei </Button>
                    	<Botao cor="#FF922E" onClick={() => (setStatus("questaoRespondida"), setCor("#FF922E"), setContador(contador + 1), setIcone(iconeQuase))}>Quase não lembrei </Button>
                    	<Botao cor="#2FBE34" pnClick={() => (setStatus("questaoRespondida"), setCor("#2FBE34"), setContador(contador + 1), setIcone(iconeCerto))}>Acertei</Button>
                    </div>	
                </RespostaQuestao>
            );
        }
        if (status === "questaoRespondida") {
        return (
            <QuestaoFinalizada cor={cor} >
                <p>Pergunta {index + 1}</p>
                <img src={icone} alt="Ícone" />
            </QuestaoFinalizada>
        );
    }   
    }



const QuestaoFechada = styled.div`
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
const RespostaQuestao = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #ffffd5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: "Recursive";
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

    div {
        display: flex;
    }
`

const Botao = styled.button`
    width: 100px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    background-color: ${(props) => props.cor};
    border-radius: 5px;
    border: none;
    margin: 0px 8px;
    padding: 5px;
`

const QuestaoFinalizada = styled.div`
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
        color: ${(props) => props.cor};
        text-decoration: line-through;
    }
` 
