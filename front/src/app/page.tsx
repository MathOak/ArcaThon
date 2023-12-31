"use client";
import Image from "next/image";
import styles from "./page.module.css";

import TestPage from "@/components/testPage";
import UserProvider from "@/context/UserContext";
import Head from "next/head";
import { useState } from "react";
const questions = [
  {
    question: "O que é Educação financeira?",
    answers: [
      { option: "Libertação em forma de conhecimento", correct: true },
      { option: "Algo trivial", correct: false },
      { option: "nada importante", correct: false },
    ],
  },
  {
    question: "O Que é lucro?",
    answers: [
      { option: "Todo dinheiro que temos", correct: false },
      { option: "Ganho contabiizado após uma transição", correct: true },
      { option: "N.D.A", correct: false },
    ],
  },
  {
    question: "O que é um orçamento?",
    answers: [
      { option: "algo não planejado", correct: false },
      { option: "N.D.A.", correct: false },
      { option: "Algo que é planejado", correct: true },
    ],
  },
  {
    question: "O que é cartão de crédito?",
    answers: [
      { option: "uma chave de carteira tokenizada", correct: false },
      { option: "é igual a um cheque", correct: false },
      {
        option: "Um meio de pagamento que possibilita parcelas",
        correct: true,
      },
    ],
  },
];
export default function Home() {
  const [questionsList, setQuestions] = useState(questions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questionsCorrect, setQuestionsCorrect] = useState(0);

  const btnRestartClick = () => {
    setCurrentIndex(0);
    setQuestionsCorrect(0);
    loadQuestion();
  };

  const nextQuestion = (e: any) => {
    if (e.target.getAttribute("data-correct") === "true") {
      setQuestionsCorrect(questionsCorrect + 1);
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      loadQuestion();
    } else {
      finish();
    }
  };

  const finish = () => {
    // Sua lógica para exibir o resultado final
    // Utilize o estado questionsCorrect e questions.length para mostrar o resultado
  };

  const loadQuestion = () => {
    // Sua lógica para carregar a próxima pergunta e opções de resposta
    // Utilize o estado currentIndex para determinar a pergunta atual
    // Utilize o array de perguntas importado para obter as perguntas e respostas
  };
  return (
    <UserProvider>
      <Head>
        <title>Dumbo Cred</title>
        <link rel="stylesheet" href="style.css" />
      </Head>
      <main className={styles.main}>
        <h2>DUMBO QUIZ</h2>
        <div className="content">
          <span className="spnQtd"></span>
          <span className="question"></span>
          <div className="answers"></div>
        </div>
        <div className="finish">
          <span></span>
          <button>Reiniciar</button>
        </div>
      </main>
    </UserProvider>
  );
}
