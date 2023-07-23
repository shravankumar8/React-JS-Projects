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
  <Todoitem />
  <Todoitem />
  <Todoitem />
  <Todoitem />
  <Todoitem />
  <Button />
 </div>)
}


export default App;
