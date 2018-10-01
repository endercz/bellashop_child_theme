<?php

@ini_set('display_errors', 1);

require_once get_stylesheet_directory().'/inc/bellashop-template-hooks.php';
require_once get_stylesheet_directory().'/inc/bellashop-template-functions.php';
require_once get_stylesheet_directory().'/inc/widgets/class-bellashop-widget-price-filter.php';

function bellashop_enqueue_styles()
{
    $parent_style = 'parent-style';
    wp_enqueue_style('parent-style', get_template_directory_uri().'/style.css');
    wp_enqueue_style('child-style', get_stylesheet_directory_uri().'/style.css', array($parent_style), wp_get_theme()->get('Version'));
    wp_enqueue_style('unishop-style', get_stylesheet_directory_uri().'/css/style.css', array($parent_style), wp_get_theme()->get('Version'));
    wp_enqueue_style('vendor-style', get_stylesheet_directory_uri().'/css/vendor.min.css', array($parent_style), wp_get_theme()->get('Version'));

    // $in_footer = true;
    // wp_register_script('unishop-script', get_stylesheet_directory_uri().'/js/scripts.js', array('jquery'), $in_footer);
    // wp_register_script('vendor-script', get_stylesheet_directory_uri().'/js/vendor.min.js', array('jquery'), $in_footer);
    // wp_enqueue_script('unishop-script');
    // wp_enqueue_script('vendor-script');
}
add_action('wp_enqueue_scripts', 'bellashop_enqueue_styles', 30);

function replace_price_filter_widget()
{
    unregister_widget('WC_Widget_Price_Filter');
    register_widget('WC_Bellashop_Widget_Price_Filter');
}

add_action('widgets_init', 'replace_price_filter_widget');
