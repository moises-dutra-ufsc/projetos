const ContainerComponent = ({ children, number }) => {
  return (
    <div>
      <h1>Este é o meu componente contêiner.</h1>
      {children}
      <p>O número passado como parâmetro foi: {number}</p>
    </div>
  );
};

export default ContainerComponent;
