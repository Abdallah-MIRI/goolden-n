<?php


    /*
    ** Function Add File Style Site
    ** @Miri
    */
    function goold_custom_style() {
        
        wp_enqueue_style('main css', get_template_directory_uri() . '/assets/css/main.css'); // Main Style Site
        
       // wp_enqueue_style('main', get_template_directory_uri() . '/css/main.css', array(), '1.0.0','all'); // My custom css
    }

    add_action('wp_enqueue_scripts', 'goold_custom_style'); // Add Action Function

    // add_action('wp_enqueue_scripts', 'miri_Custom_style');