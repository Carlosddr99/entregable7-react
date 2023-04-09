import { createContext, useContext, useState } from "react";

const TodoListContext = createContext();

export const useTodoListConstext = () => useContext(TodoListContext);

export function TodoListProvider({children}){

    const[lista, setLista] = useState([]);
    const[crear, setCrear] = useState(false);
    const [id, setId] = useState(0);
    const [modificar, setModificar] = useState(null);

    function toogleCrear(){
        setCrear(crear ? false : true);
    }

    function itemModificar(item){
        setModificar(item);
    }

    function modificarLista(lista){
        setLista(lista)
    }

    function aumentarId(){
        setId(id+1)
    }

    return(
        <TodoListContext.Provider value={{lista, modificarLista, crear, toogleCrear, modificar, itemModificar, id, aumentarId}}>
            {children}
        </TodoListContext.Provider>
        )
}
