<?php

function theme_support() {
    add_theme_support("title-tag");
}

function twitchcolor_styles() {
    $version = wp_get_theme()->get("Version");
    $styles = array(
        "/vendors/animate.css/animate.min.css",
        "/vendors/@fortawesome/fontawesome-free/css/all.min.css",
        "/assets/css/main.min.css",
        "/style.css"
    );
    foreach($styles as $index => $load_css) {
        $index++;
        wp_enqueue_style("loadcss{$index}", get_template_directory_uri(). $load_css, array(), $version, "all");
    }
}

function twitchcolor_javascripts() {
    $version = wp_get_theme()->get("Version");
    $javascripts = array(
        "/vendors/jquery/jquery.min.js",
        "/vendors/popper.js/umd/popper.min.js",
        "/vendors/bootstrap/js/bootstrap.min.js",
        "/vendors/isotope-layout/isotope.pkgd.min.js",
        "/vendors/jquery-circle-progress/circle-progress.min.js",
        "/vendors/smooth-scroll/smooth-scroll.polyfills.min.js",
        "/vendors/jquery-validation/jquery.validate.min.js",
        "https://maps.google.com/maps/api/js?sensor=false",
        "/assets/js/main.js"
    );
   
    foreach($javascripts as $index => $load_js) {
        $index++;
        wp_enqueue_script("loadjs{$index}", ($index == 8 ? $load_js : get_template_directory_uri(). $load_js), array(), $version, true);
    }
}
add_action("wp_enqueue_scripts", "twitchcolor_styles");
add_action("wp_enqueue_scripts", "twitchcolor_javascripts");
add_action("after_setup_theme","theme_support");