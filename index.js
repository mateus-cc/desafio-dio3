class heroi {

    ataque = '';

    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }


    atacar () {
        if (this.tipo === "mago") {
            this.ataque = 'magia';

        } else if (this.tipo === "guerreiro") {
            this.ataque ="espada";

        } else if (this.tipo === "monge") {
            this.ataque ="artes marciais";

        } else if (this.tipo === 'ninja') {
            this.ataque ="shuriken";

        } else {
            this.ataque = 'Ataque inválido'
        }
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`);
    }
}

let novoHeroi = new heroi ("Mateus", "28", "mago")
let novoHeroi1 = new heroi ("Gilberto", "65", "monge")

console.log(novoHeroi);
console.log(novoHeroi1);

novoHeroi.atacar();
novoHeroi1.atacar();