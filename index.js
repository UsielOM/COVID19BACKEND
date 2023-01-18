const personas = [{
        nombre: "Ivan",
        apellido: "Martinez",
        edad: 25
    },
    {
        nombre: "Sam",
        apellido: "Sanchez",
        edad: 27
    },
    {
        nombre: "Diego",
        apellido: "Sanchez",
        edad: 30
    },
    {
        nombre: "Nayeli",
        apellido: "Sanchez",
        edad: 17
    },
    {
        nombre: "Jon",
        apellido: "Sanchez",
        edad: 59
    }
]


personas.sort((a, b) => b.edad - a.edad);
console.log(personas[0]);
// let maxAge = 0;
// let oldestPerson;
// for (let i = 0; i < personas.length; i++) {
//     if (personas[i].edad > maxAge) {
//         maxAge = personas[i].edad;
//         oldestPerson = personas[i];
//     }
// }
// console.log(oldestPerson);