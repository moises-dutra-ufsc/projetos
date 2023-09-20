import logo from "./logo.svg";
import "./App.css";
import MyComponentTest from "./components/MyComponentTest";
import { useState } from "react";
import CustomComponent from "./components/CustomComponent";

function App() {
  const bTest = false;

  const [strTest] = useState("Estilizar");

  const [greenTitle] = useState(true);

  return (
    <div className="App">
      {/* CSS Global */}
      <h1>Título incluído no App.js.</h1>
      {/* CSS de Componente */}
      <MyComponentTest />
      <p>Parágrafo do App.js.</p>
      {/* CSS Inline */}
      <p style={{ color: "#ea5f08", background: "#06f1e2", padding: "50px" }}>
        Novo parágrafo do App.js, desta vez com CSS Inline.
      </p>
      <p style={{ color: "#cc6a6a", background: "#6acc85", padding: "20px" }}>
        Novo parágrafo do App.js, desta vez com CSS Inline.
      </p>
      <p style={{ color: "#a8cc6a", background: "#e20eed", padding: "30px" }}>
        Novo parágrafo do App.js, desta vez com CSS Inline.
      </p>
      <p
        style={
          bTest
            ? { color: "#d205f7", background: "yellow" }
            : { color: "#5e0217", background: "#bb9a86" }
        }
      >
        Novo parágrafo do App.js, desta vez com CSS Inline Dinâmico.
      </p>
      <p
        style={
          !bTest
            ? { color: "#d205f7", background: "yellow" }
            : { color: "#5e0217", background: "#bb9a86" }
        }
      >
        Novo parágrafo do App.js, desta vez com CSS Inline Dinâmico.
      </p>
      <p
        style={
          strTest === "Estilizar"
            ? { color: "#df0347", background: "magenta" }
            : null
        }
      >
        Novo parágrafo do App.js, desta vez com CSS Inline Dinâmico.
      </p>
      <p
        style={
          strTest !== "Estilizar"
            ? { color: "#df0347", background: "magenta" }
            : null
        }
      >
        Novo parágrafo do App.js, desta vez com CSS Inline Dinâmico.
      </p>
      {/* CSS Inline com Classe Dinâmica*/}
      <p className={greenTitle ? "green-title" : "title"}>
        Novo parágrafo do App.js, com CSS Inline e Classe Dinâmica.
      </p>
      <p className={!greenTitle ? "green-title" : "title"}>
        Novo parágrafo do App.js, com CSS Inline e Classe Dinâmica.
      </p>
      {/* Módulos CSS*/}
      <CustomComponent />
    </div>
  );
}

export default App;
