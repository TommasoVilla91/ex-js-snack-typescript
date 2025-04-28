// Snack 1
const value: unknown = await fetch('https://api.example.com/data');

if (typeof value === "string") {
  console.log(value.toUpperCase());  
} else if (typeof value === "number") {
  console.log(value * 2);
} else if (typeof value === "boolean") {
  value === true ? console.log("SI") : console.log("NO");   
} else if(value === null) {
  console.log("Il dato è vuoto");  
} else if(Array.isArray(value)) {
  console.log(value.length);  
} else if(value instanceof Promise) {
  value.then(res => console.log(res));
} else {
  console.log("Tipo non supportato");  
}