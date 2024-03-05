// async/await
export const fetchUsers = async () => {
  try {
    const res = await fetch('http://localhost:5000/users'); // Default 'GET' method
    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};

// .then().catch()
export const fetchUser = (name) => {
  return fetch(`http://localhost:5000/users/${name}`, { method: 'GET' })
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });
};
