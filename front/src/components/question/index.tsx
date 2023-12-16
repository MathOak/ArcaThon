import { useState } from "react"; // Importe os módulos necessários do React
// Importe os módulos do Next.js e os estilos CSS necessários
import Head from "next/head";
import styles from './YourComponent.module.css'; 

// Aqui você pode importar seu arquivo de perguntas
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

export default function YourComponent() {
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

  // Use os hooks do React, como useState, para gerenciar o estado e os eventos

  return (
    <>
      <Head>
        <title>Dumbo Cred</title>
        <link rel="stylesheet" href="style.css" />
      </Head>
      <h2>DUMBO QUIZ</h2>
      <main>
        <div className={styles.content}>
          <span className={styles.spnQtd}></span>
          <span className={styles.question}></span>
          <div className={styles.answers}></div>
        </div>
        <div className={styles.finish}>
          <span></span>
          <button>Reiniciar</button>
        </div>
      </main>
      {/* Coloque seu script JS dentro de uma função do componente ou utilize React useEffect para carregar o script */}
      {/* <script src="script.js" type="module"></script> */}
    </>

    // Aqui você pode retornar o JSX para renderizar sua interface de usuário
    // Utilize as variáveis de estado e as funções definidas acima para exibir as perguntas e respostas
  );
}
