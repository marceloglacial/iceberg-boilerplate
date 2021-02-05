<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package iceberg
 */

?>

	<footer id="colophon" class="site-footer">
		<div class="site-info">
			<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'iceberg' ) ); ?>">
				<?php
				/* translators: %s: CMS name, i.e. WordPress. */
				printf( esc_html__( 'Proudly powered by %s', 'iceberg' ), 'WordPress' );
				?>
			</a>
			<span class="sep"> | </span>
			Theme by: <a href="https://marceloglacial.com" target="_blank">Marcelo Glacial</a>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<script src="<?php echo get_template_directory_uri() . '/assets/js/index.js' ?>"></script>
<?php wp_footer(); ?>

</body>
</html>
