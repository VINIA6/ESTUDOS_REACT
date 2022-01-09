import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';



function App() {
  const nome = "Maria"
  return (
    <div className="App">
      <SayMyName nome="Vinicius " />
      <SayMyName nome={nome} />
      <Frase/>
      <Frase/>
      <HelloWorld />
      <Pessoa
        nome="Vinicius"
        idade="28"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />
      <List/>
    </div>
  );
}

export default App;
