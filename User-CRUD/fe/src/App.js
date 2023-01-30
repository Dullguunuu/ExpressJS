import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const BE_URL = "http://localhost:6060/user"
  const [users, setUsers] = useState([])

  async function handleSubmit(e) {
    e.preventDefault()  //stop reloading during form submit
    const data = {
      username: e.target.username.value,
      age: e.target.age.value
    }

    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }

    const FETCHED_DATA = await fetch(BE_URL, options)
    const FETCHED_JSON = await FETCHED_DATA.json()
    setUsers(FETCHED_JSON.data)
    console.log(FETCHED_JSON);
  }

  useEffect(() => {
    fetchAllData()
  }, [])

  async function fetchAllData() {
    const FETCHED_DATA = await fetch(BE_URL)
    const FETCHED_JSON = await FETCHED_DATA.json()
    setUsers(FETCHED_JSON.data)
  }

  async function handleDelete(userId) {
    const deleted = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId
      }),
    };
    const FETCHED_DATA = await fetch(BE_URL, deleted)
    const FETCHED_JSON = await FETCHED_DATA.json()
    setUsers(FETCHED_JSON.data)
  }
  return (
    <div className="App">
      <h1>User CRUD with FS Module</h1>
      <form onSubmit={handleSubmit}>
        <label>
          UserName:
          <input name='username' />
        </label>
        <br />
        <label>
          Age:
          <input name='age' />
        </label>
        <br />
        <button>Submit</button>
      </form>
      <h1>User List</h1>
      {users && users.map((user) => {
        return (
          <div>
            {user.username} {user.age}
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </div>
        )
      })}
    </div>
  );
}

export default App;
