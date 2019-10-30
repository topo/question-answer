<?php
/**
 * Plugin Name:     Question Answer Block
 * Plugin URI:      https://github.com/topo/question-answer
 * Description:     A fully open source Gutenberg block for Q&As
 * Author:          topolitique.ch
 * Author URI:      https://topolitique.ch
 * Text Domain:     topo-question-answer
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Topo_Question_Answer
 */

function question_answer_block_assets() {
	/**
   * Output scripts & styles
   *  
   * */
	wp_enqueue_style(
		'question-answer-block-style',
		plugins_url( 'block/index.css', __FILE__ ),
		array()
	);

	wp_enqueue_script(
    'question-answer-block-script',
		plugins_url( 'block/block.js', __FILE__ ),
		array(),
		null,
		true
  );
}
add_action('enqueue_block_assets', 'question_answer_block_assets');


// Your code starts here.
function question_answer_block_init() {
	// Skip block registration if Gutenberg is not enabled/merged.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

  /**
   * Editor scripts & styles
   *  
   * */
	wp_register_script(
		'question-answer-block-editor',
		plugins_url( 'block/index.js', __FILE__ ),
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-editor',
			'wp-components'
		)
	);

	wp_register_style(
		'question-answer-block-editor',
		plugins_url( 'block/index.css', __FILE__ ),
		array()
	);


	register_block_type( 'topo/question-answer', array(
		'editor_script' => 'question-answer-block-editor',
		'editor_style'  => 'question-answer-block-editor',
		'style'         => 'question-answer-block-style',
	) );
}
add_action( 'init', 'question_answer_block_init' );