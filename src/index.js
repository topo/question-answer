/**
 * CSS imports
 */
import './editor/editor.scss';
import './output/output.scss';

/**
 * Component imports
 */
import Editor from './editor/editor.js';
import Output from './output/output.js';
/**
 * Internal Imports
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Component } = wp.element;

/**
 * Register block
 */
export default registerBlockType( 'news-blocks/interview', {
	title: __( 'Question & Answer' ),
	description: __( 'Show a question. Click on it. Show the answer' ),
	category: 'common',
	icon: 'admin-site',
	keywords: [
		__( 'News' ),
		__( 'Interview' ),
		__( 'Question' ),
	],
	attributes: {
		question: {
      source: 'html',
      selector: '.wp-block-topo-question .question'
    },
		answer: {
			source: 'html',
      selector: '.wp-block-topo-answer'
    },
	},
	edit: props => <Editor {...props} />,
	save: Output,
});