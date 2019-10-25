import { TextControl, Button } from '@wordpress/components';
const { Component, useState } = wp.element;
const { RichText } = wp.editor;

const Editor = ({
  classname,
  attributes,
  isSelected,
  setAttributes,
}) => {
  const [question, setQuestion] = useState('o')

  return (
    <div className={classname}>
      <h2>{isSelected ? '🧐 Question' : '🧐 ' + attributes.question }</h2>
      {
        isSelected &&
          <>
            <RichText value={attributes.question} onChange={(e) => setAttributes({question: e})} />
            <h2>☝️ Answer</h2>
            <RichText value={attributes.answer} onChange={(e) => setAttributes({answer: e})} />
          </>
      }
    </div>
  )
}

export default Editor