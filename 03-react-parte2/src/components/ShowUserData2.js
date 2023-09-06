const ShowUserData2 = ({ name, age, course, freshman }) => {
  return (
    <div>
      <h1>Detalhes dos Estudantes:</h1>
      <h3>
        <ul>
          <li>Nome: {name}</li>
          <li>Idade: {age}</li>
          <li>Curso: {course}</li>
          <li>{freshman ? <p>É calouro(a)!</p> : <p>Não é calouro(a)!</p>}</li>
        </ul>
      </h3>
    </div>
  );
};

export default ShowUserData2;
