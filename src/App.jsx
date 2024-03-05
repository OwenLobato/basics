import { useEffect, useState } from 'react';
import { fetchUsers, fetchUser } from './requests/user';

function App() {
  const [users, setUsers] = useState([]);
  const [userFound, setUserFound] = useState('');
  const [userNotFound, setUserNotFound] = useState('');

  const getUsers = async () => {
    try {
      const dbusers = await fetchUsers();
      setUsers(dbusers.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();

    fetchUser('Pepe')
      .then(({ data }) => setUserFound(data.name))
      .catch((err) => console.log(err));

    fetchUser('Petronilo')
      .then((res) => setUserNotFound(res.err))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ display: 'flex', gap: '8rem' }}>
      <div>
        <p>/users/</p>
        <ul>
          {users.map((user, i) => (
            <li key={i}>{user.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <p>/users/Pepe</p>
        <p>{userFound}</p>
      </div>
      <div>
        <p>/users/Petronilo</p>
        <p>{userNotFound}</p>
      </div>
    </div>
  );
}

export default App;
