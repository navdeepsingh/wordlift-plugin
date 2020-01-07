<?php

if ( function_exists( 'acf_add_local_field_group' ) ) {
	acf_add_local_field_group( array(
		'key'                   => 'group_5e09d8a05741b',
		'title'                 => 'How To',
		'fields'                => array(
			array(
				'key'               => 'field_5e09d8a36d4fd',
				'label'             => 'Step',
				'name'              => 'step',
				'type'              => 'repeater',
				'instructions'      => '',
				'required'          => 0,
				'conditional_logic' => 0,
				'wrapper'           => array(
					'width' => '',
					'class' => '',
					'id'    => '',
				),
				'collapsed'         => '',
				'min'               => 0,
				'max'               => 0,
				'layout'            => 'block',
				'button_label'      => 'Add Step',
				'sub_fields'        => array(
					array(
						'key'               => 'field_5e09d8e26d4fe',
						'label'             => 'Type',
						'name'              => 'type',
						'type'              => 'radio',
						'instructions'      => 'Choose between Step or Section (if undecided use Step):
<ul>
<li><strong>Step</strong>: A step in the instructions for how to achieve a result. It is an ordered list with HowToDirection and/or HowToTip items.</li>
<li><strong>Section</strong>: A sub-grouping of steps in the instructions for how to achieve a result (e.g. steps for making a pie crust within a pie recipe).</li>
</ul>',
						'required'          => 1,
						'conditional_logic' => 0,
						'wrapper'           => array(
							'width' => '',
							'class' => '',
							'id'    => '',
						),
						'choices'           => array(
							'HowToStep'    => 'Step',
							'HowToSection' => 'Section',
						),
						'allow_null'        => 0,
						'other_choice'      => 0,
						'default_value'     => 'HowToStep',
						'layout'            => 'horizontal',
						'return_format'     => 'value',
						'save_other_choice' => 0,
					),
					array(
						'key'               => 'field_5e09d9076d4ff',
						'label'             => 'Text',
						'name'              => 'text',
						'type'              => 'wysiwyg',
						'instructions'      => '',
						'required'          => 0,
						'conditional_logic' => array(
							array(
								array(
									'field'    => 'field_5e09d8e26d4fe',
									'operator' => '==',
									'value'    => 'HowToStep',
								),
							),
						),
						'wrapper'           => array(
							'width' => '',
							'class' => '',
							'id'    => '',
						),
						'default_value'     => '',
						'tabs'              => 'all',
						'toolbar'           => 'full',
						'media_upload'      => 0,
						'delay'             => 0,
					),
					array(
						'key'               => 'field_5e09da206d504',
						'label'             => 'Name',
						'name'              => 'name',
						'type'              => 'text',
						'instructions'      => 'The name of the item.',
						'required'          => 0,
						'conditional_logic' => array(
							array(
								array(
									'field'    => 'field_5e09d9076d4ff',
									'operator' => '==empty',
								),
							),
						),
						'wrapper'           => array(
							'width' => '',
							'class' => '',
							'id'    => '',
						),
						'default_value'     => '',
						'placeholder'       => '',
						'prepend'           => '',
						'append'            => '',
						'maxlength'         => '',
					),
					array(
						'key'               => 'field_5e09d9276d500',
						'label'             => 'Image',
						'name'              => 'image',
						'type'              => 'image',
						'instructions'      => '',
						'required'          => 0,
						'conditional_logic' => array(
							array(
								array(
									'field'    => 'field_5e09d8e26d4fe',
									'operator' => '==',
									'value'    => 'HowToStep',
								),
							),
						),
						'wrapper'           => array(
							'width' => '',
							'class' => '',
							'id'    => '',
						),
						'return_format'     => 'array',
						'preview_size'      => 'medium',
						'library'           => 'all',
						'min_width'         => '',
						'min_height'        => '',
						'min_size'          => '',
						'max_width'         => '',
						'max_height'        => '',
						'max_size'          => '',
						'mime_types'        => '',
					),
					array(
						'key'               => 'field_5e09d9806d501',
						'label'             => 'Step Item',
						'name'              => 'step_item',
						'type'              => 'repeater',
						'instructions'      => '',
						'required'          => 0,
						'conditional_logic' => array(
							array(
								array(
									'field'    => 'field_5e09d8e26d4fe',
									'operator' => '==',
									'value'    => 'HowToStep',
								),
								array(
									'field'    => 'field_5e09d9076d4ff',
									'operator' => '==empty',
								),
							),
						),
						'wrapper'           => array(
							'width' => '',
							'class' => '',
							'id'    => '',
						),
						'collapsed'         => '',
						'min'               => 0,
						'max'               => 0,
						'layout'            => 'table',
						'button_label'      => '',
						'sub_fields'        => array(
							array(
								'key'               => 'field_5e09d9a26d502',
								'label'             => 'Step Type',
								'name'              => 'step_type',
								'type'              => 'radio',
								'instructions'      => 'Choose between Direction or Tip (if undecided use Direction):
* Direction: A direction indicating a single action to do in the instructions for how to achieve a result.
* Tip: An explanation in the instructions for how to achieve a result. It provides supplementary information about a technique, supply, author\'s preference, etc. It can explain what could be done, or what should not be done, but doesn\'t specify what should be done (see HowToDirection).',
								'required'          => 1,
								'conditional_logic' => 0,
								'wrapper'           => array(
									'width' => '',
									'class' => '',
									'id'    => '',
								),
								'choices'           => array(
									'HowToDirection' => 'Direction',
									'HowToTip'       => 'Tip',
								),
								'allow_null'        => 0,
								'other_choice'      => 0,
								'default_value'     => 'HowToDirection',
								'layout'            => 'horizontal',
								'return_format'     => 'value',
								'save_other_choice' => 0,
							),
							array(
								'key'               => 'field_5e09d9cb6d503',
								'label'             => 'Step Text',
								'name'              => 'step_text',
								'type'              => 'wysiwyg',
								'instructions'      => '',
								'required'          => 1,
								'conditional_logic' => 0,
								'wrapper'           => array(
									'width' => '',
									'class' => '',
									'id'    => '',
								),
								'default_value'     => '',
								'tabs'              => 'all',
								'toolbar'           => 'basic',
								'media_upload'      => 0,
								'delay'             => 0,
							),
						),
					),
					array(
						'key'               => 'field_5e09db2f6d507',
						'label'             => 'Section Item',
						'name'              => 'section_item',
						'type'              => 'repeater',
						'instructions'      => '',
						'required'          => 0,
						'conditional_logic' => array(
							array(
								array(
									'field'    => 'field_5e09d8e26d4fe',
									'operator' => '==',
									'value'    => 'HowToSection',
								),
							),
						),
						'wrapper'           => array(
							'width' => '',
							'class' => '',
							'id'    => '',
						),
						'collapsed'         => '',
						'min'               => 0,
						'max'               => 0,
						'layout'            => 'table',
						'button_label'      => '',
						'sub_fields'        => array(
							array(
								'key'               => 'field_5e09db426d508',
								'label'             => 'Step Name',
								'name'              => 'step_name',
								'type'              => 'text',
								'instructions'      => '',
								'required'          => 1,
								'conditional_logic' => 0,
								'wrapper'           => array(
									'width' => '',
									'class' => '',
									'id'    => '',
								),
								'default_value'     => '',
								'placeholder'       => '',
								'prepend'           => '',
								'append'            => '',
								'maxlength'         => '',
							),
							array(
								'key'               => 'field_5e09db506d509',
								'label'             => 'Step Text',
								'name'              => 'step_text',
								'type'              => 'wysiwyg',
								'instructions'      => '',
								'required'          => 0,
								'conditional_logic' => 0,
								'wrapper'           => array(
									'width' => '',
									'class' => '',
									'id'    => '',
								),
								'default_value'     => '',
								'tabs'              => 'all',
								'toolbar'           => 'basic',
								'media_upload'      => 0,
								'delay'             => 0,
							),
						),
					),
				),
			),
		),
		'location'              => array(
			array(
				array(
					'param'    => 'post_category',
					'operator' => '==',
					'value'    => 'category:how-to',
				),
			),
		),
		'menu_order'            => 0,
		'position'              => 'normal',
		'style'                 => 'default',
		'label_placement'       => 'top',
		'instruction_placement' => 'label',
		'hide_on_screen'        => '',
		'active'                => true,
		'description'           => '',
	) );
}