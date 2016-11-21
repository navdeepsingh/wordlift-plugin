<?php
/**
 * Install Wizard Step #4.
 *
 * This file provides the step #4 for the install wizard.
 *
 * @link       https://wordlift.io
 * @since      3.9.0
 *
 * @package    Wordlift
 * @subpackage Wordlift/admin/partials
 */

?>
<div id="title"><?php esc_html_e( 'Language', 'wordlift' ) ?></div>
<div
	id="message"><?php esc_html_e( 'Each WordLift key can be used only in one language. Pick yours.', 'wordlift' ) ?></div>
<div id="input">
	<select class="select" id="language" autocomplete="off">
		<?php
		foreach ( $langs as $code => $label ) {
			echo '<option value="' . esc_attr( $code ) . '" ' . selected( $code, $lang, false ) . '>' . esc_html( $label ) . '</option>';
		}
		?>
	</select>
</div>
<div id="buttons">
	<a id="nextstep" onclick="savevalue()"
	   href="<?php echo esc_url( admin_url( 'admin.php?page=wl-setup&step=publisher' ) ); ?>"><?php esc_html_e( 'Next Step', 'wordlift' ); ?></a>
</div>
<script type="text/javascript">
	function savevalue() {
		var lang = jQuery('#input select').val();
		document.cookie = "wl_lang=" + lang + ';path=' + '<?php echo esc_url( admin_url() ); ?>';
	}
</script>
