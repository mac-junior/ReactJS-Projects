import React from "react";
import { QuizProvider } from "./context/quiz-context";
import { QuizContext } from "./context/quiz-context";
import Quiz from "./components/quiz";
import Question from "./components/Question";
import Result from "./components/Result";

function App() {

  return (
    <QuizProvider>
      <div className="app-container">
        <h1>IQ-Mac</h1>
        <Quiz />
      </div>
    </QuizProvider>
  );
}

export default App;
