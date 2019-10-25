
const Output = ({
  classname,
  attributes
}) => (
  <div className="wp-block-topo-question-answer">
    <div className="wp-block-topo-question" >
      <p className="question" dangerouslySetInnerHTML={{ __html: attributes.question }}></p>
      <span className="arrow"></span>
    </div>
    <div className="wp-block-topo-answer"><p className="answer" dangerouslySetInnerHTML={{ __html: attributes.answer }}></p></div>
  </div>
);

export default Output;