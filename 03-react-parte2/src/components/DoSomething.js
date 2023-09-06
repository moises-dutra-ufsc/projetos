const DoSomething = ({ myCommand }) => {
  return (
    <div>
      <h1>Componente Faça Algo</h1>
      <button onClick={myCommand}>Clique aqui para executar o comando.</button>
    </div>
  );
};

export default DoSomething;
