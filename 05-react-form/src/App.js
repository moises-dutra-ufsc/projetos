import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <h1>Meu formulário:</h1>
      <Form user={{ name: "Zé Ninguém", email: "ze@ufsc.br" }} />
      <Form user={{ name: "Juquinha", email: "juquinha@ufsc.br" }} />
    </div>
  );
}

export default App;
