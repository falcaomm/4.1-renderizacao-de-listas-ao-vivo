import React from 'react'
import { TarefaConcluida } from "./ListaTarefas/styled"

function TarefasConcluidas(props) {
    const listaRemovidos = props?.listaRemovidos 
    //pra verificar se essa props existe
    const listaRemovidosTela = listaRemovidos.map((item) => {
        return (
            <TarefaConcluida key={item}>
                {item}
            </TarefaConcluida>
        )
});

return (
    <> <h3>Tarefas Concluidas</h3>
        <ul>{listaRemovidosTela}</ul>
    </>
)
}

export default TarefasConcluidas


// rfce