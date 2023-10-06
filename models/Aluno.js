export default class Aluno {
    constructor(nome, serie, cabelo) {
        this.id = this.generateId();
        this.nome = nome;
        this.serie = serie;
        this.cabelo = cabelo;
    }

    generateId() {
        return Math.floor(Math.random() * 1000)
    }


    getInfo() {

        return `Nome: ${this.nome}, serie: ${this.serie}, Cabelo: ${this.cabelo}`
    }
}









