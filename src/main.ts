// Snack 1
let value: unknown = await fetch('https://api.example.com/data');

if (typeof value === "string") {
  console.log(value.toUpperCase());  
} else if (typeof value === "number") {
  console.log(value * 2);
} else if (typeof value === "boolean") {
  value === true ? console.log("SI") : console.log("NO");   
} else if (value === null) {
  console.log("Il dato è vuoto");  
} else if (Array.isArray(value)) {
  console.log(value.length);  
} else if (value instanceof Promise) {
  value.then(res => console.log(res));
} else {
  console.log("Tipo non supportato");  
};

// Snack 2
type Dipendente = {
  nome: string,
  cognome: string,
  annoNascita: number,
  sesso: "m" | "f",
  anniDiServizio: number[],
  readonly emailAziendale: string,
  contratto: "indeterminato" | "determinato" | "freelance"
};

// Snack 3
type Developer = Dipendente & {
  livelloEsperienza: "Junior" | "Mid" | "Senior",
  linguaggi?: string[],
  certificazioni: string[] | undefined
};

type ProjectManager = Dipendente & {
  teamSize: number | null,
      budgetGestito?: number,
      stakeholderPrincipali: string[] | undefined
};

type Team = {
  nome: string,
  progettoAttuale: string | null,
  budget: number,
  membri: [ProjectManager, Developer, ...Developer[]]
};