class Alunos {
    constructor() {
        this.alunos = []
    }

    add(aluno) {
        this.alunos.push(aluno);
    }

    get() {
        return this.alunos;
    }
    remove(id) {
        this.alunos = this.alunos.filter(aluno => aluno.id != id)
    }
}

export default Alunos
