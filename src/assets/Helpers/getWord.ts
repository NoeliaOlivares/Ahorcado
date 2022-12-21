

let words: string[] = [
    'ORDENADOR',
    'CASTILLO',
    'NAVIDAD',
    'CONDUCIR',
    'PASATIEMPO',
    'CONSENTIMIENTO',
    'TUNEL',
    'CAPRICHO',
    'JUGUETE',
    'FUTURO',
    'ORGANIZACION',
    'TELEFONO',
    'CASCABEL',
    'ANIMAL',
    'COCHE',
    'AGUA',
    'VETERINARIO',
    'MEDICO',
    'HOSPITAL',
    'INDIGNACION',
    'AUTOBUS',
    'CONDUCTOR',
    'MAPACHE',
    'GATO',
    'PERRO',
    'ARROZ',
    'PATATA',
    'PRINCIPE',
    'ALCALDE',
    'CIUDAD', 
    'PUEBLO',
];


export function getWord (){
const randomWord = Math.floor (Math.random() * words.length);

 return words[randomWord];
}