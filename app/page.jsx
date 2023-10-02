"use client";
import Alunos from "./models/Alunos";
import Aluno from "./models/Aluno";
import { useState } from "react";
import styles from "./page.module.css";
import 

const alunos = new Alunos();

export default function TodoPage() {
    const [task1, setTesk1] = useState('')
    const [task2, setTesk2] = useState('')
    const [task3, setTesk3] = useState('')
    const [tasks, setTesks] = useState([])

    const addTask = () => {

        if (task1.trim() && task2.trim() && task3 !== '') {
            const novoAluno = new Aluno(task1, task2, task3)

            alunos.add(novoAluno)

            setTesks([...tasks, novoAluno])
            setTesk1('')
            setTesk2('')
            setTesk3('')
        } else {
            throw new Error('Digite um valor valido');
        }
    }

    function removeTask(event) {
        alunos.remove(event.target.value)
        console.log(event.target.value)
        console.log(alunos)
        setTesks(alunos.alunos)
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
                tasks.map((aluno) => (
                    <div key={aluno.id}>
                        <p><strong>nome:</strong>{aluno.nome}</p>
                        <p><strong>ano escolar</strong>{aluno.serie}</p>
                        <p><strong>cor do belo</strong>{aluno.cabelo}</p>
                        <button onClick={removeTask} value={aluno.id}>Remover</button>
                    </div>
                ))
            }
        </div>


    )
}
