// Given the data below, define a type alias for representing users.

type User = {
  name: string,
  age: number,
  occupation: string
}

type Bird = {
  fly: () => void
}

type Fish = {
  swim: () => void;
}

type Pet = Bird | Fish;

type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

function getUser() {
  
}

let user = getUser();

// console.log(user?.address?.street);
// let x = foo ?? foo:bar();

let value:unknown = 'a'; 
if(typeof value === "string")
  console.log(value.toUpperCase());
