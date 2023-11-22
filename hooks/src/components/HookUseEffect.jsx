import { useEffect, useState } from "react";

const HookUseEffect = () => {
  //sem array de dependências
  useEffect(() => {
    console.log("useEffect sem array de dependências");
  });

  const [number, setNumber] = useState(1);

  const changeNumber = () => {
    setNumber(number + 1);
  };

  //com array de dependências vazio
  useEffect(() => {
    console.log("useEffect com array de dependências vazio");
  }, []);

  //com variável monitorada no array de dependências
  const [anotherNumber, setAnotherNumber] = useState(0);
  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("useEffect executado sempre que o setAnotherNumber muda");
    }
  }, [anotherNumber]);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("useEffect de limpeza");
      //   setAnotherNumber(anotherNumber + 1);
    }, 2000);

    return () => clearTimeout(timer);
  }, [anotherNumber]);

  return (
    <div>
      <h2>useEffect</h2>
      <p>Número: {number}</p>
      <button onClick={changeNumber}>Mudar número!</button>
      <p>Outro Número: {anotherNumber}</p>
      <button onClick={(e) => setAnotherNumber(anotherNumber + 1)}>
        Mudar número!
      </button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
