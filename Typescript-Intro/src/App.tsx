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

function sum(a: number, b: number) {
  return a + b;
}

const res = sum(1, 2); // Type for res is automatically inferred as number and 
// if we hover over invocation of sum method we can see the return type is automatically inferred as number

function isLegalAge(age: number): boolean {
  return age >= 18;
}

function callMethodWithArgument(age: number, method: (age: number) => boolean): boolean {
  return method(age);
}

let res2 = callMethodWithArgument(18, isLegalAge);

export default App;
