const $template = document.createElement("template");
$template.innerHTML = `
<div class = "tong"> 
<div class="danh-muc">
Danh mục:
<span class="category"></span>
</div>
<div class="the-loai">
Thể loại:
<span class="type"></span>
</div>
<div class="do-kho">
Độ Khó:
<span class="difficulty"></span>
</div>
<p class="question">In Baseball, how many times does the ball have to be pitched outside of the strike zone before the batter is walked?</p>
<input type="checkbox" class="correct_answer" name="" id="" />4 
<input type="checkbox" class="incorrect_answer" name="" id="" />1 
<input type="checkbox" class="incorrect_answer" name="" id="" />2 
<input type="checkbox" class="incorrect_answer" name="" id="" />3 <br />
<input type="submit" value="Submit" />

</div>

`;

export default class QuizContainer extends HTMLElement {
  constructor() {
    super();
    this.appendChild($template.content.cloneNode(true));
    this.$category = this.querySelector(".category");
    this.$type = this.querySelector(".type");
    this.$difficulty = this.querySelector(".difficulty");
    this.$question = this.querySelector(".question");
    this.$correct = this.querySelector(".correct_answer");
  }

  static get observedAttributes() {
    return ["category", "type", "difficulty", "question", "correct"];
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName == "category") {
      this.$category.innerHTML = newValue;
    } else if (attrName == "type") {
      this.$type.innerHTML = newValue;
    } else if (attrName == "difficulty") {
      this.$difficulty.innerHTML = newValue;
    } else if (attrName == "correct") {
      this.$correct.innerHTML = newValue;
    } else if (attrName == "question") {
      this.$question.innerHTML = newValue;
    }
  }
}
window.customElements.define("quiz-container", QuizContainer);
