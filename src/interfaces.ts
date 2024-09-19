interface carro {
    modelo: string,
    nome: string,
    ano: number
}

let civic: carro = {
    modelo: "sedan",
    nome: "civic",
    ano: 2014
}

civic.nome = "truck"

export default function printCarro() {
    console.log(civic)
}
