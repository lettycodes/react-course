import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Helena", "Amanda", "Klaus", "Pedro"]);

  const [users] = useState([
    { id: 1, name: "Letícia", age: 29 },
    { id: 2, name: "Nicolas", age: 12 },
    { id: 3764826472, name: "Amanda", age: 25 },
    { id: 4675397593, name: "Gabriel", age: 28 },
  ]);

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
