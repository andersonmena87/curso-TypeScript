// Hay 2 formas para tipar un objeto que llega como parametro

// 1. asginando los tipos al objeto -> objeto: tipos
function saludar({name, age}: {name:string, age:number}) {
    console.log(`Hola soy ${name} y tengo ${age} años`)
}

// 2. asignando tipo a parametros -> parametro : tipos, para este caso se debe destructurar las propiedades
function saludar2(persona: {name:string, age:number}) {
    const {name, age} = persona
    console.log(`Hola soy ${name} y tengo ${age} años`)
}

// Tipando funciones

// Tipo Function es el any de las funciones, se debe evitar usar

// Forma incorrecta
const anyFuction = (fn: Function) => {
    fn('Hola mundo')
}

anyFuction((texto: string) => console.log(texto))

// Forma correcta
const anyFuctionCorrect = (fn: (texto: string) => void) => {
    fn('Hola mundo')
}

anyFuction((texto: string) => console.log(texto))

// Tipando Funciones con arrow function

// 1. Tipando los parámetros
const sumar  = (a:number, b:number): number => {
    return a + b
}

// 2. Tipando la variable resta
const restar: (a:number, b:number) => number = (a, b) => {
    return a - b
}

// never -> Se usa para funiones que nunca van ha devolver nada

function throwError(message: string): never {
    throw new Error(message)
} 

// Type Alias

// Cuando se crean tipos personalizados se usan PascalCase

type HeroBasic = {
    name: string
    age: number
}

const hero: HeroBasic = {
    name: 'Spiderman',
    age: 30
}

function createHeroBasic(name: string, age: number): HeroBasic {
    return {name, age}
}

// Optional propperties

// Se especifica el formato que debe tener la cadena
type HeroId = `${string}-${string}-${string}-${string}-${string}`

type Hero = {
    readonly id?: HeroId // propiedad de solo lectura
    name: string
    age: number
    isActive?: boolean // propiedad opcional
}

// Método para crear ids, es nativo de la web
// crypto.randomUUID() -> 'a370760d-30e6-429c-8475-5c3e3f0aa96c'

function createHero(name: string, age: number): Hero {
    return {
        id: '12345-1-2-3-4',
        name, 
        age
    }
}









