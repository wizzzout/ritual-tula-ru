<?php
// Подключение стилей родительской темы
function mytheme_child_enqueue_styles() {
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
}
add_action('wp_enqueue_scripts', 'mytheme_child_enqueue_styles');