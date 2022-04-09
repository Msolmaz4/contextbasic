import { useState } from "react";
import "./App.css";
import UserList from "./components/UserList";

function App() {
  const data = [
    { id: 1, name: "ali", email: "ali@com", age: 25, color: "lightcyan" },
    { id: 2, name: "ahmet", email: "ahmey@com", age: 20, color: "honeydew" },
    { id: 3, name: "aydin", email: "aydin@com", age: 253, color: "red" },
  ];

  const [users, setUsers] = useState(data);

  const changeColor =(id,color)=>{
    setUsers(
      users.map(user => (user.id === id ? {...user,color:color}: user))
    )

  }

  return <div className="App">
<h1>WELCOME</h1>
<UserList
users={users}
changeColor={changeColor}

/>



  </div>;
}

export default App;
