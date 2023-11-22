import { useState } from "react";

const HookUseState = () => {
  let userName = "Roberto";

  const [name, setName] = useState("Josué");
  const [age, setAge] = useState(18);

  const changeNames = () => {
    userName = "Roberto dos Santos";

    setName("Josué Amaral");

    console.log(userName);
  };

  console.log(name);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(age);
  };

  return (
    <div>
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar o nome da variável</button>
      <p>Digite a sua idade:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="Enviar idade" />
      </form>
      <p>Você tem {age} anos.</p>
      <hr />
    </div>
  );
};

export default HookUseState;
