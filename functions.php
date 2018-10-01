<?php

@ini_set('display_errors', 1);

function bellashop_enqueue_styles()
{
    $parent_style = 'parent-style';
    wp_enqueue_style('parent-style', get_template_directory_uri().'/style.css');
    wp_enqueue_style('child-style', get_stylesheet_directory_uri().'/style.css', array($parent_style), wp_get_theme()->get('Version'));
}
add_action('wp_enqueue_scripts', 'bellashop_enqueue_styles', 30);
