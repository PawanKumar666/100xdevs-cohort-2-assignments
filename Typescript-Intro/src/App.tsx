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

type StringOrNumber = string | number;

const stringOrNumberArray: StringOrNumber[] = [1, "hello", 2, "world"];

// Generic types for above use case

function getFirstElement<T>(arr: T[]){
  return arr[0];
}

const stringElement = getFirstElement<string>(["Abc", "Def", "Ghi"]);
const numberElement = getFirstElement<number>([1, 2, 3, 4, 5]);
const stringOrNumberElement = getFirstElement<StringOrNumber>([1, "hello", 2, "world"]);

console.log(stringElement);
console.log(numberElement);
console.log(stringOrNumberElement);

export default App;
