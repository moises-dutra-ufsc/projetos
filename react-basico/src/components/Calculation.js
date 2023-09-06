const Calculation = () => {
  const valor1 = 10;
  const valor2 = 40;

  const handleMyClick = (e) => {
    console.log("Cliquei no botão.");
  };

  const printEvenOdd = (number) => {
    if (number % 2 == 0) {
      return <h1>O número {number} é par.</h1>;
    } else {
      return <h1>O número {number} é ímpar.</h1>;
    }
  };

  return (
    <div>
      Meus Cálculos
      <div>
        <p>Valor 1: {valor1}</p>
        <p>Valor 2: {valor2}</p>
      </div>
      <div className="buttoncss">
        <button onClick={handleMyClick}>Clique aqui neste botão!</button>
      </div>
      <div className="buttoncss">
        <button
          onClick={() => {
            console.log(valor1 + valor2);
          }}
        >
          Mostrar o resultado do cálculo
        </button>
      </div>
      <div>
        {printEvenOdd(3)}
        {printEvenOdd(8)}
      </div>
    </div>
  );
};

export default Calculation;
