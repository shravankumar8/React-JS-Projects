import logo from './logo.svg';
import Header from './components/Header';
import './App.css';
import Todoitem from './components/Todoitem'
import Button from './components/button';
import './stylesheets/style.css'
import Buttonhooks from './components/buttonhooks'
function App() {
 return (
 <div className="todo-container">
  <Header />
  <Todoitem completed={true} todo="eat" />
  <Todoitem todo="sleep"/>
  <Todoitem todo="code"/>
  <Todoitem todo="repeat"/>
  <Todoitem  todo="assignment"/>
  <Button />
  <Buttonhooks name="add"/>
  <Buttonhooks name="minus"/>
 </div>)
}


export default App;
