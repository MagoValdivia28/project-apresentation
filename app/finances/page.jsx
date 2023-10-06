"use client"
import { useState } from 'react'
import styles from './finances.module.css'

import ListaTransacao from "@/models/ListaTransacao";


import transacao from '@/models/Transacao';


import DashCard from '../components/dashcard/DashCard';
import DashInput from '../components/dashinput/DashInput';
import DashRegistrer from '../components/dashRegistrers/DashRegistrer';

const listaTransacao = new ListaTransacao()

function Finances() {
  // Inputs
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  // Dados
  const [lista, setLista] = useState(listaTransacao.getHistorico());
  const [saldo, setSaldo] = useState(listaTransacao.saldo);
  const [receita, setReceita] = useState(listaTransacao.receitas);
  const [despesa, setDespesa] = useState(listaTransacao.despesas);

  // Edição
  const [flag, setFlag] = useState(0)
  const [editButton, setEditButton] = useState(false)



  // Adicionar receita
  const addReceita = () => {
    //console.log('Adicionando receita');
    listaTransacao.adicionarTransacao(description, value, "Receita");         // Adiciona a transação

    atualizarValores();
  }


  const addDespesa = () => {
    //console.log('Adicionando despesa');
    listaTransacao.adicionarTransacao(description, value, "Despesa");         // Adiciona a transação

    atualizarValores();
  }

  const exclude = (id) => {
    listaTransacao.excluirTransacao(id);                                      // Exclui a transação


    atualizarValores();
  }

  const edit = (id) => {
    const transacao = listaTransacao.getTransacaoPorId(id); 
                           
    console.log(transacao);
    setDescription(transacao.descricao);
    setValue(transacao.valor);

    setEditButton(true);
    setFlag(id);
  }

  const update = () => {
    listaTransacao.atualizarTransacao(flag, description, value);                 // Edita a transação

    atualizarValores();

    setEditButton(false);
    setFlag(0);
  }

  const atualizarValores = () => {
    setDescription('');                                           // Limpa os inputs
    setValue('');                                                 // Limpa os inputs

    setSaldo(listaTransacao.saldo);                               // Atualiza o saldo
    setReceita(listaTransacao.receitas);                           // Atualiza as receitas
    setDespesa(listaTransacao.despesas);
    setLista(listaTransacao.getHistorico());                           // Atualiza a lista de transações
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.profile}>
          <p className={styles.welcome}>Olá, Pedro</p>
          <p className={styles.useremail}>descubranerd@gmail</p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.mainheader}>
          <p className={styles.title}>Dashboard</p>
          <div className={styles.transaction}>

            <DashInput nome={"Descrição"} valor={description} tipo={"text"} aoMudar = {(e) => setDescription(e.target.value)}/>
            <DashInput nome={"Valor (R$)"} valor={value} tipo={'number'}  aoMudar = {(e) => setValue(e.target.value)}/>
          
            <div className={styles.type}>
              {
                editButton === true ? (
                  <button className={styles.buttonAtualizar} onClick={update}>Atualizar</button>
                ) : (
                  <>
                    <button className={styles.buttonreceita} onClick={addReceita}>Receita</button>
                    <button className={styles.buttondespesa} onClick={addDespesa}>Despesa</button>
                  </>
                )
              }
            </div>
          </div>
        </div>
        <div className={styles.infos}>
          <DashCard titulo={'saldo'} valor={saldo} cor={"#9fc7e0"} />
          <DashCard titulo={'Receita'} valor={receita} cor={"#9fe0b1"} />
          <DashCard titulo={'Despesa'} valor={despesa} cor={"#e09f9f"} />
        </div>

        <div className={styles.registros}>
          <div className={styles.registrosreceitas}>
            <p className={styles.registrosreceitastitle}>Receitas Registradas</p>
            <div className={styles.registrosreceitaslist}>
              {
                lista.map(transacao =>
                  transacao.tipo == "Receita" && (
                  <DashRegistrer desc={transacao.descricao} valor={transacao.valor} btnE={exclude(transacao.id)} btnR={edit(transacao.id)} />
                  ))
              }
            </div>
          </div>

          <div className={styles.registrosdespesas}>
            <p className={styles.registrosdespesastitle}>Despesas Registradas</p>
            <div className={styles.registrosdespesaslist}>
              {
                lista.map(transacao =>
                  transacao.tipo == "Despesa" && (
                    <div key={transacao.id} className={styles.registrosdespesasitem}>
                      <p>{transacao.descricao}</p>
                      <p className={styles.registrosdespesasitemvalue}>R$ {transacao.valor}</p>
                      <div className={styles.actions}>
                        <button
                          className={styles.actionsbutton}
                          onClick={() => exclude(transacao.id)}
                        >
                          <FaTrash />
                        </button>

                        <button
                          className={styles.actionsbutton}
                          onClick={() => edit(transacao.id)}
                        >
                          <FaPen />
                        </button>

                      </div>
                    </div>
                  ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Finances

