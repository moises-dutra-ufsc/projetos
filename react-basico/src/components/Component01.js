import Component02 from "./Component02";

const Component01 = () => {
  return (
    <div>
      <h2 className="Título do meu Componente">
        Meu primeiro componente React
      </h2>
      {console.log("Component01: Mensagem de teste.")}
      <div>
        <Component02 />
      </div>
    </div>
  );
};

export default Component01;
