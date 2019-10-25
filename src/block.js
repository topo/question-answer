/**
 * block.js
 * --------
 * This JS script enables interaction with the HTML output of the block, or in other words,
 * what the user receives on the page/post/article.
 */

let questions = document.getElementsByClassName('wp-block-topo-question-answer');

for(i=0; i < questions.length; i++) {
  let question = questions[i];
  question.addEventListener('click', topoToggleQuestionAnswer);
}

function topoToggleQuestionAnswer(event) {
  let element = event.target;
  if (!element.classList.contains('wp-block-topo-question')) {
    element = element.parentElement;
  }
  if(element.classList.contains('wp-block-topo-question')) {
    this.classList.toggle('open');
  }
}
