import logo from './logo.svg';
import Header from './components/Header';
import './App.css';
import Todoitem from './components/Todoitem'
import Button from './components/button';
import './stylesheets/style.css'
function App() {
 return (
 <div className="todo-container">
  <Header />
  <Todoitem todo="eat" />
  <Todoitem todo="sleep"/>
  <Todoitem todo="code"/>
  <Todoitem todo="repeat"/>
  <Todoitem  todo="assignment"/>
  <Button />
 </div>)
}


export default App;
