function App() {
  const x: number = 1;
  return (
    <>
    <h1>{x}</h1>
    <h1>{greetWithFirstName("John")}</h1>
    </>
  )
}

function greetWithFirstName(firstName: string): string {
  return `Hello ${firstName}`;
}

export default App;
