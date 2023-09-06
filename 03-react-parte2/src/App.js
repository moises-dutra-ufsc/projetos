import { useState } from "react";
import "./App.css";
import ConditionalRendering from "./components/ConditionalRendering";
import ManageData from "./components/ManageData";
import ManageList from "./components/ManageList";
import Picture from "./components/Picture";
import ShowUserData from "./components/ShowUserData";
import ShowUserData2 from "./components/ShowUserData2";
import ShowUserData3 from "./components/ShowUserData3";
import ContainerComponent from "./components/ContainerComponent";
import DoSomething from "./components/DoSomething";

function App() {
  const userAge = 22;

  const [course] = useState("Ciência da Informação");

  const [students /*, setStudents*/] = useState([
    { id: 0, registration: 2023123456, name: "Joãozinho", age: 21 },
    { id: 1, registration: 2022098764, name: "Mariazinha", age: 23 },
    { id: 2, registration: 2018563083, name: "Juquinha", age: 18 },
    { id: 3, registration: 2021734393, name: "Fernandinha", age: 20 },
    { id: 4, registration: 2020999935, name: "Laura", age: 22 },
  ]);

  const writeMessage = () => {
    const currentDate = new Date();

    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };

    const currentDateTime = currentDate.toLocaleString("pt-br", options);

    console.log("Novo clique do botão em: " + currentDateTime);
  };

  return (
    <div className="Imagens">
      <div>
        <Picture />
      </div>
      <div>
        <ManageData />
        <ManageList />
        <ConditionalRendering />
        <ShowUserData name="Zé Ninguém" age={userAge} course={course} />
        <ShowUserData2 name="Fulano" age={19} course={course} freshman={true} />
        <ShowUserData2
          name="Mariazinha"
          age={23}
          course={course}
          freshman={false}
        />
        <ShowUserData2
          name="Juquinha"
          age={20}
          course={course}
          freshman={false}
        />
        <ShowUserData2
          name="Maria Ninguém"
          age={18}
          course={course}
          freshman={true}
        />
        <ShowUserData2
          name="Beltrano"
          age={42}
          course={course}
          freshman={false}
        />
      </div>
      {students.map((student) => (
        <ShowUserData3
          key={student.id}
          name={student.name}
          age={student.age}
          registration={student.registration}
        />
      ))}
      <ContainerComponent number={25}>
        <p>Conteúdo extra do meu componente contêiner.</p>
        <p>1 + 1 = 3</p>
      </ContainerComponent>
      <ContainerComponent number={12}>
        <p>Blá blá blá.</p>
        <p>1 + 2 = 3</p>
      </ContainerComponent>
      <ContainerComponent number={7}>
        <p>Nhenhenhém.</p>
        <p>1 + 3 = 3</p>
      </ContainerComponent>
      <ContainerComponent number={3}>
        <p>Mimimi.</p>
        <p>3 + 6 = 3</p>
      </ContainerComponent>
      <DoSomething myCommand={writeMessage} />
    </div>
  );
}

export default App;
