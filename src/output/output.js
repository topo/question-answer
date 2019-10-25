const { Component, useState } = wp.element;

const Output = ({
  classname,
  attributes
}) => (
  <div className={"wp-block-topo-question-answer " + open}>
    <div className="wp-block-topo-question" onclick="topoToggleQuestionAnswer">
      <p className="question" dangerouslySetInnerHTML={{ __html: attributes.question }}></p>
      <span className="arrow"></span>
    </div>
    <p className="wp-block-topo-answer" dangerouslySetInnerHTML={{ __html: attributes.answer }}></p>
  </div>
);

export default Output;