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


// Tipos literales
type HexadecimalColor = `#${string}`;

// Forma correcta
const red: HexadecimalColor = '#f00';

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

// Union types

type HeroPower = 'flying' | 'super-strength' | 'teleporting' | 'super-speed';

// Interseccion types
type HeroBasicInfo = {
    name: string
    age: number
}

type HeroProperties = {
    readonly id?: HeroId // propiedad de solo lectura
    name: string
    age: number
    isActive?: boolean // propiedad opcional
    powerScale?: HeroPower
}

type Hero = HeroBasicInfo & HeroProperties;

// Método para crear ids, es nativo de la web
// crypto.randomUUID() -> 'a370760d-30e6-429c-8475-5c3e3f0aa96c'

function createHero(input: HeroBasicInfo): Hero {
    const {name, age} = input
    return {
        // id: '12345-1-2-3-4',
        id: crypto.randomUUID(),
        name, 
        age
    }
}

const batman: Hero = createHero({name:'Batman', age: 30});
batman.powerScale = 'super-strength';

// type index

type HeroProps = {
    isActived: boolean
    addres: {
        planet: string
        city: string
    }
}

const addressHero: HeroProps['addres'] = {
    planet: 'Tierra',
    city: 'Gotham'
}


//  Type from value

const addres = {
    planet: 'Tierra',
    city: 'Gotham'
}

type Address = typeof addres;

const addressHero2: Address = {
    planet: 'Tierra',
    city: 'Gotham'
}

// Type from funtion return

function createAddress() {
    return {
        city: 'Gotham', 
        planet: 'Tierra'
    }
}

type Address2 = ReturnType<typeof createAddress>;


// Array

const languages: string[] = ['JavaScript', 'TypeScript', 'Python'];


// Tipo multiple
const languages2: (string | number) [] = []

languages2.push('JavaScript')
languages2.push(1)

type Cellvalue = 'X' | '0' | '';

type GameBoard = [
    [Cellvalue, Cellvalue, Cellvalue],
    [Cellvalue, Cellvalue, Cellvalue],
    [Cellvalue, Cellvalue, Cellvalue],
]

const board: GameBoard = [
    ['', 'X', '0'],
    ['', 'X', '0'],
    ['', 'X', '0'],
]
