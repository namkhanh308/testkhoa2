import QuizContainer from "./QuizContainer.js";
import QuizList from "./QuizList.js";

import data from "./data.js";
let $quizList = document.getElementById("quiz-list");
$quizList.setAttribute("quizs", JSON.stringify(data));
