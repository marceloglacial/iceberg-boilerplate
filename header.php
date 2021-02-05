<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package iceberg
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<noscript>
		<div class="alert alert-danger" role="alert">
			You need to enable JavaScript to run this app.
		</div>
    </noscript>
	
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="robots" content="index, follow" />
	<meta name="viewport" content="width=device-width, initial-scale=1 viewport-fit=cover">
	
	<title><?php bloginfo( 'title' ); ?> - <?php bloginfo( 'description' ); ?></title>
	<meta name="description" content="<?php bloginfo( 'description' ); ?>" />

	<link rel="profile" href="https://gmpg.org/xfn/11">
	<link rel="preload" href="<?php echo get_template_directory_uri() . '/assets/index.css' ?>" as="style" />
    <link rel="preload" href="<?php echo get_template_directory_uri() . '/assets/index.js' ?>" as="script" />

	<link rel="icon" type="image/png" href="<?php echo get_template_directory_uri() ?>/favicon.png" />
	<link rel="apple-touch-icon" href="<?php echo get_template_directory_uri() ?>/tile.png" />

	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black" />
	<meta name="msapplication-config" content="<?php echo get_template_directory_uri() ?>/browserconfig.xml" />

	<meta property="og:type" content="website" />
    <meta property="og:url" content="<?php bloginfo( 'url' ); ?>" />
    <meta property="og:title" content="<?php bloginfo( 'title' ); ?>" />
    <meta property="og:image" content="<?php echo get_template_directory_uri() ?>/tile-wide.png" />
    <meta property="og:description" content="<?php bloginfo( 'description' ); ?>" />
    <meta property="og:site_name" content="<?php bloginfo( 'title' ); ?>" />
	<meta property="og:locale" content="<?php bloginfo( 'language' ); ?>" />

	<link rel='stylesheet' href='<?php echo get_template_directory_uri() . '/assets/index.css' ?>' />
	
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'iceberg' ); ?></a>

	<header id="masthead" class="site-header">
		<div class="site-branding">
			<?php
			the_custom_logo();
			if ( is_front_page() && is_home() ) :
				?>
				<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
				<?php
			else :
				?>
				<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
				<?php
			endif;
			$iceberg_description = get_bloginfo( 'description', 'display' );
			if ( $iceberg_description || is_customize_preview() ) :
				?>
				<p class="site-description"><?php echo $iceberg_description; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></p>
			<?php endif; ?>
		</div><!-- .site-branding -->

		<nav id="site-navigation" class="main-navigation">
			<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e( 'Primary Menu', 'iceberg' ); ?></button>
			<?php
			wp_nav_menu(
				array(
					'theme_location' => 'menu-1',
					'menu_id'        => 'primary-menu',
				)
			);
			?>
		</nav><!-- #site-navigation -->
	</header><!-- #masthead -->
