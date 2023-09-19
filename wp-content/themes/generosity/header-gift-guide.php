<?php
/**
 * The header.
 *
 * This is the template that displays all of the <head> section and everything up until main.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

?>
<!doctype html>
<html <?php language_attributes(); ?> <?php twentytwentyone_the_html_classes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="shortcut icon" type="image/x-icon" href="https://images.squarespace-cdn.com/content/v1/6434993e1adae2246c37219b/7b89ba17-051c-4f0f-b7cc-78af051ddac5/favicon.ico?format=100w" />
	<?php wp_head(); ?>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.3/css/foundation.min.css" />
    <link rel="stylesheet" href="/wp-content/themes/generosity/style-gift-guide.css?v=1.0" />
    <!-- Fundraise Up: the new standard for online giving -->
    <script>(function(w,d,s,n,a){if(!w[n]){var l='call,catch,on,once,set,then,track'
    .split(','),i,o=function(n){return'function'==typeof n?o.l.push([arguments])&&o
    :function(){return o.l.push([n,arguments])&&o}},t=d.getElementsByTagName(s)[0],
    j=d.createElement(s);j.async=!0;j.src='https://cdn.fundraiseup.com/widget/'+a;
    t.parentNode.insertBefore(j,t);o.s=Date.now();o.v=4;o.h=w.location.href;o.l=[];
    for(i=0;i<7;i++)o[l[i]]=o(l[i]);w[n]=o}
    })(window,document,'script','FundraiseUp','AGXAFFNZ');</script>
    <!-- End Fundraise Up -->
    <script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@3.0.5/dist/js.cookie.min.js"></script>
    <script src="/wp-content/themes/generosity/functions-gift-guide.js?v=1.0"></script>
</head>

<body <?php body_class(); ?>>
