import { useState } from "react";

const ManageList = () => {
  const [products] = useState([
    "Relógio",
    "Caneca",
    "Abajour",
    "Tapete",
    "Smart TV",
  ]);

  const [students, setStudents] = useState([
    { id: 0, registration: 2023123456, name: "Joãozinho", age: 21 },
    { id: 1, registration: 2022098764, name: "Mariazinha", age: 23 },
    { id: 2, registration: 2018563083, name: "Juquinha", age: 18 },
    { id: 3, registration: 2021734393, name: "Fernandinha", age: 20 },
    { id: 4, registration: 2020999935, name: "Laura", age: 22 },
  ]);

  const deleteRandomStudent = () => {
    const randomNumber = Math.floor(Math.random() * 5);
    console.log("randomNumber: " + randomNumber);

    setStudents((prevStudents) => {
      console.log(prevStudents);
      return prevStudents.filter((student) => randomNumber !== student.id);
    });
  };

  return (
    <div>
      <ul className="list1">
        {products.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul className="list2">
        {students.map((student) => (
          <li key={student.id}>
            {student.name} ({student.registration}) - {student.age} anos
          </li>
        ))}
      </ul>
      <button onClick={deleteRandomStudent}>
        Remover Estudante Aleatório!
      </button>
    </div>
  );
};

export default ManageList;
