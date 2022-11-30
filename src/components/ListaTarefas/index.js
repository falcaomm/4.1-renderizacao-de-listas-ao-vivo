import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  TarefaConcluida,
  ListaRemovidosContainer
} from "./styled";
import bin from "../../assets/bin.png";
import TarefasConcluidas from "../tarefasConcluidas";

export function ListaTarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [lista, setLista] = useState(["Tomar Banho", "Dormir", "Comer"])
  const [listaRemovidos, setListaRemovidos] = useState([])

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa]
    setLista(novaLista)
    setNovaTarefa("")

  };

  const listaTela = lista.map((item, index) => {
    return (
        <Tarefa key={index}>
          {item}
          <RemoveButton onClick={() => removeTarefa(item)} >
            <img src={bin} alt="" width="16px" />
          </RemoveButton>
        </Tarefa>
    )
  });

  const removeTarefa = (parametro) => {
    const listaAtualizada = lista.filter((tarefa) =>
      tarefa !== parametro
    )
    setLista(listaAtualizada)

    // const listaDosRemovidos = [...listaRemovidos, parametro]

    listaRemovidos.push(parametro)

    setListaRemovidos(listaRemovidos)

    // console.log(listaDosRemovidos);

    console.log(listaRemovidos);
  }

  const addTarefaEnter = (e) => {
    if (e.key === "Enter") {
      adicionaTarefa()
    }
  }

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa} 
          onKeyUp={addTarefaEnter}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul>{listaTela}</ul>

        {/* {lista.map((item, index) => {
          return (
            <ul>
              <Tarefa>
                {item}
                <RemoveButton>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            </ul>
          )
        })} */}

      </ListaContainer>

      <ListaRemovidosContainer>      
        <TarefasConcluidas
          listaRemovidos={listaRemovidos}
      />
      </ListaRemovidosContainer>

    </ListaTarefasContainer>
  );
}
