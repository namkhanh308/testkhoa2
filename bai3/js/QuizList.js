import QuizContainer from "./QuizContainer.js";
const $template = document.createElement("template");
$template.innerHTML = `
	<div class="quiz-list">
  
	</div>
`;
export default class QuizList extends HTMLElement {
  constructor() {
    super();
    this.appendChild($template.content.cloneNode(true));
    this.$list = this.querySelector(".quiz-list");
  }

  static get observedAttributes() {
    return ["quizs"];
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName == "quizs") {
      let data = JSON.parse(newValue);
      for (let quizData of data) {
        let $quizContainer = new QuizContainer();
        // $quizContainer.setAttribute("id", quizData.id);
        $quizContainer.setAttribute("category", quizData.category);
        $quizContainer.setAttribute("type", quizData.type);
        $quizContainer.setAttribute("difficulty", quizData.difficulty);
        $quizContainer.setAttribute("correct", quizData.correct_answer);
        $quizContainer.setAttribute("question", quizData.question);

        this.$list.appendChild($quizContainer);
      }
    }
  }
}
window.customElements.define("quiz-list", QuizList);
