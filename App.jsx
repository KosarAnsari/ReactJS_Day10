function App() {
  const userData = [
    {
      name: 'Peter',
      Age: 29,
      email: 'peter@test.com',
      id: 1,
    },
    {
      name: 'Bruce',
      Age: 28,
      email: 'bruce@test.com',
      id: 2,
    },
    {
      name: 'Bhaskar',
      Age: 27,
      email: 'bhaskar@test.com',
      id: 3,
    },
  ];
  return (
    <>
      <h1>Loop in JSX with Map Function</h1>

      <h2>Using Loop</h2>
      <table border="1">
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
            <td>Id</td>
          </tr>
        </thead>
        <tbody>
          {
            userData.map((user)=>(
              <tr key={user.data}>
            <td>{user.name}</td>
            <td>{user.Age}</td>
            <td>{user.email}</td>
            <td>{user.id}</td>
          </tr>


            ))
          }
        </tbody>
      </table>
      <h2>Without using Loop</h2>
      <table border="1">
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
            <td>Id</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Peter</td>
            <td>29</td>
            <td>peter@test.com</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Peter</td>
            <td>29</td>
            <td>peter@test.com</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default App;
