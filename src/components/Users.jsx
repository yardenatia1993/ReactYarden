import { useState } from 'react';


const Users = () => {
  const [users, setUsers] = useState([
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' },
    { email: 'user3@example.com', password: 'password3' },
  ]);

  const addUser = (email, password) => {
    setUsers([...users, { email, password }]);
  }

  const getUser = (email, password) => {
    return users.find(u => u.email === email && u.password === password);
  }


  const checkUserExist = (email) => {
    return users.find(u => u.email === email);
  }

  return { users, addUser, getUser, checkUserExist };
}

export default Users;
