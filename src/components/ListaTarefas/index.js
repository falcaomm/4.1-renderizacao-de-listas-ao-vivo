import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [lista, setLista] = useState(["Tomar Banho", "Dormir", "Comer"])

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
      <ul>
        <Tarefa key={index}>
          {item}
          <RemoveButton onClick={() => removeTarefa(item)} >
            <img src={bin} alt="" width="16px" />
          </RemoveButton>
        </Tarefa>
      </ul>
    )
  });

  const removeTarefa = (parametro) => {
    const removeItemLista = lista.filter((tarefa) =>
      tarefa !== parametro
    )
    setLista(removeItemLista)
  }

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        {listaTela}

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
    </ListaTarefasContainer>
  );
}
