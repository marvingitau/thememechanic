
import './App.css';
import  { Context } from './context/ThemeContext';

function App() {
  return (
    <Context.Consumer>
      {value=><h2>{ value}</h2>}
    </Context.Consumer>

  );
}

export default App;
