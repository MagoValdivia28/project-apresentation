"use client";
import Alunos from "./models/Alunos";
import Aluno from "./models/Aluno";
import { useState } from "react";

const alunos = new Alunos();

export default function TodoPage() {
    const [task1, setTesk1] = useState('')
    const [task2, setTesk2] = useState('')
    const [task3, setTesk3] = useState('')
    const [tasks, setTesks] = useState([])

    function teste() {
        console.log(task)
    }
    const addTask = () => {

        if (task1.trim() && task2.trim() && task3 !== '') {
            const novoAluno = new Aluno(task1, task2, task3)

            alunos.add(novoAluno)

            setTesk1('')
            setTesk2('')
            setTesk3('')
        } else {
            throw new Error('Digite um valor valido');
        }
    }


    return (
        <div>
            <h1>cadastro</h1>

            <div>
                <input
                    type="text"
                    placeholder="Digite seu  nome"
                    value={task1}
                    onChange={(param) => setTesk1(param.target.value)}
                />
                <input
                    type="text"
                    placeholder="Digite ano escolar"
                    value={task2}
                    onChange={(param) => setTesk2(param.target.value)}
                />
                <input
                    type="text"
                    placeholder="Digite cor do cabelo"
                    value={task3}
                    onChange={(param) => setTesk3(param.target.value)}
                />
                <button onClick={addTask}>Adicionar</button>
            </div>
            {
                alunos.alunos.map((aluno) => (
                    <div key={aluno.id}>
                        <h1>{aluno.nome}</h1>
                        <h1>{aluno.serie}</h1>
                        <h1>{aluno.cabelo}</h1>
                        <button onClick={() => alunos.remove(aluno.id)}>Remover</button>
                    </div>
                ))
            }
        </div>


    )
}
