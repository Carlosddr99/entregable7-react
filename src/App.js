import './App.css';
import { Header} from './Contexts/LanguageContext.js'
import { TodoListProvider} from './Contexts/TodoListContext.js'
import LanguageBoton from './Componentes/LanguageBoton'
import TodoList from './Componentes/TodoList'


function App() {
  return (
    <Header>
      <TodoListProvider>
        <LanguageBoton />
        <TodoList />
      </TodoListProvider>
    </Header>

  );
}

export default App;
