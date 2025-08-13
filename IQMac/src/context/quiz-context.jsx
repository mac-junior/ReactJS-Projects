import React, { createContext, useState } from "react";

// Create a Context for the quiz
export const QuizContext = createContext();

// QuizProvider component wraps our app and provides quiz state and methods
export const QuizProvider = ({ children }) => {
  // Sample quiz questions stored as an array of objects
  const quizData = [
  // General Knowledge
  {
    question: "What is the capital of France?",
    options: ["Berlin", "London", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    answer: "Mars",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Pacific", "Arctic"],
    answer: "Pacific",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Quartz"],
    answer: "Diamond",
  },
  {
    question: "What is the boiling point of water in Celsius?",
    options: ["100°C", "90°C", "80°C", "120°C"],
    answer: "100°C",
  },

  // Technology
  {
    question: "Which language is used for web apps?",
    options: ["PHP", "Python", "JavaScript", "All"],
    answer: "All",
  },
  {
    question: "Which company created the PlayStation?",
    options: ["Microsoft", "Sony", "Nintendo", "Sega"],
    answer: "Sony",
  },
  {
    question: "Which mobile OS is developed by Google?",
    options: ["iOS", "Windows Phone", "Android", "HarmonyOS"],
    answer: "Android",
  },
  {
    question: "Which programming language is developed by Apple?",
    options: ["Swift", "Kotlin", "Java", "Dart"],
    answer: "Swift",
  },
  {
    question: "Which of the following is not a JavaScript framework?",
    options: ["React", "Angular", "Vue", "Laravel"],
    answer: "Laravel",
  },

  // Science
  {
    question: "Which element has the symbol 'O'?",
    options: ["Gold", "Oxygen", "Silver", "Iron"],
    answer: "Oxygen",
  },
  {
    question: "Which organ pumps blood through the body?",
    options: ["Lungs", "Liver", "Heart", "Kidney"],
    answer: "Heart",
  },
  {
    question: "What gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"],
    answer: "Carbon Dioxide",
  },
  {
    question: "What part of the plant conducts photosynthesis?",
    options: ["Stem", "Root", "Leaf", "Flower"],
    answer: "Leaf",
  },

  // History
  {
    question: "In what year did World War II end?",
    options: ["1945", "1939", "1918", "1963"],
    answer: "1945",
  },
  {
    question: "Who was the first President of the USA?",
    options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
    answer: "George Washington",
  },
  {
    question: "What wall fell in 1989?",
    options: ["Berlin Wall", "Great Wall of China", "Hadrian’s Wall", "Western Wall"],
    answer: "Berlin Wall",
  },

  // Geography
  {
    question: "Which country hosted the 2022 FIFA World Cup?",
    options: ["Russia", "Qatar", "Brazil", "Germany"],
    answer: "Qatar",
  },
  {
    question: "What is the largest desert in the world?",
    options: ["Sahara", "Antarctica", "Gobi", "Kalahari"],
    answer: "Antarctica",
  },
  {
    question: "Mount Everest is located in which mountain range?",
    options: ["Andes", "Alps", "Himalayas", "Rockies"],
    answer: "Himalayas",
  },
  {
    question: "Which river is the longest in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    answer: "Nile",
  },

  // Math
  {
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answer: "2",
  },
  {
    question: "What is the square root of 81?",
    options: ["9", "8", "7", "6"],
    answer: "9",
  },
  {
    question: "What is the value of Pi (approx)?",
    options: ["2.14", "3.14", "4.14", "5.14"],
    answer: "3.14",
  },

  // Literature
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "George Orwell"],
    answer: "Harper Lee",
  },
  {
    question: "Who wrote '1984'?",
    options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "Isaac Asimov"],
    answer: "George Orwell",
  },

  // Entertainment
  {
    question: "Who painted the Mona Lisa?",
    options: ["Van Gogh", "Picasso", "Da Vinci", "Monet"],
    answer: "Leonardo da Vinci",
  },
  {
    question: "Who played Iron Man in the MCU?",
    options: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
    answer: "Robert Downey Jr.",
  },
  {
    question: "Which film won Best Picture at the 2023 Oscars?",
    options: ["Top Gun: Maverick", "Everything Everywhere All at Once", "The Fabelmans", "Avatar 2"],
    answer: "Everything Everywhere All at Once",
  },

  // Sports
  {
    question: "How many players in a football (soccer) team on the field?",
    options: ["10", "11", "12", "9"],
    answer: "11",
  },
  {
    question: "In tennis, how many Grand Slam titles are there each year?",
    options: ["2", "3", "4", "5"],
    answer: "4",
  },
  {
    question: "Who holds the most Olympic gold medals?",
    options: ["Usain Bolt", "Carl Lewis", "Michael Phelps", "Simone Biles"],
    answer: "Michael Phelps",
  },

  // Pop Culture
  {
    question: "Who is the current CEO of Tesla?",
    options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Tony Stark"],
    answer: "Elon Musk",
  },
  {
    question: "Which K-pop band released 'Dynamite'?",
    options: ["EXO", "BLACKPINK", "BTS", "TWICE"],
    answer: "BTS",
  },

  // Economics
  {
    question: "What does GDP stand for?",
    options: ["Gross Domestic Product", "General Domestic Policy", "Global Debt Percentage", "Gross Development Protocol"],
    answer: "Gross Domestic Product",
  },
  {
    question: "Which currency is used in Japan?",
    options: ["Yuan", "Won", "Yen", "Ringgit"],
    answer: "Yen",
  },

  // Bonus (Logic / Brain Teaser)
  {
    question: "If a plane crashes on the border of US and Canada, where do they bury the survivors?",
    options: ["USA", "Canada", "Both", "Nowhere"],
    answer: "Nowhere",
  },
  {
    question: "Which month has 28 days?",
    options: ["February", "All months", "January", "June"],
    answer: "All months",
  },

];


  // Initialize userAnswers as an array with a null value for each question
  const initialAnswers = quizData.map(() => null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(initialAnswers);

  // Function to update the answer for a given question index
  const setAnswerForQuestion = (index, answer) => {
    setUserAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = answer;
      return newAnswers;
    });
  };

  // Reset function to restart the quiz
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers(quizData.map(() => null));
  };

  return (
    <QuizContext.Provider
      value={{
        quizData,
        currentQuestion,
        setCurrentQuestion,
        userAnswers,
        setAnswerForQuestion,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
