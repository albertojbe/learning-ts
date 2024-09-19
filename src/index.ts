import printCarro from "./interfaces";

let pessoa: object = {
    nome: "Alberto",
    idade: 17
};

type ProductLoja = {
    nome: String
    preco: number
    unidade: number
}

let produto: ProductLoja = {
    nome: "Banana",
    preco: 5.0,
    unidade: 50
};

const person: [string, number, string] = ["Alberto", 20, "solteiro"]
let nomes: string[] = ["Alberto", "Cesar"]
let infos: (string | number)[] = ["Alberto", 20]

console.log(person)
console.log(nomes)
console.log(infos)
console.log(infos.pop())

function test(retorno:number | boolean): number | boolean {
    return retorno;
}

async function getName(params: string) {
    return params
}

console.log(test(false))

printCarro()